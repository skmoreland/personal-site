import envelope from "../../assets/images/windows-envelope.png";
import file from "../../assets/images/file.png";
import network from "../../assets/images/network.png";
import computers from "../../assets/images/computers.png";

const ContactMe = () => {
  return (
    <div className="mx-8 min-w-450">
      <h1 className="py-4">Get in touch!</h1>
      <div className="pt-2 font-body text-lg">
        <div className="grid grid-cols-4">
          <a
            className="hover:text-prime-blue flex flex-col items-center"
            href="mailto:skmoreland217@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={envelope} alt="envelope" className="w-1/12 min-w-12" />
            <b>Email</b>
          </a>
          <a
            className="hover:text-prime-blue flex flex-col items-center"
            href="https://drive.google.com/file/d/1KQ6tEw0Tl38jW4ZUaYyTv15ji5Ntz4g-/view?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={file} alt="envelope" className="w-1/12 min-w-12" />
            <b>Resume</b>
          </a>
          <a
            className="hover:text-prime-blue flex flex-col items-center"
            href="https://www.linkedin.com/in/sarah-moreland-63754b19a/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={network} alt="envelope" className="w-1/12 min-w-12" />
            <b>LinkedIn</b>
          </a>
          <a
            className="hover:text-prime-blue flex flex-col items-center"
            href="https://github.com/skmoreland"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={computers} alt="computers" className="w-1/12 min-w-12" />
            <b>GitHub</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
