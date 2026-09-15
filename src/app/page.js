import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import EducationExperienceSection from "@/components/EducationExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 dark:bg-[#0d0f12] dark:text-white transition-colors duration-300">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <EducationExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
