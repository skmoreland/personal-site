import Experience from '../Experience/Experience';

const SocialMediaDescription = 
    <ul className="list-disc font-body text-sm pl-4">
        <li>Architected and provisioned AWS cloud infrastructure to support a CI/CD pipeline hosted on Jenkins</li>
        <li>Designed a social media website hosted on AWS that allows users to share photos and customize their profile</li>
        <li>Utilized Hashicorp’s Terraform to deploy serverless infrastructure</li>
    </ul>

const InventorySiteDescription = 
    <ul className="list-disc font-body text-sm pl-4">
        <li>Built out a VPC, public and private subnets, and EC2 instances using Elastic Beanstalk</li>
        <li>Designed and integrated a full-stack application so the inventory site could query a PostgreSQL database</li>
        <li>Deployed an autoscaling application load balancer to efficiently distribute traffic to the site</li>
    </ul>

const SearchEngineDescription = 
    <ul className="list-disc font-body text-sm pl-4">
        <li>Designed pre-processing methods to analyze documents and produce single, stem, positional, and phrase indexes</li>
        <li>Implemented BM25, cosine vector space model, and Dirichlet Smoothing to perform query processing</li>
        <li>Improved query results using partial processing and query expansion via pseudo relevance feedback</li>
    </ul>

const SentenceEmbeddingDescription = 
    <ul className="list-disc font-body text-sm pl-4">
        <li>Transformed an existing sentence embedding algorithm to use as an extractive text summarization method</li>
        <li>Deployed nltk.cluster to apply k-means clustering on embeddings produced from pre-trained embedding models</li>
        <li>Tested and evaluated the power of a mainstream GPU and 8-core CPU concerning embedding time performance</li>
    </ul>

const CodingProjects = () => {
    return (
        <div className="text-left px-16 divide-y divide-black">
            <h1 className="font-title text-3xl">Coding Projects</h1>
            <div className = "projects space-y-4 divide-y">
                <Experience title="SOCIAL MEDIA SITE – AWS, TERRAFORM, JAVASCRIPT" subtitle="Slalom Cloud Residency" description={SocialMediaDescription}/>
                <Experience title="INVENTORY SITE – AWS, JAVASCRIPT" subtitle="Slalom Cloud Residency" description={InventorySiteDescription}/>
                <Experience title="SEARCH ENGINE – PYTHON" subtitle="Information Retrieval Course" description={SearchEngineDescription}/>
                <Experience title="SENTENCE EMBEDDING, K-MEANS CLUSTERING – PYTHON" subtitle="Federal Reserve Board Internship" description={SentenceEmbeddingDescription}/>
            </div>
        </div>
    );
  }
  
  export default CodingProjects