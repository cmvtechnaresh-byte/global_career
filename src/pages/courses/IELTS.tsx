import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";
import { MeetYourMentor } from "@/components/course/MeetYourMentor";

const ieltsTiers = [
  {
    name: "Basic IELTS",
    price: "₹15,000",
    features: [
      "Grammar foundation",
      "Vocabulary building",
      "Basic test introduction",
      "Study materials included",
    ],
  },
  {
    name: "Intermediate IELTS",
    price: "₹22,000",
    popular: true,
    features: [
      "Listening & reading strategies",
      "Writing task practice",
      "Speaking mock sessions",
      "Practice tests",
    ],
  },
  {
    name: "Advanced IELTS",
    price: "₹30,000",
    features: [
      "Speaking fluency training",
      "Full mock tests",
      "Band 7+ strategies",
      "One-on-one feedback",
    ],
  },
];

const IELTS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="IELTS Preparation"
          description="Comprehensive preparation for the International English Language Testing System. Master all four sections and achieve your target band score."
          gradient="bg-gradient-to-br from-blue-600 to-blue-800"
        />
        <CourseOverview
          overview="IELTS is recognized by over 10,000 organizations worldwide. Our preparation course covers all four modules - Listening, Reading, Writing, and Speaking - with proven strategies to help you achieve your target band score."
          highlights={[
            "Covers both Academic and General Training modules",
            "Expert tips for achieving Band 7+",
            "Regular mock tests with detailed feedback",
            "Personalized speaking practice sessions",
          ]}
        />
        <MeetYourMentor />
        <PricingTable tiers={ieltsTiers} completePrice="₹55,000" />
      </main>
      <Footer />
    </div>
  );
};

export default IELTS;
