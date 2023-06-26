import CodingProjects from '../../components/CodingProjects/CodingProjects';
import ProfessionalExperiences from '../../components/ProfessionalExperiences/ProfessionalExperiences';
function Projects() {
    return (
        <div className="Home h-screen bg-white py-16 space-y-8">
            <ProfessionalExperiences />
            <CodingProjects />
        </div>
  );
}

export default Projects;