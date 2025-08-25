import LandingPage  from "@/app/component/LandingPage";
import Header from "@/app/component/Header";
import Background from "@/app/component/Background"
import About from "@/app/component/AboutMe";
import SkillSection from '@/app/component/SkillsSection';
import ProjectSection from "@/app/component/ProjectSection";
import Contact from "@/app/component/Contact";
import Footer from "@/app/component/Footer";

export default function Home() {
  return (
    <div className="relative text-gray-200" >
      <Background />
      <Header />
      <LandingPage />
      <About />
      <SkillSection />
      <ProjectSection />
      <Contact />
      <Footer />
   </div>
  );
}
