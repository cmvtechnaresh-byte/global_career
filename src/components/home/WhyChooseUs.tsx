import { motion } from "framer-motion";
import { BookOpen, Award, Video, Compass, Briefcase, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Structured Learning Path",
    description: "Progress from Basic to Advanced with our carefully designed curriculum.",
  },
  {
    icon: Award,
    title: "University Certification",
    description: "Get certified in association with Sardar Vallabhbhai Patel University.",
  },
  {
    icon: Video,
    title: "Live Expert Sessions",
    description: "Learn from experienced instructors in interactive live classes.",
  },
  {
    icon: Compass,
    title: "Exam & Career Guidance",
    description: "Receive personalized guidance for exams and career opportunities.",
  },
  {
    icon: Briefcase,
    title: "Industry Curriculum",
    description: "Learn skills that are directly applicable to real-world careers.",
  },
  {
    icon: GraduationCap,
    title: "Skill-Based Assessment",
    description: "Regular assessments to track your progress and ensure mastery.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/50">
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
            WHY MYSKILL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose MySkill?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a complete learning experience that prepares you for global opportunities.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
