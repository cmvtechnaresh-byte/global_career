import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CourseHeroProps {
  title: string;
  flag?: string;
  description: string;
  gradient: string;
}

export function CourseHero({ title, flag, description, gradient }: CourseHeroProps) {
  return (
    <section className={`relative py-32 overflow-hidden ${gradient}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <span className="text-primary-foreground/80 text-sm font-medium">
              In Association with Sardar Vallabhbhai Patel University
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            {flag && <span className="text-6xl">{flag}</span>}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground">
              {title}
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">
              Enroll Now
            </Button>
            <Button variant="heroOutline" size="lg">
              Download Syllabus
            </Button>
          </div>
        </motion.div>
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
