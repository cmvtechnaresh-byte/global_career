import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";
import { MeetYourMentor } from "@/components/course/MeetYourMentor";

const greTiers = [
  {
    name: "Basic GRE",
    price: "₹20,000",
    features: [
      "Quantitative fundamentals",
      "Vocabulary basics",
      "Test structure overview",
      "Study plan development",
    ],
  },
  {
    name: "Intermediate GRE",
    price: "₹30,000",
    popular: true,
    features: [
      "Verbal reasoning mastery",
      "Data interpretation",
      "Analytical writing",
      "Practice questions",
    ],
  },
  {
    name: "Advanced GRE",
    price: "₹45,000",
    features: [
      "Full-length mock tests",
      "Time management strategies",
      "High-score strategies",
      "Personalized coaching",
    ],
  },
];

const GRE = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="GRE Preparation"
          description="Master the Graduate Record Examination with our comprehensive preparation program. Achieve competitive scores for top graduate school admissions."
          gradient="bg-gradient-to-br from-emerald-600 to-teal-700"
        />
        <CourseOverview
          overview="The GRE is required by thousands of graduate and business schools worldwide. Our comprehensive program covers Verbal Reasoning, Quantitative Reasoning, and Analytical Writing with proven strategies to maximize your score."
          highlights={[
            "Comprehensive coverage of all three sections",
            "5000+ practice questions and problems",
            "Adaptive learning based on your performance",
            "Score improvement guarantee",
          ]}
        />
        <MeetYourMentor />
        <PricingTable tiers={greTiers} completePrice="₹85,000" />
      </main>
      <Footer />
    </div>
  );
};

export default GRE;
