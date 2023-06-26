import Experience from '../Experience/Experience';

const SlalomDescription = 
    <ul className="font-bebas text-lg">
        <li>Cloud Residency Training Program</li> 
            <ul className="list-disc font-josefin text-sm pl-4">
                <li>Completed a rigorous training program and curriculum focused on AWS cloud infrastructure</li>
                <li>Designed cloud architecture to support full-stack server-based and serverless applications</li>
                <li>Deployed CI/CD pipelines composed of AWS services using infrastructure-as-code tooling</li>
            </ul>
        <li>Large Scale Gaming Company</li>
            <ul className="list-disc font-josefin text-sm pl-4">
                <li>Led the migration of entire gaming ecosystems including servers and databases to AWS cloud infrastructure</li>
                <li>Collaborated with the client to support them in configuring and deploying esports gaming servers</li>
                <li>Utilized a Kanban workflow to efficiently manage and troubleshoot tasks</li>
            </ul>
    </ul>

const FedDescription = 
    <ul className="font-bebas text-lg">
    <li>Summer Intern Program</li> 
        <ul className="list-disc font-josefin text-sm pl-4">
            <li>Partnered with other interns on a text summarization project to implement and test multiple extractive methods</li>
            <li>Coded SQL scripts for a database support systems team while working in an Agile work environment</li>
            <li>Programmed an API in C# to insert users and their permission information into a database table</li>
        </ul>
    </ul>

const ProfessionalExperience = () => {
    return (
        <div className="text-left px-16 divide-y divide-black">
            <h1 className="font-bebas text-3xl">Professional Experience</h1>
            <div className = "projects space-y-4 divide-y">
                <Experience title="Slalom Consulting" subtitle="Associate Consultant" description={SlalomDescription}/>
                <Experience title="Federal Reserve Board" subtitle="Software Engineering Intern" description={FedDescription}/>
            </div>
        </div>
    );
  }
  
  export default ProfessionalExperience