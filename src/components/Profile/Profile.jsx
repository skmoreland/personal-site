import profile_pic from '../../assets/images/profile-pic-2.png'

const Profile = () => {
    return (
        <div className="flex items-center font-body justify-center">
            <img src={profile_pic} alt="profile" className="min-w-[200px] w-2/12 mr-16 border-black border-4 rounded-lg"/>
            <div className="text-left w-5/12">
                <h1 className="font-title text-3xl">About Me</h1>
                <br />
                <p>Welcome to my page!</p>
                <br />
                <p>
                    My name is Sarah Moreland and I am currently living in Boston and working as an Associate Consultant at Slalom Consulting.
                    I'm a part of their Cloud Residency Program during which I have completed a rigorous training curriculum and received the associate level 
                    AWS certifications for Solution Architect, Developer, and SysOps. 
                    Currently I am gaining client experience and working on expanding my front-end and cloud knowledge.
                </p>
                <br />
                <p>
                    Outside of work, I enjoy playing music with my friends. I am currently working on learning the electric guitar but I also love sitting down
                    at my keyboard when I have time. I try and get out and see live concerts as well. I have been really enjoying the Boston music scene!
                    I also enjoy watching movies, taking care of my plants, and cooking.
                </p>
            </div>
            
        </div>
    );
  }
  
  export default Profile