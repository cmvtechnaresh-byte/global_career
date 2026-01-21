import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";
import { MeetYourMentor } from "@/components/course/MeetYourMentor";

const mandarinTiers = [
  {
    name: "Basic Mandarin",
    price: "₹19,000",
    features: [
      "Pinyin system mastery",
      "Pronunciation & tones",
      "Daily conversations",
      "Basic character writing",
    ],
  },
  {
    name: "Intermediate Mandarin",
    price: "₹27,000",
    popular: true,
    features: [
      "Sentence structure",
      "Vocabulary expansion",
      "Speaking confidence",
      "Reading comprehension",
    ],
  },
  {
    name: "Advanced Mandarin",
    price: "₹38,000",
    features: [
      "Business Chinese",
      "Professional communication",
      "HSK exam preparation",
      "Advanced characters",
    ],
  },
];

const Mandarin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="Mandarin Language"
          description="Mandarin is the world's most spoken language and essential for global business and trade opportunities."
          gradient="bg-gradient-to-br from-red-600 to-red-800"
          image="https://t4.ftcdn.net/jpg/01/88/97/67/360_F_188976775_naafg0BY2uOus4snBVbqiHVs7nuRQ1P3.jpg"
        />
        <CourseOverview
          overview="Mandarin is the world's most spoken language and essential for global business and trade opportunities. As China continues to grow as an economic superpower, Mandarin skills give you a competitive edge in the global marketplace."
          highlights={[
            "World's most spoken language with 1+ billion speakers",
            "Essential for international trade and commerce",
            "Growing demand in business and diplomacy",
            "HSK certification preparation included",
          ]}
        />
        <MeetYourMentor />
        <PricingTable tiers={mandarinTiers} completePrice="₹72,000" />
      </main>
      <Footer />
    </div>
  );
};

export default Mandarin;
