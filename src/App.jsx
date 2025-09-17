import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMain from "./components/contactMe/ContactMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/Hero/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import SkillsMain from "./components/skillSection/SkillsMain";
import SubSkill from "./components/skillSection/SubSkill";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
}

export default App;
