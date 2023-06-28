import Certifications from '../../components/Certifications/Certifications';
import CodingProjects from '../../components/CodingProjects/CodingProjects';
import ProfessionalExperiences from '../../components/ProfessionalExperiences/ProfessionalExperiences';
function Projects() {
    return (
        <div className="Home h-screen bg-white py-16 flex justify-center">
            <div className="flex flex-col space-y-8">
                <ProfessionalExperiences />
                <div className="pb-8">
                    <CodingProjects />
                </div>
            </div>
            <div className="pr-8">
                <Certifications />
            </div>
        </div>
  );
}

export default Projects;