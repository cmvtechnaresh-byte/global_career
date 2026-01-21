import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the duration of each course level?",
    answer: "Each level (Basic, Intermediate, Advanced) typically takes 2-3 months to complete, depending on the language and your learning pace. The complete program spanning all three levels usually takes 6-9 months. Classes are held 3-4 times per week with flexible scheduling options."
  },
  {
    question: "Are the courses available online or offline?",
    answer: "We offer both online and offline learning modes. You can choose live virtual classes from anywhere, or attend in-person sessions at our campus. Many students prefer a hybrid approach, combining both modes for maximum flexibility."
  },
  {
    question: "What certification will I receive upon completion?",
    answer: "Upon successful completion, you'll receive a certificate issued jointly by MySkill and Sardar Vallabhbhai Patel University. This certification is recognized by employers and academic institutions, validating your language proficiency for career and educational opportunities."
  },
  {
    question: "Can I switch between course levels?",
    answer: "Yes! We conduct an initial assessment to place you at the right level. If you feel the course is too easy or challenging, you can request a level adjustment within the first two weeks. We also offer a free demo class before enrollment."
  },
  {
    question: "What payment options are available?",
    answer: "We accept various payment methods including credit/debit cards, UPI, net banking, and EMI options. You can pay the full amount upfront for a 5% discount, or opt for our installment plans with no additional charges."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, all course fees include comprehensive study materials, practice workbooks, audio-visual resources, and access to our online learning portal. For exam preparation courses (IELTS, GRE, TOEFL), we also provide mock tests and practice papers."
  },
  {
    question: "What if I miss a class?",
    answer: "All live sessions are recorded and available in your student portal for 30 days. You can catch up at your convenience. Additionally, you can attend the same topic in another batch's schedule at no extra cost."
  },
  {
    question: "Is there any job placement assistance?",
    answer: "Yes, we provide career guidance and placement assistance for our advanced-level graduates. This includes resume building workshops, interview preparation in the target language, and connections with our partner companies hiring multilingual professionals."
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, certification, and enrollment process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-soft px-6 data-[state=open]:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact our counselors →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
