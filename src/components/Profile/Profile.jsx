import profile_pic from '../../assets/images/profile-pic-2.png'

const Profile = () => {
    return (
        <div className="font-body space-y-8 lg:space-y-0 lg:flex lg:items-center lg:justify-center">
            <img src={profile_pic} alt="profile" className="min-w-[200px] w-1/5 mr-16 border-black border-8 rounded-lg"/>
            <div className="text-left lg:w-5/12">
                <h1 className="font-title text-4xl decoration-prime-red underline decoration-4 underline-offset-4">About Me</h1>
                <div className="text-xl">
                    <br />
                    <p>Welcome to my page!</p>
                    <br />
                    <p>
                        My name is Sarah Moreland and I am a software engineer based in Boston.
                        I'm currently open to new software engineering roles. I would like to bring the skills that I learned in Slalom's Cloud Residency Program
                        to my next position. I am specifically interested in companies focused on using technology to promote social equity or environmental justice.
                        I have extensive experience working with AWS and have received the Associate Solutions Architect, Developer, and SysOps certifications. I'm currently
                        doing freelance web development while I look for my next role.
                    </p>
                    <br />
                    <p>
                        Outside of work, I enjoy playing music with my friends. I am currently working on learning the electric guitar but I also love sitting down
                        at my keyboard or getting out to see live music. I have been really loving the Boston music scene!
                        I also enjoy watching movies, taking care of my plants, and cooking.
                    </p>
                </div>
            </div>
            
        </div>
    );
  }
  
  export default Profile