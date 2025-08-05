import React from "react";
import Button from "./Button";

// Intro page

function Intro() {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);

  let greeting;

  if (hour < 13) {
    greeting = "Good Morning";
  } else if (hour < 16) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="intro " id="home">
      <div className="h3 item">Hello {greeting}, my name is</div>
      <div className="h1 item">IZUCHUKWU</div>
      <div className="h2 item">
        And I'm a <span className="title">Software Developer</span>
      </div>

      <Button class="btn itemButton" name="About me" value="#about" />
    </div>
  );
}

export default Intro;
