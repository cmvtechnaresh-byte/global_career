import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course/CourseHero";
import { CourseOverview } from "@/components/course/CourseOverview";
import { PricingTable } from "@/components/course/PricingTable";
import { MeetYourMentor } from "@/components/course/MeetYourMentor";
import { ContactForm } from "@/components/home/ContactForm";

const toeflTiers = [
  {
    name: "Basic TOEFL",
    price: "₹14,000",
    features: [
      "Grammar & pronunciation",
      "Vocabulary building",
      "Test introduction",
      "Study resources",
    ],
  },
  {
    name: "Intermediate TOEFL",
    price: "₹21,000",
    popular: true,
    features: [
      "Academic reading skills",
      "Listening strategies",
      "Note-taking techniques",
      "Integrated tasks",
    ],
  },
  {
    name: "Advanced TOEFL",
    price: "₹28,000",
    features: [
      "Speaking confidence",
      "Writing structure mastery",
      "Exam simulations",
      "Score optimization",
    ],
  },
];

const TOEFL = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CourseHero
          title="TOEFL Preparation"
          description="Excel in the Test of English as a Foreign Language. Our program prepares you for success in academic English environments."
          gradient="bg-gradient-to-br from-orange-500 to-amber-600"
          image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />
        <CourseOverview
          overview="TOEFL iBT is accepted by 11,000+ universities and institutions in over 150 countries. Our preparation program focuses on the four key skills tested: Reading, Listening, Speaking, and Writing, with strategies tailored for academic success."
          highlights={[
            "Focus on academic English proficiency",
            "Integrated speaking and writing practice",
            "Computer-based test simulation",
            "Target score achievement strategies",
          ]}
        />
        <MeetYourMentor />
        <PricingTable tiers={toeflTiers} completePrice="₹50,000" />
        <ContactForm preselectedCourse="toefl" />
      </main>
      <Footer />
    </div>
  );
};

export default TOEFL;
