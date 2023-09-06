import envelope from '../../assets/images/envelope.png'

function Contact() {
    return (
    <div className="Contact">
        <div className="pt-12 mx-8 lg:mx-96">
        <div class="relative flex items-center font-title text-3xl">
                <div class="flex-grow border-t border-black border-2"></div>
                <span class="flex-shrink mx-4">Contact Me</span>
                <div class="flex-grow border-t border-black border-2"></div>
            </div>
            <div className="font-body text-2xl pt-2">
                <div className="flex justify-center -mt-8 -ml-4 -mb-8">
                    <img src={envelope} alt="envelope" className="min-w-[200px] w-1/12"/>
                </div>
                <a 
                    className="hover:text-prime-blue"
                    href="mailto: skmoreland217@gmail.com" 
                    target="_blank" 
                    rel="noreferrer noopener"><
                        b>Email: </b>
                </a> 
                <h1>skmoreland217@gmail.com</h1>
                <a 
                    className="hover:text-prime-blue"
                    href="https://drive.google.com/file/d/1WbcnNGS9OaEU8T4KR1sMP0_ORgHlBQ6y/view" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <b>Resume</b>
                </a>
                <br/>
                <a 
                    className="hover:text-prime-blue"
                    href="https://www.linkedin.com/in/sarah-moreland-63754b19a/" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <b>LinkedIn</b>
                </a>
                <br/>
                <a 
                    className="hover:text-prime-blue"
                    href="https://github.com/skmoreland" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <b>GitHub</b>
                </a>
            </div>
        </div>
        
    </div>
  );
}

export default Contact;