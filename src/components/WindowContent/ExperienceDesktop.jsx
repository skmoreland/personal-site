import Window from "../Window/Window";
import mail from "../../assets/images/windows-envelope.png";
import ProfessionalExperience from "../ProfessionalExperiences/ProfessionalExperiences";
import CodingProjects from "../CodingProjects/CodingProjects";
const ExperienceDesktop = () => {
  return (
    <div className="relative">
      <div className="flex gap-8">
        <Window
          title="Professional Experience"
          titleIcon={mail}
          defaultOpen={false} // force it open
          defaultPosition={{ x: 100, y: 100 }} // explicit position
          defaultWidth={600}
          nestedMode={true}
        >
          <ProfessionalExperience />
        </Window>
        <Window
          title="Coding Projects"
          titleIcon={mail}
          defaultOpen={false}
          defaultWidth={500}
          nestedMode={true}
        >
          <CodingProjects />
        </Window>
      </div>
    </div>
  );
};

export default ExperienceDesktop;
