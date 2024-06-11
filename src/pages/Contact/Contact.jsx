import envelope from '../../assets/images/envelope.png'

function Contact() {
    return (
    <div className="Contact">
        <div className="pt-12 mx-8 lg:mx-[400px]">
            <div class="relative flex items-center 
                        font-title text-4xl">
                <div class="flex-grow 
                            border-t border-black border-2" />
                <span class="flex-shrink mx-4">Contact Me</span>
                <div class="flex-grow 
                            border-t border-black border-2" />
            </div>
            <div className="pt-2 font-body text-2xl">
                <div className="flex justify-center 
                                -mt-8 -ml-4 -mb-8">
                    <img src={envelope} alt="envelope" className="min-w-[200px] w-1/12"/>
                </div>
                <div className="space-y-2">
                    <div>
                        <a 
                            className="hover:text-prime-blue"
                            href="https://drive.google.com/file/d/1GrxCeOkJsRQXK7ktyjRq56IP2dZGqGOC/view" 
                            target="_blank" 
                            rel="noreferrer noopener">
                                <b>Resume</b>
                        </a>
                    </div>
                    <div>
                        <a 
                            className="hover:text-prime-blue"
                            href="https://www.linkedin.com/in/sarah-moreland-63754b19a/" 
                            target="_blank" 
                            rel="noreferrer noopener">
                                <b>LinkedIn</b>
                        </a>
                    </div>
                    <div>
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
        </div>
    </div>
  );
}

export default Contact;