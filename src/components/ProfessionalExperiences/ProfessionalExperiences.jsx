import Experience from '../Experience/Experience';

const SlalomDescription = 
    <ul className="font-title text-xl space-y-2">
        <div>
            <li>Cloud Residency Training Program</li> 
            <ul className="list-disc font-body text-base pl-4">
                <li>Completed a rigorous training program and curriculum focused on AWS cloud infrastructure</li>
                <li>Designed cloud architecture to support full-stack server-based and serverless applications</li>
                <li>Deployed CI/CD pipelines composed of AWS services using infrastructure-as-code tooling</li>
            </ul>
        </div>
        <div>
            <li>Large Scale Gaming Company</li>
            <ul className="list-disc font-body text-base pl-4">
                <li>Led the migration of entire gaming ecosystems including servers and databases to AWS cloud infrastructure</li>
                <li>Collaborated with the client to support them in configuring and deploying esports gaming servers</li>
                <li>Utilized a Kanban workflow to efficiently manage and troubleshoot tasks</li>
            </ul>
        </div>
        <div>
            <li>Housing Accelerator</li>
            <ul className="list-disc font-body text-base pl-4">
                <li>Configured IAM permissions, security groups for AWS resources using AWS CDK to meet HMIS standards</li>
                <li>Designed AWS Glue jobs to filter data from AWS Redshift tables to a curated format for data analytics</li>
                <li>Researched and analyzed hotel booking APIs to find the most cost efficient and effective tooling</li>
            </ul>
        </div>
    </ul>

const FedDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Partnered with other interns on a text summarization project to implement and test multiple extractive methods</li>
        <li>Coded SQL scripts for a database support systems team while working in an Agile work environment</li>
        <li>Programmed an API in C# to insert users and their permission information into a database table</li>
    </ul>

const ProfessionalExperience = () => {
    return (
        <div className="text-left px-6 lg:px-16">
            <div class="relative flex items-center font-title text-3xl">
                <div class="flex-grow border-t border-prime-blue border-4"></div>
                <span class="flex-shrink mx-4">Professional Experience</span>
                <div class="flex-grow border-t border-prime-blue border-4"></div>
            </div>
            <div className = "projects space-y-4 divide-y">
                <Experience title="Slalom Consulting" subtitle="Associate Consultant" description={SlalomDescription}/>
                <Experience title="Federal Reserve Board" subtitle="Software Engineering Intern" description={FedDescription}/>
            </div>
        </div>
    );
  }
  
  export default ProfessionalExperience