import React from "react";
import Button from "./Button";
// import { Minus } from "lucide-react";

function About() {
  return (
    <div className="aboutPage" id="about">
      <h1 className="aboutMe">About me</h1>
      <p className="aboutMe">
        <u>Who am I?</u>
      </p>
      <div className="about">
        <div className="photo">
          <img src="/public/images/GP-pics copy.webp" alt="Profile picture" />
        </div>
        <div className="bio">
          <h2>I am Nwali Izuchukwu Hosea</h2>
          <p>
            I am a software developer with expertise in React.js (frontend) and
            Node.js (backend), dedicated to engineering scalable,
            high-performance web applications. <br /> <br />
            I thrive in collaborative environments, building intuitive user
            interfaces that align with business goals. <br />
            <br /> I am currently studying Software Engineering at the Federal
            University of Technology Owerri.
          </p>
          <div className="aboutBtn">
            <Button name="My Skills" value="#skills" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
