import { motion } from "framer-motion";
import { Clock, Users, Award, BookOpen } from "lucide-react";

interface CourseOverviewProps {
  overview: string;
  highlights?: string[];
}

const stats = [
  { icon: Clock, label: "Duration", value: "3-6 Months" },
  { icon: Users, label: "Batch Size", value: "15-20 Students" },
  { icon: Award, label: "Certification", value: "University Certified" },
  { icon: BookOpen, label: "Mode", value: "Online + Offline" },
];

export function CourseOverview({ overview, highlights }: CourseOverviewProps) {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Overview Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
              COURSE OVERVIEW
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About This Course
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {overview}
            </p>

            {highlights && highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-4">Key Highlights:</h4>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
