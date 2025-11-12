import React from "react";
import { render } from "@testing-library/react";
import Experience from "../Experience/Experience";
import { Frame, TreeView, Tabs, Tab } from "react95";
import { ThemeProvider } from "styled-components";
import { Video } from "@react95/core";

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

const categories = [
  {
    id: "beverages",
    label: "Beverages",
    icon: <>🥤</>,
    items: [
      {
        id: "juices",
        label: "Juices",
        icon: <>🧃</>,
        items: [
          { id: "apple-juice", label: "Apple juice", icon: <>🍎</> },
          { id: "orange-juice", label: "Orange juice", icon: <>🍊</> },
          { id: "strawberry-juice", label: "Strawberry juice", icon: <>🍓</> },
        ],
      },
      {
        id: "coffee",
        label: "Coffee",
        icon: <>☕</>,
        items: [
          { id: "latte", label: "Latte", icon: <>☕</> },
          { id: "espresso", label: "Espresso", icon: <>☕</> },
        ],
      },
    ],
  },
  {
    id: "dairy",
    label: "Dairy",
    icon: <>🧈</>,
    items: [
      {
        id: "cheeses",
        label: "Cheeses",
        icon: <>🧀</>,
        items: [
          { id: "goat-cheese", label: "Goat cheese", icon: <>🧀</> },
          { id: "camembert-cheese", label: "Camembert", icon: <>🧀</> },
          { id: "cheddar-cheese", label: "Cheddar", icon: <>🧀</> },
        ],
      },
      {
        id: "milk",
        label: "Milk",
        icon: <>🥛</>,
        items: [
          { id: "cow-milk", label: "Cow Milk", icon: <>🐄</> },
          { id: "soya-milk", label: "Soya milk", icon: <>🥛</> },
          { id: "oat-milk", label: "Oat milk", icon: <>🥛</> },
        ],
      },
    ],
  },
];

const CodingProjects = () => {
  return (
    <div className="text-left px-6 lg:px-16">
      <div class="relative flex items-center font-title text-4xl">
        <div class="flex-grow border-t border-prime-blue border-4"></div>
        <span class="flex-shrink mx-4">Coding Projects</span>
        <div class="flex-grow border-t border-prime-blue border-4"></div>
      </div>
      <div className="projects space-y-4 divide-y">
        <div>
          <a
            href="https://sparkgridsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Experience
              title="BOX CONNECTOR APP – TS, POSTGRES, HUBSPOT API, BOX SDK"
              subtitle="Sparkgrid Software"
              description={boxConnectorDescription}
            />
          </a>
        </div>
        <Experience
          title="SALESFORCE EXPERIENCE CLOUD SITE – JAVASCRIPT, APEX, SALESFORCE"
          subtitle="Eustace Consulting"
          description={experienceCloudDescription}
        />
        <div>
          <a
            href="https://github.com/skmoreland/mophead-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Experience
              title="INDEPENDENT ARTIST SITE - REACT, JAVASCRIPT"
              subtitle="Freelance Web Development"
              description={mopheadSiteDescription}
            />
          </a>
        </div>
        <Experience
          title="SOCIAL MEDIA SITE – AWS, TERRAFORM, JAVASCRIPT"
          subtitle="Slalom Cloud Residency"
          description={socialMediaDescription}
        />
        <Experience
          title="INVENTORY SITE – AWS, JAVASCRIPT"
          subtitle="Slalom Cloud Residency"
          description={inventorySiteDescription}
        />
        <Experience
          title="SEARCH ENGINE – PYTHON"
          subtitle="Information Retrieval Course"
          description={searchEngineDescription}
        />
        <Experience
          title="SENTENCE EMBEDDING, K-MEANS CLUSTERING – PYTHON"
          subtitle="Federal Reserve Board Internship"
          description={sentenceEmbeddingDescription}
        />
      </div>
    </div>
  );
};

export default CodingProjects;
