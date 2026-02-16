import lucy from "../../assets/images/me-and-lucy.jpg";

const AboutMe = () => {
  return (
    <div className="p-4 text-black text-left font-windows overflow-auto flex-1">
      <img src={lucy} alt="me and cat" className="w-3/5" />
      <br />
      <p className="text-xl">
        <b>Welcome to my page!</b>
      </p>
      <br />
      <p>
        My name is Sarah Moreland and I am a software engineer based in Boston.
        I'm currently working at{" "}
        <a
          href="https://eustaceconsulting.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Eustace Consulting
        </a>
        . Since starting at the company, I've led multiple client projects and
        helped design full-scale CRM solutions to improve the internal and
        marketing performance of various companies. I frequently automate CRM
        processes using Apex and Salesforce flows by building custom lightning
        web components using Javascript, HTML, and CSS to create adaptable
        experience cloud sites.
      </p>
      <br />
      <p>
        Currently I am helping develop{" "}
        <a
          href="https://sparkgridsoftware.com/files/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Sparkgrid Software's Box Connector
        </a>{" "}
        integration that allows Hubspot users to view their Box files directly
        in their Hubspot portal. I have been responsible for building over 30
        workflow actions to automate Box processes using HubSpot workflows. I
        also developed key features of the app including a customizable search,
        enabling pinned folder features, and a collaborator management service.
      </p>
      <br />
      <p>
        Outside of work, I enjoy working with modeling clay and making stop
        motion shorts. I have been experimenting with the personification of
        vegetables and fruit! Check it{" "}
        <a
          href="https://www.youtube.com/@GoopyClayCompany"
          target="_blank"
          rel="noreferrer"
        >
          out.
        </a>
      </p>
    </div>
  );
};

export default AboutMe;
