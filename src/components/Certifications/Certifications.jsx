const image_height = "h-32"

const Certifications = () => {
    return (
        <div className="text-left px-16 divide-y divide-black">
            <h1 className="font-bebas text-3xl">Certifications</h1>
            <div className="flex items-center pt-4 space-x-8">
                <img src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="Cloud Practitioner" className={image_height}/>
                <img src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Solutions Architect" className={image_height}/>
                <img src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="Developer" className={image_height}/>
                <img src="https://images.credly.com/size/680x680/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png" alt="SysOps" className={image_height}/>
            </div>
        </div>
    );
  }
  
  export default Certifications