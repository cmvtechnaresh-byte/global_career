import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
  completePrice: string;
}

export function PricingTable({ tiers, completePrice }: PricingTableProps) {
  return (
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
            PRICING
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Course Levels & Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the level that matches your current skills and goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl border ${
                tier.popular ? 'border-gold shadow-gold' : 'border-border shadow-soft'
              } p-8 flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center gap-1.5 shadow-gold">
                  <Star className="w-4 h-4 text-navy-dark fill-current" />
                  <span className="text-navy-dark text-sm font-bold">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "gold" : "outline"} 
                className="w-full"
              >
                Enroll Now
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Complete Program */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-primary to-navy-light rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Complete Program (All Levels)
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Get access to all three levels at a discounted price. The complete journey from beginner to professional.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-4xl lg:text-5xl font-bold text-primary-foreground">{completePrice}</span>
            <span className="text-primary-foreground/60 line-through text-xl">Save up to 15%</span>
          </div>
          <Button variant="hero" size="xl">
            Enroll in Complete Program
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
