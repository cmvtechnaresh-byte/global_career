import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CourseGrid } from "@/components/home/CourseGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Certification } from "@/components/home/Certification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CourseGrid />
        <WhyChooseUs />
        <Certification />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
