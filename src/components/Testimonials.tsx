import { motion } from "framer-motion";
import { Quote, Briefcase, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Scientist",
    industry: "Technology",
    location: "San Francisco, CA",
    quote:
      "The team at Teleport made my O-1 visa process seamless. Their expertise and strategic approach resulted in approval within 3 months. I'm now leading AI research at a top tech company.",
    outcome: "Approved in 3 months",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    industry: "Film & Media",
    location: "Los Angeles, CA",
    quote:
      "I was worried about my case's complexity, but Teleport's attorneys crafted a compelling petition highlighting my work on international campaigns. The premium processing delivered results in just 15 days.",
    outcome: "Approved in 15 days (Premium)",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
  },
  {
    name: "Priya Sharma",
    role: "Pharmaceutical Researcher",
    industry: "Healthcare",
    location: "Boston, MA",
    quote:
      "The client portal made evidence collection so organized. My attorney guided me through every step, and the review by a former USCIS officer gave me complete confidence. Approved on first try!",
    outcome: "Approved - First Submission",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "James Mitchell",
    role: "Software Architect",
    industry: "Technology",
    location: "Seattle, WA",
    quote:
      "Switching from H-1B to O-1 seemed daunting, but Teleport's strategic approach showcased my contributions perfectly. The tech-enabled process kept me informed every step of the way.",
    outcome: "Approved in 2 months",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who've achieved their O-1 visa dreams with our expert guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div whileHover={{ scale: 1.05 }} className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full ring-2 ring-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {testimonial.industry}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">"{testimonial.quote}"</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="text-xs text-muted-foreground">Outcome</span>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full"
                    >
                      <div className="relative -bottom-1 -left-1 bg-primary rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      {testimonial.outcome}
                    </motion.span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Join 1,700+ professionals who've trusted us with their O-1 visa journey
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            Start Your Success Story
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
