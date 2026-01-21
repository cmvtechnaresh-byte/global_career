import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, GraduationCap, BookOpen } from "lucide-react";

const languageCourses = [
  {
    name: "German",
    description: "Master the language of engineering, research, and European business opportunities.",
    path: "/courses/german",
    image: "https://media.istockphoto.com/id/619638736/photo/historic-town-of-rothenburg-ob-der-tauber-franconia-bavaria-germany.jpg?s=612x612&w=0&k=20&c=IPnUDs04lzGWP7T4kqd3OlswxsIAEnTpsN_eSaPVE8I=",
  },
  {
    name: "Spanish",
    description: "Learn one of the world's most spoken languages for global career and travel.",
    path: "/courses/spanish",
    image: "https://imgproxy.natucate.com/-vndXU7oBuIXNKjk6dDx5nFGLDormaGGXl8_zSmPZE0/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvNDI4YTYzZWUtMmYzOS00YmFjLTgwY2UtNmY2N2Y4Yzc1NzJlLzQ2NjdmNWFmMWUtMTY3OTQ4Njc1MC9zcGFuaWVuLWxhZW5kZXJpbmZvcm1hdGlvbmVuLXN0YWR0LW96ZWFuLXdhc3Nlci1uYXR1Y2F0ZS5qcGc",
  },
  {
    name: "Japanese",
    description: "Unlock opportunities in technology, manufacturing, and international trade.",
    path: "/courses/japanese",
    image: "https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/explore-media/destinations/asia/japan/japan-banner.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704211523%201920w",
  },
  {
    name: "Mandarin",
    description: "Master the world's most spoken language for global business success.",
    path: "/courses/mandarin",
    image: "https://t4.ftcdn.net/jpg/01/88/97/67/360_F_188976775_naafg0BY2uOus4snBVbqiHVs7nuRQ1P3.jpg",
  },
];

const englishCourses = [
  {
    name: "IELTS Preparation",
    description: "Comprehensive preparation for academic and general IELTS exams.",
    path: "/courses/ielts",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
  {
    name: "GRE Preparation",
    description: "Master quantitative, verbal, and analytical writing for graduate admissions.",
    path: "/courses/gre",
    icon: <GraduationCap className="w-8 h-8 text-red-600" />,
  },
  {
    name: "TOEFL Preparation",
    description: "Excel in the Test of English as a Foreign Language for study abroad.",
    path: "/courses/toefl",
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
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
                    {/* Image Header */}
                    <div className="h-32 relative flex flex-col items-center justify-center overflow-hidden">
                      <div className="absolute inset-0">
                        <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                      </div>
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
                    <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
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
