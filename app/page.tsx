import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
