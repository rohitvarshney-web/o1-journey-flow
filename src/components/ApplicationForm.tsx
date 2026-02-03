import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Upload, Loader2, Link as LinkIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  appendToGoogleSheet,
  uploadToGoogleDrive,
  connectGoogleAccount,
  isGoogleConnected,
  subscribeToAuthState,
  type GoogleAuthState,
} from "@/lib/googleSheets";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationForm = ({ open, onOpenChange }: ApplicationFormProps) => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [googleAuthState, setGoogleAuthState] = useState<GoogleAuthState>(() =>
    isGoogleConnected() ? 'connected' : 'not_connected'
  );
  const [showConnectPrompt, setShowConnectPrompt] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryOfCitizenship: "",
    currentVisa: "",
    timeline: [] as string[],
    resume: "",
    linkedIn: "",
    roleType: [] as string[],
    qualifications: [] as string[],
  });

  const totalSteps = 3;

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = subscribeToAuthState((state) => {
      setGoogleAuthState(state);
      if (state === 'connected') {
        setShowConnectPrompt(false);
      }
    });
    return unsubscribe;
  }, []);

  const requiredSchemas = useMemo(() => {
    const phoneSchema = z
      .string()
      .trim()
      .min(1, { message: "Phone number is required" })
      .max(30, { message: "Phone number is too long" })
      .refine((v) => /^[0-9+()\-\s.]{5,30}$/.test(v), {
        message: "Enter a valid phone number",
      });

    return {
      step0: z.object({
        name: z.string().trim().min(1, { message: "Full name is required" }).max(100, {
          message: "Full name must be under 100 characters",
        }),
        email: z
          .string()
          .trim()
          .min(1, { message: "Email address is required" })
          .email({ message: "Enter a valid email address" })
          .max(255, { message: "Email must be under 255 characters" }),
        phone: phoneSchema,
      }),
      step1: z.object({
        countryOfCitizenship: z.string().trim().min(1, { message: "Country of citizenship is required" }),
        timeline: z.array(z.string()).min(1, { message: "Please select a timeline" }),
      }),
      step2: z.object({
        roleType: z.array(z.string()).min(1, { message: "Please select at least one role" }),
      }),
    } as const;
  }, []);

  const clearError = (key: string) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const handleTimelineChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      timeline: checked
        ? [...prev.timeline, value]
        : prev.timeline.filter((t) => t !== value),
    }));
    clearError("timeline");
  };

  const handleRoleTypeChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      roleType: checked
        ? [...prev.roleType, value]
        : prev.roleType.filter((r) => r !== value),
    }));
    clearError("roleType");
  };

  const handleQualificationsChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      qualifications: checked
        ? [...prev.qualifications, value]
        : prev.qualifications.filter((q) => q !== value),
    }));
  };

  const validateStep = (stepIndex: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (stepIndex === 0) {
      const parsed = requiredSchemas.step0.safeParse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as string;
          if (key && !stepErrors[key]) stepErrors[key] = issue.message;
        }
      }
    }

    if (stepIndex === 1) {
      const parsed = requiredSchemas.step1.safeParse({
        countryOfCitizenship: formData.countryOfCitizenship,
        timeline: formData.timeline,
      });

      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as string;
          if (key && !stepErrors[key]) stepErrors[key] = issue.message;
        }
      }
    }

    if (stepIndex === 2) {
      const parsed = requiredSchemas.step2.safeParse({
        roleType: formData.roleType,
      });

      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as string;
          if (key && !stepErrors[key]) stepErrors[key] = issue.message;
        }
      }
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...stepErrors }));
      return false;
    }

    return true;
  };

  const validateRequiredBeforeSubmit = (): boolean => {
    const stepsToValidate = [0, 1, 2];
    for (const s of stepsToValidate) {
      const ok = validateStep(s);
      if (!ok) {
        setStep(s);
        return false;
      }
    }
    return true;
  };

  /**
   * Handle Google connection - MUST be triggered by direct user click
   */
  const handleConnectGoogle = async () => {
    try {
      await connectGoogleAccount();
      toast({
        title: "Connected!",
        description: "Your Google account is now connected.",
      });
    } catch (error) {
      console.error("Google connection error:", error);
      toast({
        title: "Connection failed",
        description: "Could not connect to Google. Please try again.",
        variant: "destructive",
      });
    }
  };

  /**
   * Handle file upload - only works if already connected
   */
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if connected BEFORE attempting upload
    if (!isGoogleConnected()) {
      toast({
        title: "Google not connected",
        description: "Please connect your Google account first to upload files.",
        variant: "destructive",
      });
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    setIsUploading(true);
    try {
      const driveLink = await uploadToGoogleDrive(file);
      handleInputChange("resume", driveLink);
      toast({
        title: "File uploaded!",
        description: "Resume uploaded to Google Drive successfully.",
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Failed to upload file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    if (step < totalSteps - 1) {
      setCanSubmit(false);
      setStep(step + 1);
      setTimeout(() => setCanSubmit(true), 300);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  /**
   * Handle form submission - checks auth state, does NOT trigger OAuth
   */
  const handleSubmit = async () => {
    if (!canSubmit || isSubmitting) return;

    if (!validateRequiredBeforeSubmit()) {
      toast({
        title: "Missing required fields",
        description: "Please complete the required questions before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Check if Google is connected - if not, show prompt (do NOT trigger OAuth)
    if (!isGoogleConnected()) {
      setShowConnectPrompt(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const submitData = {
        ...formData,
        timeline: formData.timeline.join(", "),
        roleType: formData.roleType.join(", "),
        qualifications: formData.qualifications.join(", "),
      };
      await appendToGoogleSheet(submitData);
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your application has been submitted.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(0);
    setShowConnectPrompt(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryOfCitizenship: "",
      currentVisa: "",
      timeline: [],
      resume: "",
      linkedIn: "",
      roleType: [],
      qualifications: [],
    });
    onOpenChange(false);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-xl p-0 overflow-hidden">
          <div className="bg-primary p-8 md:p-10 text-primary-foreground">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="w-16 h-16 mx-auto mb-6 rounded-sm bg-primary-foreground/20 flex items-center justify-center"
              >
                <Check className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Application Submitted!</h2>

              <p className="text-primary-foreground/90 mb-8 max-w-md mx-auto">
                Thank you for submitting your O-1 application. Our team will review your information and
                get back to you within 1-3 business days.
              </p>

              <div className="bg-background text-foreground rounded-sm p-6 mb-6 text-left">
                <h3 className="font-serif font-semibold mb-3">What's Next?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Our team will review your application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>You'll receive an email with next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Schedule your free consultation call</span>
                  </li>
                </ul>
              </div>

              <Button onClick={handleClose} size="lg" variant="secondary" className="w-full max-w-xs mx-auto rounded-sm">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0">
        <div className="bg-primary p-6 text-primary-foreground">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary-foreground/20 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                <DialogTitle className="text-primary-foreground font-serif text-lg">
                    Check Your O-1 Readiness
                  </DialogTitle>
                  <p className="text-xs text-primary-foreground/70">Applicant</p>
                </div>
              </div>
              {/* Google connection status indicator */}
              <div className="flex items-center gap-2">
                {googleAuthState === 'connected' ? (
                  <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded-sm flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Google Connected
                  </span>
                ) : googleAuthState === 'connecting' ? (
                  <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded-sm flex items-center gap-1">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Connecting...
                  </span>
                ) : (
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="text-xs h-7 rounded-sm"
                    onClick={handleConnectGoogle}
                  >
                    <LinkIcon className="w-3 h-3 mr-1" />
                    Connect Google
                  </Button>
                )}
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6">
          {/* Connect prompt alert */}
          {showConnectPrompt && googleAuthState !== 'connected' && (
            <Alert className="mb-4 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
              <AlertDescription className="flex items-center justify-between">
                <span className="text-sm">
                  Please connect your Google account to submit your application.
                </span>
                <Button
                  type="button"
                  size="sm"
                  className="ml-4 rounded-sm"
                  onClick={handleConnectGoogle}
                  disabled={googleAuthState === 'connecting'}
                >
                  {googleAuthState === 'connecting' ? (
                    <>
                      <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LinkIcon className="w-3 h-3 mr-1" />
                      Connect Google
                    </>
                  )}
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>
                Step {step + 1} of {totalSteps}
              </span>
              <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full h-1 bg-muted rounded-sm overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form content with scroll */}
          <div className="overflow-y-auto max-h-[45vh] pr-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {step === 0 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        required
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        required
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        required
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="countryOfCitizenship" className="text-sm font-medium">Country of Citizenship *</Label>
                      <Select
                        value={formData.countryOfCitizenship}
                        onValueChange={(value) => handleInputChange("countryOfCitizenship", value)}
                      >
                        <SelectTrigger className="bg-muted border-border rounded-sm mt-1.5">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="cn">China</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.countryOfCitizenship && (
                        <p className="mt-1 text-xs text-destructive">{errors.countryOfCitizenship}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="currentVisa" className="text-sm font-medium">Current US Visa (if any)</Label>
                      <Input
                        id="currentVisa"
                        placeholder="e.g., H-1B, F-1, L-1"
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.currentVisa}
                        onChange={(e) => handleInputChange("currentVisa", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-3 block">Timeframe to file for O-1 *</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 border border-border rounded-sm p-4 hover:bg-muted transition-colors">
                          <Checkbox
                            id="timeline-0-3"
                            checked={formData.timeline.includes("0-3 Months")}
                            onCheckedChange={(checked) => handleTimelineChange("0-3 Months", checked as boolean)}
                          />
                          <Label htmlFor="timeline-0-3" className="flex-1 cursor-pointer text-sm">
                            0-3 Months
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border border-border rounded-sm p-4 hover:bg-muted transition-colors">
                          <Checkbox
                            id="timeline-3-6"
                            checked={formData.timeline.includes("3-6 Months")}
                            onCheckedChange={(checked) => handleTimelineChange("3-6 Months", checked as boolean)}
                          />
                          <Label htmlFor="timeline-3-6" className="flex-1 cursor-pointer text-sm">
                            3-6 Months
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border border-border rounded-sm p-4 hover:bg-muted transition-colors">
                          <Checkbox
                            id="timeline-6plus"
                            checked={formData.timeline.includes("More than 6 Months")}
                            onCheckedChange={(checked) => handleTimelineChange("More than 6 Months", checked as boolean)}
                          />
                          <Label htmlFor="timeline-6plus" className="flex-1 cursor-pointer text-sm">
                            More than 6 Months
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border border-border rounded-sm p-4 hover:bg-muted transition-colors">
                          <Checkbox
                            id="timeline-exploring"
                            checked={formData.timeline.includes("Exploring")}
                            onCheckedChange={(checked) => handleTimelineChange("Exploring", checked as boolean)}
                          />
                          <Label htmlFor="timeline-exploring" className="flex-1 cursor-pointer text-sm">
                            Exploring
                          </Label>
                        </div>
                      </div>
                      {errors.timeline && <p className="mt-1 text-xs text-destructive">{errors.timeline}</p>}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="resume" className="text-sm font-medium">Resume (URL or file)</Label>
                      <div className="flex gap-2 mt-1.5">
                        <Input
                          id="resume"
                          placeholder="Paste link or upload file"
                          className="bg-muted border-border rounded-sm flex-1"
                          value={formData.resume}
                          onChange={(e) => handleInputChange("resume", e.target.value)}
                        />
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileSelect}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          className="rounded-sm"
                          onClick={() => {
                            if (!isGoogleConnected()) {
                              toast({
                                title: "Connect Google first",
                                description: "Please connect your Google account to upload files.",
                                variant: "destructive",
                              });
                              return;
                            }
                            fileInputRef.current?.click();
                          }}
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      {!isGoogleConnected() && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          Connect Google to upload files, or paste a link directly.
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="linkedIn" className="text-sm font-medium">LinkedIn Profile</Label>
                      <Input
                        id="linkedIn"
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.linkedIn}
                        onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-3 block">Which best describes you? *</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Founder", "Executive Team Member", "Engineer", "Researcher / PHD / PostDoc", "Influencer", "Athlete", "Artist", "Other"].map((role) => (
                          <div
                            key={role}
                            className="flex items-center space-x-3 border border-border rounded-sm p-3 hover:bg-muted transition-colors"
                          >
                            <Checkbox
                              id={`role-${role}`}
                              checked={formData.roleType.includes(role)}
                              onCheckedChange={(checked) => handleRoleTypeChange(role, checked as boolean)}
                            />
                            <Label htmlFor={`role-${role}`} className="flex-1 cursor-pointer text-sm">
                              {role}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {errors.roleType && <p className="mt-1 text-xs text-destructive">{errors.roleType}</p>}
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-3 block">Select the options which applies to you</Label>
                      <div className="space-y-2">
                        {[
                          { value: "Press / articles about you", label: "Press / articles about you" },
                          { value: "Awards / recognitions", label: "Awards / recognitions" },
                          { value: "Spoken at known events", label: "Spoken at known events" },
                          { value: "Judged / reviewed other's work", label: "Judged / reviewed other's work" },
                          { value: "Publications / citations", label: "Publications / citations", subtext: "(for researchers)" },
                          { value: "Patents / open-source impact", label: "Patents / open-source impact", subtext: "(for engineers)" },
                          { value: "High salary / top compensation", label: "High salary / top compensation" },
                          { value: "Critical role at distinguished org", label: "Critical role at distinguished org", subtext: "(E.g. if you have worked in Fortune 500 at Director or VP Level)" },
                        ].map((item) => (
                          <div
                            key={item.value}
                            className="flex items-start space-x-3 border border-border rounded-sm p-3 hover:bg-muted transition-colors"
                          >
                            <Checkbox
                              id={`qual-${item.value}`}
                              checked={formData.qualifications.includes(item.value)}
                              onCheckedChange={(checked) => handleQualificationsChange(item.value, checked as boolean)}
                              className="mt-0.5"
                            />
                            <Label htmlFor={`qual-${item.value}`} className="flex-1 cursor-pointer text-sm">
                              <span>{item.label}</span>
                              {item.subtext && (
                                <span className="block text-xs text-muted-foreground mt-0.5">{item.subtext}</span>
                              )}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <Button type="button" variant="ghost" onClick={handleBack} disabled={step === 0} className="gap-2 text-sm rounded-sm">
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>

            <div className="flex gap-2">
              {step < totalSteps - 1 ? (
                <Button type="button" onClick={handleNext} className="gap-2 text-sm rounded-sm">
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="button" onClick={handleSubmit} disabled={isSubmitting || !canSubmit} className="gap-2 text-sm rounded-sm">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
