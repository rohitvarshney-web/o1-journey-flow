import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Upload, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { uploadToGoogleDrive, initializeGoogleAPI } from "@/lib/googleDrive";
import { useToast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationForm = ({ open, onOpenChange }: ApplicationFormProps) => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "",
    countryOfBirth: "",
    countryOfCitizenship: "",
    currentVisa: "",
    reasonsForApplying: "",
    timeline: "",
    resume: "",
    linkedIn: "",
    currentRole: "",
    awards: "",
    associations: "",
    mediaCoverage: "",
    impactfulWork: "",
    scholarlyArticles: "",
    criticalRole: "",
    immigrationIssues: "",
    familyInUS: "",
  });

  const totalSteps = 6;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await initializeGoogleAPI();
      await uploadToGoogleDrive(formData);
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your application has been saved to Google Drive.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to save application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(0);
    setFormData({
      name: "",
      email: "",
      phone: "",
      visaType: "",
      countryOfBirth: "",
      countryOfCitizenship: "",
      currentVisa: "",
      reasonsForApplying: "",
      timeline: "",
      resume: "",
      linkedIn: "",
      currentRole: "",
      awards: "",
      associations: "",
      mediaCoverage: "",
      impactfulWork: "",
      scholarlyArticles: "",
      criticalRole: "",
      immigrationIssues: "",
      familyInUS: "",
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
                Thank you for submitting your {formData.visaType} application. Our team will review your information and
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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-primary-foreground/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="text-primary-foreground font-serif text-lg">
                  {formData.visaType ? `${formData.visaType} Application` : "O-1 Visa Application"}
                </DialogTitle>
                <p className="text-xs text-primary-foreground/70">Applicant</p>
              </div>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6">
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
                        required
                      />
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
                        required
                      />
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
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Which visa are you applying for?</Label>
                      <RadioGroup
                        value={formData.visaType}
                        onValueChange={(value) => handleInputChange("visaType", value)}
                      >
                        <div className="flex items-center space-x-3 border border-border rounded-sm p-4 hover:bg-muted transition-colors cursor-pointer">
                          <RadioGroupItem value="O-1A" id="o1a" />
                          <Label htmlFor="o1a" className="flex-1 cursor-pointer">
                            <div className="font-semibold text-sm">O-1A Visa</div>
                            <div className="text-xs text-muted-foreground">
                              For individuals with extraordinary ability in sciences, education, business, or
                              athletics
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border border-border rounded-sm p-4 hover:bg-muted transition-colors cursor-pointer mt-3">
                          <RadioGroupItem value="O-1B" id="o1b" />
                          <Label htmlFor="o1b" className="flex-1 cursor-pointer">
                            <div className="font-semibold text-sm">O-1B Visa</div>
                            <div className="text-xs text-muted-foreground">
                              For individuals with extraordinary ability in the arts or extraordinary achievement in
                              motion picture or television
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="countryOfBirth" className="text-sm font-medium">Country of Birth</Label>
                      <Select
                        value={formData.countryOfBirth}
                        onValueChange={(value) => handleInputChange("countryOfBirth", value)}
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
                    </div>

                    <div>
                      <Label htmlFor="countryOfCitizenship" className="text-sm font-medium">Country of Citizenship</Label>
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
                    </div>

                    <div>
                      <Label htmlFor="currentVisa" className="text-sm font-medium">Currently holding which visa?</Label>
                      <Input
                        id="currentVisa"
                        placeholder="e.g., H-1B, F-1, L-1"
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.currentVisa}
                        onChange={(e) => handleInputChange("currentVisa", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="reasonsForApplying" className="text-sm font-medium">Reasons for applying to O-1</Label>
                      <Textarea
                        id="reasonsForApplying"
                        placeholder="Tell us why you're applying for an O-1 visa..."
                        className="bg-muted border-border rounded-sm min-h-[100px] mt-1.5"
                        value={formData.reasonsForApplying}
                        onChange={(e) => handleInputChange("reasonsForApplying", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium">
                        How quickly do you want to start the process? Any specific deadlines?
                      </Label>
                      <Textarea
                        id="timeline"
                        placeholder="Let us know your timeline and any deadlines..."
                        className="bg-muted border-border rounded-sm mt-1.5"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
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
                        <Button type="button" variant="outline" size="icon" className="rounded-sm">
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
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
                      <Label htmlFor="currentRole" className="text-sm font-medium">Current role and details</Label>
                      <Textarea
                        id="currentRole"
                        placeholder="Describe your current position, company, and responsibilities..."
                        className="bg-muted border-border rounded-sm min-h-[100px] mt-1.5"
                        value={formData.currentRole}
                        onChange={(e) => handleInputChange("currentRole", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="awards" className="text-sm font-medium">Details of any award received</Label>
                      <Textarea
                        id="awards"
                        placeholder="List any awards, recognitions, or honors you've received..."
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.awards}
                        onChange={(e) => handleInputChange("awards", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="associations" className="text-sm font-medium">Member of any established association?</Label>
                      <Textarea
                        id="associations"
                        placeholder="Professional organizations, industry associations, etc..."
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.associations}
                        onChange={(e) => handleInputChange("associations", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="mediaCoverage" className="text-sm font-medium">Any media coverage for your work?</Label>
                      <Textarea
                        id="mediaCoverage"
                        placeholder="Publications, interviews, press mentions, etc..."
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.mediaCoverage}
                        onChange={(e) => handleInputChange("mediaCoverage", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="impactfulWork" className="text-sm font-medium">
                        Have you developed something that makes an impact in your field?
                      </Label>
                      <Textarea
                        id="impactfulWork"
                        placeholder="Describe your contributions and their impact..."
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.impactfulWork}
                        onChange={(e) => handleInputChange("impactfulWork", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="scholarlyArticles" className="text-sm font-medium">
                        Have you written any scholarly articles that got published?
                      </Label>
                      <Textarea
                        id="scholarlyArticles"
                        placeholder="List publications, journals, citations, etc..."
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.scholarlyArticles}
                        onChange={(e) => handleInputChange("scholarlyArticles", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="criticalRole" className="text-sm font-medium">
                        Have you served in a critical role for an important organization?
                      </Label>
                      <Textarea
                        id="criticalRole"
                        placeholder="Describe leadership positions and organizational impact..."
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.criticalRole}
                        onChange={(e) => handleInputChange("criticalRole", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="immigrationIssues" className="text-sm font-medium">Have you ever had any prior immigration issues?</Label>
                      <Textarea
                        id="immigrationIssues"
                        placeholder="Visa violations, denials, rejections, etc. (if any)"
                        className="bg-muted border-border rounded-sm min-h-[80px] mt-1.5"
                        value={formData.immigrationIssues}
                        onChange={(e) => handleInputChange("immigrationIssues", e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-1">Leave blank if not applicable</p>
                    </div>

                    <div>
                      <Label htmlFor="familyInUS" className="text-sm font-medium">
                        Do you have a close family member who is currently a U.S. citizen or Green Card holder?
                      </Label>
                      <RadioGroup
                        value={formData.familyInUS}
                        onValueChange={(value) => handleInputChange("familyInUS", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="family-yes" />
                          <Label htmlFor="family-yes" className="text-sm">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="family-no" />
                          <Label htmlFor="family-no" className="text-sm">No</Label>
                        </div>
                      </RadioGroup>
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
                <Button type="button" onClick={handleSubmit} disabled={isSubmitting} className="gap-2 text-sm rounded-sm">
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
