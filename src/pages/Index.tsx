import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CourseGrid } from "@/components/home/CourseGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Certification } from "@/components/home/Certification";
import { FAQ } from "@/components/home/FAQ";
import { ContactForm } from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CourseGrid />
        <WhyChooseUs />
        <Testimonials />
        <Certification />
        <FAQ />
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
