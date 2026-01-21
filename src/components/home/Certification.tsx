import { motion } from "framer-motion";
import { CheckCircle2, Award, Building, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const certificationFeatures = [
  {
    icon: Building,
    text: "University-aligned certification",
  },
  {
    icon: FileCheck,
    text: "Skill-based assessment",
  },
  {
    icon: Award,
    text: "Academic & career valid",
  },
];

export function Certification() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
              🎓 CERTIFICATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get Certified & <span className="gradient-text">Stand Out</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Certificate issued in association with{" "}
              <span className="font-semibold text-foreground">
                Sardar Vallabhbhai Patel University
              </span>{" "}
              &{" "}
              <span className="font-semibold text-foreground">MySkill</span>
            </p>

            <div className="space-y-4 mb-10">
              {certificationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="gold" size="lg">
              <Link to="/certification">View Certification Details</Link>
            </Button>
          </motion.div>

          {/* Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-2xl border border-border shadow-large p-8 lg:p-12">
              {/* Decorative Border */}
              <div className="absolute inset-4 border-2 border-gold/30 rounded-xl pointer-events-none" />
              
              <div className="text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold">
                    <Award className="w-10 h-10 text-navy-dark" />
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  Certificate of Completion
                </p>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Professional Language Certification
                </h3>
                
                <div className="w-32 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-4 rounded-full" />
                
                <p className="text-muted-foreground mb-6">
                  This certifies that the holder has successfully completed the comprehensive language program.
                </p>
                
                <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="text-center">
                    <p className="font-semibold text-foreground">MySkill</p>
                    <p>Training Partner</p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <p className="font-semibold text-foreground">SVP University</p>
                    <p>Academic Partner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gold text-navy-dark px-4 py-2 rounded-full font-semibold text-sm shadow-gold"
            >
              ✓ Verified
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
