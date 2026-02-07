import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection"; 
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillSections"; 
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle/>
    <StarBackground/>
    <Navbar/>
    <HeroSection/>
    <AboutMe/>
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
    </div>;
};

export default Home;
