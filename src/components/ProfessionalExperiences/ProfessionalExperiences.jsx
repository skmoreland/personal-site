import Experience from '../Experience/Experience';

const eustaceDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Led the design and deployment of automated CRM solutions with complex data pipelines in Salesforce and Hubspot</li>
        <li>Increased the creation of lead generation data by recommending and implementing Hubspot marketing tools</li>
        <li>Wrote SOQL queries and Apex classes to populate custom graphs built using javascript and ChartJS HTML elements</li>
    </ul>

const c2cDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Developed a cohesive brand and web design that represented and emphasized the startup’s goals</li>
        <li>Implemented and rolled out a multi-page static site using Webflow classes and CSS within three weeks</li>
        <li>Automated custom forms on their website that forwarded crucial data from users interested in the program</li>
    </ul>

const slalomDescription = 
    <ul className="font-title text-xl space-y-2">
        <div>
            <li>Internal Projects</li> 
            <ul className="list-disc font-body text-base pl-4">
                <li>Completed a rigorous training program and curriculum focused on AWS cloud infrastructure</li>
                <li>Provisioned cloud architecture to support applications built with AWS EC2, API Gateway, Lambda, S3, DynamoDB</li>
                <li>Established CI/CD pipelines for full stack AWS applications using Jenkins and GitHub actions</li>
            </ul>
        </div>
        <div>
            <li>Large Scale Gaming Company</li>
            <ul className="list-disc font-body text-base pl-4">
                <li>Reduced the migration of entire gaming ecosystems to AWS from months to weeks </li>
                <li>Collaborated with the client to support them in configuring and deploying esports gaming servers</li>
                <li>Configured AWS resources using Terraform and automated their deployment using Jenkins pipelines</li>
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

const fedDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Partnered with other interns on a text summarization project to implement and test multiple extractive methods</li>
        <li>Coded SQL scripts for a database support systems team while working in an Agile work environment</li>
        <li>Programmed an API in C# to insert users and their permission information into a database table</li>
    </ul>

const ProfessionalExperience = () => {
    return (
        <div className="text-left px-6 lg:px-16">
            <div class="relative flex items-center font-title text-4xl">
                <div class="flex-grow border-t border-prime-blue border-4"></div>
                <span class="flex-shrink mx-4">Professional Experience</span>
                <div class="flex-grow border-t border-prime-blue border-4"></div>
            </div>
            <div className = "projects space-y-4 divide-y">
                <div>
                    <a href="https://eustaceconsulting.com/" target="_blank" rel="noreferrer">
                        <Experience title="Eustace Consulting" subtitle="Software Developer" description={eustaceDescription}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.collegetoclimate.co/" target="_blank" rel="noreferrer">
                        <Experience title="College to Climate" subtitle="Web Developer" description={c2cDescription}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.slalom.com/us/en" target="_blank" rel="noreferrer">
                    <Experience title="Slalom Consulting" subtitle="Associate Consultant" description={slalomDescription}/>
                    </a>
                </div>
                
                <Experience title="Federal Reserve Board" subtitle="Software Engineering Intern" description={fedDescription}/>
            </div>
        </div>
    );
  }
  
  export default ProfessionalExperience