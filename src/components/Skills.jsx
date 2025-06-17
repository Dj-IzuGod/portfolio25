import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Brush, ChartLine, Presentation } from "lucide-react";

function Skills() {
  return (
    <div className="skillPage" id="skills">
      <h1>My Skills</h1>
      <p>
        <u>What do I Provide?</u>
      </p>
      <div className="skills">
        <div className="web-design">
          <div className="web-design-content">
            <Brush />
            <h2>Web design</h2>
            <h4>HTML, CSS and JavaScript</h4>
          </div>
        </div>
        <div className="web-design">
          <div className="web-design-content">
            <ChartLine />
            <h2>Web Development</h2>
            <h4>Python, React, Node.js and PostgreSQL</h4>
          </div>
        </div>
        <div className="web-design">
          <div className="web-design-content">
            <Presentation />
            <h2>Project Management</h2>
            <h4>Agile, Waterfall, Team collaboration and Communication</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
