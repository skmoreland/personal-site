import Experience from '../Experience/Experience';

const socialMediaDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Architected and provisioned AWS cloud infrastructure to support a CI/CD pipeline hosted on Jenkins</li>
        <li>Designed a social media website hosted on AWS that allows users to share photos and customize their profile</li>
        <li>Utilized Hashicorp’s Terraform to deploy serverless infrastructure</li>
    </ul>

const inventorySiteDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Built out a VPC, public and private subnets, and EC2 instances using Elastic Beanstalk</li>
        <li>Designed and integrated a full-stack application so the inventory site could query a PostgreSQL database</li>
        <li>Deployed an autoscaling application load balancer to efficiently distribute traffic to the site</li>
    </ul>

const searchEngineDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Designed pre-processing methods to analyze documents and produce single, stem, positional, and phrase indexes</li>
        <li>Implemented BM25, cosine vector space model, and Dirichlet Smoothing to perform query processing</li>
        <li>Improved query results using partial processing and query expansion via pseudo relevance feedback</li>
    </ul>

const sentenceEmbeddingDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Transformed an existing sentence embedding algorithm to use as an extractive text summarization method</li>
        <li>Deployed nltk.cluster to apply k-means clustering on embeddings produced from pre-trained embedding models</li>
        <li>Tested and evaluated the power of a mainstream GPU and 8-core CPU concerning embedding time performance</li>
    </ul>

const mopheadSiteDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Designed and implemented a multi-page static site for an independent artist to advertise and sell their art</li>
        <li>Integrated with Shopify’s API for the artist to securely sell prints of their work directly on the site</li>
        <li>Added a secure contact form that pushes an email to the artist using EmailJS while protecting their email address</li>
    </ul>

const boxConnectorDescription = 
    <ul className="list-disc font-body text-base pl-4">
        <li>Leveraged Hubspot’s UI extensions and Box’s SDK  to build a responsive search capability for user’s Box files</li>
        <li>Automated the creation of data in Hubspot based on user’s current integration statuses with Hubspot and Box</li>
        <li>Designed detailed architecture diagrams to better document and communicate the functionality of the app</li>
    </ul>

const CodingProjects = () => {
    return (
        <div className="text-left px-6 lg:px-16">
            <div class="relative flex items-center font-title text-4xl">
                <div class="flex-grow border-t border-prime-blue border-4"></div>
                <span class="flex-shrink mx-4">Coding Projects</span>
                <div class="flex-grow border-t border-prime-blue border-4"></div>
            </div>
            <div className = "projects space-y-4 divide-y">
                <div>
                    <a href="https://sparkgridsoftware.com/" target="_blank" rel="noreferrer">
                        <Experience title="BOX CONNECTOR APP – TS, POSTGRES, HUBSPOT API, BOX SDK" subtitle="Sparkgrid Software" description={boxConnectorDescription}/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/skmoreland/mophead-site" target="_blank" rel="noreferrer">
                        <Experience title="INDEPENDENT ARTIST SITE - REACT, JAVASCRIPT" subtitle="Freelance Web Development" description={mopheadSiteDescription}/>
                    </a>
                </div>
                <Experience title="SOCIAL MEDIA SITE – AWS, TERRAFORM, JAVASCRIPT" subtitle="Slalom Cloud Residency" description={socialMediaDescription}/>
                <Experience title="INVENTORY SITE – AWS, JAVASCRIPT" subtitle="Slalom Cloud Residency" description={inventorySiteDescription}/>
                <Experience title="SEARCH ENGINE – PYTHON" subtitle="Information Retrieval Course" description={searchEngineDescription}/>
                <Experience title="SENTENCE EMBEDDING, K-MEANS CLUSTERING – PYTHON" subtitle="Federal Reserve Board Internship" description={sentenceEmbeddingDescription}/>
            </div>
        </div>
    );
  }
  
  export default CodingProjects

  /*
  <div>
        <a href="https://www.collegetoclimate.co/" target="_blank" rel="noreferrer">
            <Experience title="COLLEGE TO CLIMATE SITE - WEBFLOW" subtitle="Freelance Web Development" description={C2CSiteDescription}/>
        </a>
    </div>
  */

// const c2cSiteDescription = 
//     <ul className="list-disc font-body text-base pl-4">
//         <li>Collaborated with the College to Climate team on creating a cohesive brand for their startup</li>
//         <li>Designed the front-end of a multi-page static site that is easy to navigate and that communicates the client’s mission</li>
//         <li>Leveraged Webflow classes to create a cohesive and consistent user interface</li>
//     </ul>