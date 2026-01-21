import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";
import { MeetYourMentor } from "@/components/course/MeetYourMentor";

const germanTiers = [
  {
    name: "Basic German",
    price: "₹18,000",
    features: [
      "Alphabets & pronunciation",
      "Basic grammar fundamentals",
      "Daily conversations practice",
      "Self-introduction skills",
    ],
  },
  {
    name: "Intermediate German",
    price: "₹25,000",
    popular: true,
    features: [
      "Complex sentence formation",
      "Workplace vocabulary",
      "Listening & speaking practice",
      "Reading comprehension",
    ],
  },
  {
    name: "Advanced German",
    price: "₹35,000",
    features: [
      "Business communication",
      "Professional writing skills",
      "Interview preparation",
      "Certification readiness",
    ],
  },
];

const German = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="German Language"
          description="German is a high-demand language across Europe, essential for careers in engineering, healthcare, research, and international business."
          gradient="hero-gradient"
        />
        <CourseOverview
          overview="German is a high-demand language across Europe, essential for careers in engineering, healthcare, research, and international business. Our comprehensive program takes you from complete beginner to professional proficiency."
          highlights={[
            "Perfect for engineering and technical careers in Germany",
            "Gateway to European job markets and universities",
            "Strong focus on practical business communication",
            "Preparation for Goethe-Institut certifications",
          ]}
        />
        <MeetYourMentor />
        <PricingTable tiers={germanTiers} completePrice="₹70,000" />
      </main>
      <Footer />
    </div>
  );
};

export default German;
