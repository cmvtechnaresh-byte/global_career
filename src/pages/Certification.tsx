import { motion } from "framer-motion";
import { Award, Building, FileCheck, CheckCircle2, Shield, Globe } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const certificationBenefits = [
  {
    icon: Building,
    title: "University-Aligned",
    description: "Certificates issued in partnership with Sardar Vallabhbhai Patel University, a recognized institution.",
  },
  {
    icon: FileCheck,
    title: "Skill-Based Assessment",
    description: "Our certification validates practical language skills through comprehensive assessments.",
  },
  {
    icon: Shield,
    title: "Industry Recognized",
    description: "Certificates are valued by employers across various industries and sectors.",
  },
  {
    icon: Globe,
    title: "Global Validity",
    description: "Use your certification for job applications, study abroad, and career advancement worldwide.",
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden hero-gradient">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold-light rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-primary-foreground/80 text-sm font-medium">
                  Official Certification
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get Certified, Get <span className="gradient-text">Ahead</span>
              </h1>

              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8">
                Certificate issued in association with Sardar Vallabhbhai Patel University & MySkill
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {["University-aligned certification", "Skill-based assessment", "Academic & career valid"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span className="text-primary-foreground/90 text-sm font-medium">{item}</span>
                  </div>
                ))}
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

        {/* Benefits Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                CERTIFICATION BENEFITS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Our Certification Matters
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificationBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border shadow-soft"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Preview */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Your Certificate of Achievement
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Upon successful completion of any course, you'll receive an official certificate that validates your language proficiency and skills.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Unique verification code for authenticity",
                    "Digital and physical certificate options",
                    "LinkedIn-compatible digital badge",
                    "Lifetime validity with no expiration",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="gold" size="lg">
                  <Link to="/#courses">Start Your Journey</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-card rounded-2xl border border-border shadow-large p-10 lg:p-14">
                  <div className="absolute inset-6 border-2 border-gold/30 rounded-xl pointer-events-none" />
                  
                  <div className="text-center relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold">
                        <Award className="w-12 h-12 text-navy-dark" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">
                      Certificate of Completion
                    </p>
                    
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      [Your Name]
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      has successfully completed
                    </p>
                    
                    <p className="font-display text-xl font-semibold text-primary mb-4">
                      German Language - Advanced Level
                    </p>
                    
                    <div className="w-40 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6 rounded-full" />
                    
                    <div className="flex items-center justify-center gap-12 text-sm text-muted-foreground">
                      <div className="text-center">
                        <p className="font-semibold text-foreground">MySkill</p>
                        <p>Training Partner</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground">SVP University</p>
                        <p>Academic Partner</p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gold text-navy-dark px-4 py-2 rounded-full font-bold text-sm shadow-gold"
                >
                  ✓ Verified
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certification;
