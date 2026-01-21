import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";

const japaneseTiers = [
  {
    name: "Basic Japanese",
    price: "₹20,000",
    features: [
      "Hiragana & Katakana scripts",
      "Basic sentence structure",
      "Everyday expressions",
      "Cultural introduction",
    ],
  },
  {
    name: "Intermediate Japanese",
    price: "₹28,000",
    popular: true,
    features: [
      "Kanji fundamentals",
      "Formal communication",
      "Reading & listening skills",
      "Business etiquette",
    ],
  },
  {
    name: "Advanced Japanese",
    price: "₹40,000",
    features: [
      "Business Japanese mastery",
      "JLPT exam preparation",
      "Professional fluency",
      "Advanced Kanji",
    ],
  },
];

const Japanese = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="Japanese Language"
          description="Japanese language skills are highly valued in technology, manufacturing, and international trade sectors."
          gradient="bg-gradient-to-br from-red-500 to-pink-600"
        />
        <CourseOverview
          overview="Japanese language skills are highly valued in technology, manufacturing, and international trade sectors. Japan's rich culture and economic power make Japanese an invaluable asset for your career."
          highlights={[
            "High demand in IT and automotive industries",
            "Access to Japan's advanced technology sector",
            "Rich cultural heritage and anime/manga culture",
            "JLPT certification preparation included",
          ]}
        />
        <PricingTable tiers={japaneseTiers} completePrice="₹78,000" />
      </main>
      <Footer />
    </div>
  );
};

export default Japanese;
