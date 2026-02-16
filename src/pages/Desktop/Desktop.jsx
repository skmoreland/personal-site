// pages/Desktop/Desktop.jsx
import Window from "../../components/Window/Window";
import lightbulb from "../../assets/images/lightbulb.svg";
import briefcase from "../../assets/images/briefcase.png";
import mail from "../../assets/images/windows-envelope.png";
import AboutMe from "../../components/WindowContent/AboutMe";
import ContactMe from "../../components/WindowContent/ContactMe";
import ExperienceDesktop from "../../components/WindowContent/ExperienceDesktop";
const Desktop = () => {
  return (
    <div className="max-h-screen relative">
      {/* About Me Window */}
      <Window
        title="About Me"
        titleIcon={lightbulb}
        folderPosition={{ top: 64, left: 32 }} // 48px nav + 16px padding
        defaultOpen={true}
        defaultWidth={850}
      >
        <AboutMe />
      </Window>

      {/* Experience Window */}
      <Window
        title="Experience"
        titleIcon={briefcase}
        folderPosition={{ top: 142, left: 32 }} // 64 + ~78px per folder
        defaultOpen={false}
      >
        <ExperienceDesktop />
      </Window>

      {/* Contact Window */}
      <Window
        title="Contact"
        titleIcon={mail}
        folderPosition={{ top: 220, left: 32 }}
        defaultOpen={false}
        defaultWidth={500}
      >
        <ContactMe />
      </Window>
    </div>
  );
};

export default Desktop;
