import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const languageCourses = [
  {
    name: "German",
    flag: "🇩🇪",
    description: "Master the language of engineering, research, and European business opportunities.",
    path: "/courses/german",
    color: "from-gray-800 to-gray-900",
  },
  {
    name: "Spanish",
    flag: "🇪🇸",
    description: "Learn one of the world's most spoken languages for global career and travel.",
    path: "/courses/spanish",
    color: "from-red-600 to-amber-500",
  },
  {
    name: "Japanese",
    flag: "🇯🇵",
    description: "Unlock opportunities in technology, manufacturing, and international trade.",
    path: "/courses/japanese",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Mandarin",
    flag: "🇨🇳",
    description: "Master the world's most spoken language for global business success.",
    path: "/courses/mandarin",
    color: "from-red-600 to-red-700",
  },
];

const englishCourses = [
  {
    name: "IELTS Preparation",
    description: "Comprehensive preparation for academic and general IELTS exams.",
    path: "/courses/ielts",
    icon: "📘",
  },
  {
    name: "GRE Preparation",
    description: "Master quantitative, verbal, and analytical writing for graduate admissions.",
    path: "/courses/gre",
    icon: "📕",
  },
  {
    name: "TOEFL Preparation",
    description: "Excel in the Test of English as a Foreign Language for study abroad.",
    path: "/courses/toefl",
    icon: "📗",
  },
];

export function CourseGrid() {
  return (
    <section id="courses" className="py-24 bg-background">
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
            OUR COURSES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From international languages to exam preparation, we offer comprehensive programs tailored to your goals.
          </p>
        </motion.div>

        {/* Language Courses */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full" />
            Language Programs
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languageCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={course.path}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                      <span className="text-6xl">{course.flag}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {course.name} Language
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        View Course
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* English Exam Courses */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full" />
            English Exam Programs
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {englishCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={course.path}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl mb-4">
                      {course.icon}
                    </div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
