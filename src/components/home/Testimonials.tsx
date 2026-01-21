import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "German Language - Advanced",
    image: "/testimonials/priya.jpg",
    rating: 5,
    text: "MySkill's German program transformed my career! I secured a job at a German MNC within 3 months of completing the advanced level. The teachers are incredibly supportive and the curriculum is industry-focused.",
    achievement: "Now working at Siemens, Germany"
  },
  {
    name: "Rahul Patel",
    course: "IELTS Preparation",
    image: "/testimonials/rahul.jpg",
    rating: 5,
    text: "I achieved a Band 8 in IELTS on my first attempt! The mock tests and personalized feedback were game-changers. The strategies taught here are practical and effective.",
    achievement: "Band 8 in IELTS, now studying at University of Toronto"
  },
  {
    name: "Ananya Krishnan",
    course: "Japanese Language - Intermediate",
    image: "/testimonials/ananya.jpg",
    rating: 5,
    text: "Learning Japanese seemed impossible until I joined MySkill. The structured approach from Hiragana to Kanji was perfect. I cleared JLPT N4 and now work as a translator!",
    achievement: "JLPT N4 Certified, Freelance Translator"
  },
  {
    name: "Vikram Singh",
    course: "GRE Preparation",
    image: "/testimonials/vikram.jpg",
    rating: 5,
    text: "Scored 325 on my GRE thanks to the amazing faculty at MySkill. The quantitative strategies and vocabulary building techniques are top-notch. Highly recommend!",
    achievement: "GRE 325, admitted to Stanford University"
  },
  {
    name: "Meera Joshi",
    course: "Spanish Language - Complete",
    image: "/testimonials/meera.jpg",
    rating: 5,
    text: "From zero Spanish knowledge to conducting business meetings in Spanish - MySkill made it possible! The immersive learning approach and cultural insights were invaluable.",
    achievement: "Business Development Manager, Latin America"
  },
  {
    name: "Arjun Menon",
    course: "Mandarin Language - Advanced",
    image: "/testimonials/arjun.jpg",
    rating: 5,
    text: "Mandarin opened doors to amazing opportunities in import-export. The HSK preparation included in the course helped me get certified. Best investment in my career!",
    achievement: "HSK 4 Certified, Import-Export Business Owner"
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
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
            SUCCESS STORIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful learners who have transformed their careers with MySkill.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold">
                  <Quote className="w-5 h-5 text-navy-dark" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mt-4 px-3 py-2 rounded-lg bg-muted/50 border border-border">
                  <p className="text-xs text-muted-foreground">
                    🎯 <span className="font-medium text-foreground">{testimonial.achievement}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5000+", label: "Students Trained" },
            { value: "95%", label: "Success Rate" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "50+", label: "Expert Trainers" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
