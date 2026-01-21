import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";

const spanishTiers = [
  {
    name: "Basic Spanish",
    price: "₹16,000",
    features: [
      "Greetings & introductions",
      "Basic verbs & grammar",
      "Daily vocabulary building",
      "Simple conversations",
    ],
  },
  {
    name: "Intermediate Spanish",
    price: "₹23,000",
    popular: true,
    features: [
      "Conversational fluency",
      "Grammar mastery",
      "Travel & workplace usage",
      "Cultural understanding",
    ],
  },
  {
    name: "Advanced Spanish",
    price: "₹32,000",
    features: [
      "Professional communication",
      "Business Spanish skills",
      "Cultural fluency",
      "DELE exam preparation",
    ],
  },
];

const Spanish = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="Spanish Language"
          description="Spanish is one of the most spoken global languages, ideal for international jobs, travel, and cultural exchange."
          gradient="bg-gradient-to-br from-red-600 to-amber-500"
        />
        <CourseOverview
          overview="Spanish is one of the most spoken global languages, ideal for international jobs, travel, and cultural exchange. With over 500 million speakers worldwide, Spanish opens doors to opportunities across the Americas, Europe, and beyond."
          highlights={[
            "Second most spoken native language in the world",
            "Essential for business in Latin America and Spain",
            "Gateway to rich cultural heritage and literature",
            "Preparation for DELE certification",
          ]}
        />
        <PricingTable tiers={spanishTiers} completePrice="₹65,000" />
      </main>
      <Footer />
    </div>
  );
};

export default Spanish;
