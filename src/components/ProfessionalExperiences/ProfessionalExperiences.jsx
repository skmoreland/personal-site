import React from "react";
import Experience from "../Experience/Experience";

const eustaceDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Lead the design and deployment of automated CRM solutions with complex
      data pipelines in Salesforce and Hubspot
    </li>
    <li>
      Increase the creation of lead generation data by recommending and
      implementing Hubspot marketing tools
    </li>
    <li>
      Develop API integrations with Salesforce, enabling clients to connect
      their payment and accounting systems
    </li>
  </ul>
);

const boxConnectorDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Design and facilitate an efficient QA process to outline extensive testing
      scenarios and locate critical bugs
    </li>
    <li>
      Collaborate with a team of engineers to plan out quarterly goals based on
      team capacity and skill sets
    </li>
  </ul>
);

const c2cDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Developed a cohesive brand and web design that represented and emphasized
      the startup’s goals
    </li>
    <li>
      Implemented and rolled out a multi-page static site using Webflow classes
      and CSS within three weeks
    </li>
    <li>
      Automated custom forms on their website that forwarded crucial data from
      users interested in the program
    </li>
  </ul>
);

const slalomDescription = (
  <ul className="font-title text-xl space-y-2">
    <div>
      <li>Internal Projects</li>
      <ul className="list-disc font-body text-base pl-4">
        <li>
          Completed a rigorous training program and curriculum focused on AWS
          cloud infrastructure
        </li>
        <li>
          Provisioned cloud architecture to support applications built with AWS
          EC2, API Gateway, Lambda, S3, DynamoDB
        </li>
        <li>
          Established CI/CD pipelines for full stack AWS applications using
          Jenkins and GitHub actions
        </li>
      </ul>
    </div>
    <div>
      <li>Large Scale Gaming Company</li>
      <ul className="list-disc font-body text-base pl-4">
        <li>
          Reduced the migration of entire gaming ecosystems to AWS from months
          to weeks{" "}
        </li>
        <li>
          Collaborated with the client to support them in configuring and
          deploying esports gaming servers
        </li>
        <li>
          Configured AWS resources using Terraform and automated their
          deployment using Jenkins pipelines
        </li>
      </ul>
    </div>
    <div>
      <li>Housing Accelerator</li>
      <ul className="list-disc font-body text-base pl-4">
        <li>
          Configured IAM permissions, security groups for AWS resources using
          AWS CDK to meet HMIS standards
        </li>
        <li>
          Designed AWS Glue jobs to filter data from AWS Redshift tables to a
          curated format for data analytics
        </li>
        <li>
          Researched and analyzed hotel booking APIs to find the most cost
          efficient and effective tooling
        </li>
      </ul>
    </div>
  </ul>
);

const fedDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Partnered with other interns on a text summarization project to implement
      and test multiple extractive methods
    </li>
    <li>
      Coded SQL scripts for a database support systems team while working in an
      Agile work environment
    </li>
    <li>
      Programmed an API in C# to insert users and their permission information
      into a database table
    </li>
  </ul>
);

const ProfessionalExperience = () => {
  return (
    <div className="text-left px-6 ">
      <div className="relative flex items-center font-title text-3xl underline">
        Professional Experience
      </div>
      <div className="projects space-y-4">
        <div>
          <Experience
            title="Eustace Consulting"
            subtitle="Software Developer, Aug. 2024 - Present"
            description={eustaceDescription}
            link="https://eustaceconsulting.com/"
          />
        </div>
        <div>
          <Experience
            title="Sparkgrid Software"
            subtitle="Project Manager Dec. 2024 - Present"
            description={boxConnectorDescription}
            link="https://www.sparkgridsoftware.com/"
          />
        </div>
        <div>
          <Experience
            title="College to Climate"
            subtitle="Web Developer, Apr. 2024 - Present"
            description={c2cDescription}
            link="https://www.collegetoclimate.co/"
          />
        </div>
        <div>
          <Experience
            title="Slalom Consulting"
            subtitle="Associate Consultant, June 2022 - Sept. 2023"
            description={slalomDescription}
            link="https://www.slalom.com/us/en"
          />
        </div>

        <Experience
          title="Federal Reserve Board"
          subtitle="Software Engineering Intern, June 2021 - Aug.202"
          description={fedDescription}
        />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
