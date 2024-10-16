import FeaturesCourses from "@/components/FeaturesCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import HeroSection from "@/components/ui/HeroSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
    <main className="min-h-screen bg-black/[1] antialiased bg-grid-white/[0.2]">
       <HeroSection/>
       <FeaturesCourses/>
       <WhyChooseUs/>
       <TestimonialCards/>
       <UpcomingWebinars/>
       <Instructors/>
       <Footer/>
    </main>
    </div>
  );
}

