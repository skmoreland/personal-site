import React from "react";
import profile_pic from "../../assets/images/profile-pic-2.png";

const Profile = () => {
  return (
    <div className="font-body space-y-8 lg:space-y-0 lg:flex lg:items-center lg:justify-center">
      <img
        src={profile_pic}
        alt="profile"
        className="min-w-[200px] w-1/4 mr-16 border-black border-8"
      />
      <div className="text-left lg:w-5/12">
        <h1 className="font-title text-4xl decoration-prime-red underline decoration-4 underline-offset-4">
          About Me
        </h1>
        <div className="text-xl">
          <br />
          <p>Welcome to my page!</p>
          <br />
          <p>
            My name is Sarah Moreland and I am a software engineer based in
            Boston. I'm currently working at Eustace Consulting. Since starting
            at the company, I quickly transitioned from an hourly contractor to
            a full-time software developer and CRM consultant. I've led multiple
            client projects and helped design full-scale CRM solutions to
            improve the internal and marketing performance of various companies.
            I frequently automate CRM processes using Apex and Salesforce flows.
            I have also developed custom lightning web components using
            Javascript, HTML, and CSS to create adaptable experience cloud
            sites. Currently I am helping develop Sparkgrid Software's Box
            Connector integration that allows Hubspot users to view their Box
            files directly in their Hubspot portal.
          </p>
          <br />
          <p>
            Outside of work, I enjoy working with modeling clay and making stop
            motion shorts. I also work part-time at a local independent theater
            where I am able to explore and share my interests in film.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
