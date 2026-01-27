import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General",
    faqs: [
      {
        question: "What is an O-1 visa?",
        answer:
          "The O-1 visa is a non-immigrant visa for individuals with extraordinary ability in sciences, arts, education, business, athletics, or the entertainment industry. It allows you to work in the U.S. for up to 3 years, with unlimited extensions available.",
      },
      {
        question: "Who qualifies for an O-1 visa?",
        answer:
          "You qualify if you can demonstrate extraordinary ability through sustained national or international acclaim. This includes awards, publications, high salary, membership in exclusive organizations, or recognition from peers and experts in your field.",
      },
      {
        question: "How long does the O-1 visa process take?",
        answer:
          "Standard processing takes 2-3 months. With premium processing (an additional fee), USCIS will respond within 15 business days. Our team works efficiently to prepare your application while ensuring quality and thoroughness.",
      },
      {
        question: "What is the success rate for O-1 visas?",
        answer:
          "Teleport maintains a 96% approval rate for O-1 visa applications. This success comes from thorough case preparation, strategic evidence development, and review by ex-USCIS officers before filing.",
      },
      {
        question: "Can I bring my family on an O-1 visa?",
        answer:
          "Yes, your spouse and unmarried children under 21 can accompany you on O-3 dependent visas. However, O-3 visa holders cannot work in the U.S., though they can study.",
      },
      {
        question: "What's the difference between O-1A and O-1B?",
        answer:
          "O-1A is for individuals with extraordinary ability in sciences, education, business, or athletics. O-1B is for those in the arts or extraordinary achievement in the motion picture and television industry. The evidence requirements differ slightly between the two categories.",
      },
      {
        question: "Can an O-1 visa lead to a green card?",
        answer:
          "Yes, many O-1 visa holders transition to permanent residence through employment-based green cards (EB-1A or EB-2 NIW). The evidence used for your O-1 can often support your green card application.",
      },
      {
        question: "Do I need a job offer for an O-1 visa?",
        answer:
          "You need a U.S. employer, agent, or sponsor to petition for you, but it doesn't have to be a traditional job offer. Self-employed individuals can work with an agent to sponsor their O-1 visa.",
      },
    ],
  },
  {
    title: "Getting Started",
    faqs: [
      {
        question: "Is the O-1 the right visa for my goals (and timeline)?",
        answer:
          "Maybe. If your work shows strong, verifiable impact and recognition in your field, O-1 can be a fit. Our free assessment helps you quickly see what's strong, what's missing, and whether it's worth pursuing now.",
      },
      {
        question: 'Do I need to be "famous" to qualify?',
        answer:
          "No. Most successful O-1 cases are built on impact, leadership, and credible third-party validation, not celebrity.",
      },
      {
        question: "How long does the assessment take?",
        answer:
          "Usually ~2 minutes if you have your LinkedIn or resume handy. If you need to look up a few details (projects, press links, awards, etc.), it can take 5 to 7 minutes.",
      },
      {
        question: "What happens after I submit the assessment?",
        answer:
          "If there's a potential fit, you'll be prompted to book a no-charge prequalification call with an expert.",
      },
    ],
  },
  {
    title: "Why Teleport?",
    faqs: [
      {
        question: "What does Teleport actually do?",
        answer:
          "Teleport makes the O-1 journey simple and structured, so you're not piecing things together alone. We help you understand fit, organize evidence, and move step by step.",
      },
      {
        question: "Do you work with experienced immigration lawyers?",
        answer:
          "Yes. Legal advice and filing are handled by U.S.-based, licensed immigration lawyers with 10+ years of experience.",
      },
      {
        question: "How is Teleport different from hiring a lawyer directly?",
        answer:
          "A lawyer consult is essential for legal strategy and filing. Teleport complements that by helping you get case-ready with clear positioning, evidence planning, and recommendation letter strategy and drafting, so attorney time is more focused and efficient.",
      },
    ],
  },
  {
    title: "Eligibility & Evidence",
    faqs: [
      {
        question: "What do you evaluate in the assessment?",
        answer:
          "We look for evidence that commonly supports an O-1: leadership or critical roles, measurable impact, recognition (press, awards, speaking, judging), and strong third-party letters.",
      },
      {
        question: "What if I don't have major press or big awards?",
        answer:
          "You can still be a fit. Many cases rely on other proof like impact, leadership, selective recognition, and strong letters. We'll clarify what you have and what you'd likely need to strengthen.",
      },
      {
        question: "Do founders qualify for O-1?",
        answer:
          "Often yes, if you can show independent recognition and real impact (traction, partnerships, funding context, customer outcomes). Founder cases work well when the evidence is positioned clearly.",
      },
      {
        question: "Do publications or patents matter?",
        answer:
          "They can help in some fields but aren't required. We focus on the strongest, most realistic evidence for your domain.",
      },
      {
        question: "What makes recommendation letters strong?",
        answer:
          "Specific, credible, and outcome-based, ideally from respected people in the field who can explain why your work stands out (and aren't all close collaborators).",
      },
    ],
  },
  {
    title: "Process & Timelines",
    faqs: [
      {
        question: "What's the overall flow from start to finish?",
        answer:
          "Fill out assessment → Prequalification call → Legal consult. By the time you reach the legal consult, you'll be clear on the process and what needs to be done, and you can decide if this is the right lawyer for you. If you choose to move forward, we work with you to gather evidence, build your narrative, and then file your petition.",
      },
      {
        question: "How long does the O-1 process take?",
        answer:
          "It depends on evidence readiness and filing approach. The prequalification call helps set a practical expectation; the legal consult confirms the legal timeline and strategy.",
      },
      {
        question: "What is a prequalification call?",
        answer:
          "A short, focused call to confirm fit, clarify your strongest evidence, and align on next steps. If it's not the right time, we'll tell you clearly.",
      },
      {
        question: "What happens in the legal consult?",
        answer:
          "You'll speak with a Teleport immigration lawyer (U.S.-based, licensed, 10+ years experience) to confirm strategy, structure (employer or agent), and the best filing path for your situation.",
      },
      {
        question: "Can you help if I'm not ready yet?",
        answer:
          "Yes. We'll be transparent about what's missing and give a focused plan for what to build and document before you try.",
      },
    ],
  },
  {
    title: "Work Setup",
    faqs: [
      {
        question: "Do I need a U.S. job offer first?",
        answer:
          "You need a credible U.S. work plan and the right petition structure. A traditional offer letter can help, but it's not the only way to build a valid work setup.",
      },
      {
        question: "Can I work on multiple projects or with multiple clients?",
        answer:
          "Often yes, depending on how the petition is structured (commonly via an agent arrangement). This is typically confirmed in the legal consult.",
      },
      {
        question: "Can I apply from inside the U.S. or outside?",
        answer:
          "It depends on your current status and processing route. This is a key topic to confirm during the legal consult.",
      },
      {
        question: "Can my spouse and kids come with me?",
        answer:
          "Usually dependents can join, and kids can attend school. Spouse work rules vary. Your lawyer can confirm what applies to your situation.",
      },
    ],
  },
  {
    title: "Cost & Risk",
    faqs: [
      {
        question: "How much does an O-1 typically cost?",
        answer:
          "It varies by attorney fees, government fees, case complexity, and optional premium processing. We'll keep it transparent: what costs money, why, and what you can expect.",
      },
      {
        question: "What if I'm worried about rejection or an RFE?",
        answer:
          "That's normal. Risk goes down when your case is clearly positioned and evidence is well organized. Teleport's legal team leads legal strategy and responses if USCIS asks for more.",
      },
      {
        question: "Is the assessment private?",
        answer:
          "Yes. Your answers are used to assess fit and prepare for next steps. We don't share your information without your consent.",
      },
    ],
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the O-1 visa process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${category.title}-item-${faqIndex}`}
                    className="border border-border rounded-xl px-6 bg-card hover:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold text-base">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
