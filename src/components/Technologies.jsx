import React from "react";
import Button from "./Button";

function Tech() {
  return (
    <div className="techPage" id="tech">
      <h1>Technologies</h1>
      <p className="aboutMe">
        <u>What Technologies do I use?</u>
      </p>
      <div className="tech">
        <div className="tech1">
          <h2>
            These are the Technoligies I leverage on to provide cost-effective
            and reliable software products
          </h2>
          <p className="aboutBtn">
            Click the button below to see some of my projects
          </p>
          <div className="aboutBtn">
            <Button name="Projects" value="#projects" />
          </div>
        </div>
        <div className="tech2">
          <div className="skill-container">
            <div className="skill-name">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>

          <div className="skill-container">
            <div className="skill-name">
              <span>CSS</span>
              <span>85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>

          <div className="skill-container">
            <div className="skill-name">
              <span>JavaScript</span>
              <span>75%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>

          <div className="skill-container">
            <div className="skill-name">
              <span>React</span>
              <span>70%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>

          <div className="skill-container">
            <div className="skill-name">
              <span>Python</span>
              <span>40%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "40%" }}>
                40%
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="skill-name">
              <span>Node Js</span>
              <span>70%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="skill-name">
              <span>PostgreSQL</span>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
