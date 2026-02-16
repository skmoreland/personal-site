import Experience from "../Experience/Experience";

const socialMediaDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Architected and provisioned AWS cloud infrastructure to support a CI/CD
      pipeline hosted on Jenkins
    </li>
    <li>
      Designed a social media website hosted on AWS that allows users to share
      photos and customize their profile
    </li>
    <li>Utilized Hashicorp’s Terraform to deploy serverless infrastructure</li>
  </ul>
);

const inventorySiteDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Built out a VPC, public and private subnets, and EC2 instances using
      Elastic Beanstalk
    </li>
    <li>
      Designed and integrated a full-stack application so the inventory site
      could query a PostgreSQL database
    </li>
    <li>
      Deployed an autoscaling application load balancer to efficiently
      distribute traffic to the site
    </li>
  </ul>
);

const searchEngineDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Designed pre-processing methods to analyze documents and produce single,
      stem, positional, and phrase indexes
    </li>
    <li>
      Implemented BM25, cosine vector space model, and Dirichlet Smoothing to
      perform query processing
    </li>
    <li>
      Improved query results using partial processing and query expansion via
      pseudo relevance feedback
    </li>
  </ul>
);

const sentenceEmbeddingDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Transformed an existing sentence embedding algorithm to use as an
      extractive text summarization method
    </li>
    <li>
      Deployed nltk.cluster to apply k-means clustering on embeddings produced
      from pre-trained embedding models
    </li>
    <li>
      Tested and evaluated the power of a mainstream GPU and 8-core CPU
      concerning embedding time performance
    </li>
  </ul>
);

const mopheadSiteDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Designed and implemented a multi-page static site for an independent
      artist to advertise and sell their art
    </li>
    <li>
      Integrated with Shopify’s API for the artist to securely sell prints of
      their work directly on the site
    </li>
    <li>
      Added a secure contact form that pushes an email to the artist using
      EmailJS while protecting their email address
    </li>
  </ul>
);

const boxConnectorDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Leveraged Hubspot’s UI extensions and Box’s SDK to build a responsive
      search capability for user’s Box files
    </li>
    <li>
      Refactored the front-end of the app from javascript to typescript within
      two weeks, forming a more optimal and robust code base
    </li>
    <li>
      Coded an interface and back-end methods to allow users to rename their Box
      files and folders within the integration
    </li>
  </ul>
);

const experienceCloudDescription = (
  <ul className="list-disc font-body text-base pl-4">
    <li>
      Wrote SOQL queries and Apex classes to populate custom graphs built using
      Javascript and ChartJS HTML elements
    </li>
    <li>
      Created lightning web components and Apex methods to allow portal users to
      update Salesforce records
    </li>
    <li>
      Designed an easy to navigate interface that responded to user’s profile
      permissions and the client’s specifications
    </li>
  </ul>
);

const CodingProjects = () => {
  return (
    <div className="text-left px-6">
      <div className="relative flex items-center font-title text-3xl underline">
        Coding Projects
      </div>
      <div className="projects space-y-4">
        <Experience
          title="BOX CONNECTOR APP"
          subtitle="TS, POSTGRES, HUBSPOT API, BOX SDK - Sparkgrid Software"
          description={boxConnectorDescription}
          link="https://sparkgridsoftware.com/"
        />
        <Experience
          title="SALESFORCE EXPERIENCE CLOUD SITE"
          subtitle="JAVASCRIPT, APEX, SALESFORCE - Eustace Consulting"
          description={experienceCloudDescription}
        />
        <Experience
          title="INDEPENDENT ARTIST SITE"
          subtitle="REACT, JAVASCRIPT - Freelance Web Development"
          description={mopheadSiteDescription}
          link="https://github.com/skmoreland/mophead-site"
        />
        <Experience
          title="SOCIAL MEDIA SITE"
          subtitle="AWS, TERRAFORM, JAVASCRIPT - Slalom Cloud Residency"
          description={socialMediaDescription}
        />
        <Experience
          title="INVENTORY SITE"
          subtitle="AWS, JAVASCRIPT - Slalom Cloud Residency"
          description={inventorySiteDescription}
        />
        <Experience
          title="SEARCH ENGINE"
          subtitle="PYTHON - Information Retrieval Course"
          description={searchEngineDescription}
        />
        <Experience
          title="SENTENCE EMBEDDING, K-MEANS CLUSTERING"
          subtitle="PYTHON - Federal Reserve Board Internship"
          description={sentenceEmbeddingDescription}
        />
      </div>
    </div>
  );
};

export default CodingProjects;
