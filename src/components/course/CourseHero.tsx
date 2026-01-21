import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CourseHeroProps {
  title: string;
  flag?: string;
  description: string;
  gradient: string;
  image?: string;
}

export function CourseHero({ title, flag, description, gradient, image }: CourseHeroProps) {
  return (
    <section className={`relative py-24 lg:py-32 overflow-hidden ${gradient}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid gap-12 items-center ${image ? 'lg:grid-cols-2' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`${!image ? 'max-w-3xl mx-auto text-center' : ''}`}
          >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 ${!image ? 'mx-auto' : ''}`}>
              <span className="text-primary-foreground/80 text-sm font-medium">
                In Association with Sardar Vallabhbhai Patel University
              </span>
            </div>

            {/* Title */}
            <div className={`flex items-center gap-4 mb-6 ${!image ? 'justify-center' : ''}`}>
              {flag && <span className="text-6xl">{flag}</span>}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                {title}
              </h1>
            </div>

            {/* Description */}
            <p className={`text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed ${!image ? 'mx-auto' : ''}`}>
              {description}
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 ${!image ? 'justify-center' : ''}`}>
              <Button variant="hero" size="lg">
                Enroll Now
              </Button>
              <Button variant="heroOutline" size="lg">
                Download Syllabus
              </Button>
            </div>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -20, 0] }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.2 },
                x: { duration: 0.6, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative block mt-12 lg:mt-0"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={image} alt={title} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute inset-0 bg-black/20 blur-2xl -z-10 transform translate-y-4 scale-95" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
