const image_height = "h-32"

const Certifications = () => {
    return (
        <div className="text-left px-16 divide-y divide-black">
            <h1 className="font-bebas text-3xl">Certifications</h1>
            <div className="flex items-center pt-4 space-x-8">
                <a href="https://www.credly.com/badges/05a4f32a-f056-4d57-9914-7f78a084122f/public_url" target="_blank" rel="noreferrer noopener">
                    <img src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="Cloud Practitioner" className={image_height}/>
                </a>
                <a href="https://www.credly.com/badges/5b970e49-0d3e-4469-8879-61bf214b305c/public_url" target="_blank" rel="noreferrer noopener">
                    <img src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Solutions Architect" className={image_height}/>
                </a>
                <a href="https://www.credly.com/badges/e108f3c5-4d0f-4ff8-855a-38a759f7cab0/public_url" target="_blank" rel="noreferrer noopener">
                    <img src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="Developer" className={image_height}/>
                </a>
                <a href="https://www.credly.com/badges/74c122bf-4069-418a-8b02-8608336fd7b6/public_url" target="_blank" rel="noreferrer noopener">
                    <img src="https://images.credly.com/size/680x680/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png" alt="SysOps" className={image_height}/>
                </a>
            </div>
        </div>
    );
  }
  
  export default Certifications