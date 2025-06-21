import React from "react";
import "../contact.css";
import Button from "./Button";
import {
  User,
  MapPinHouse,
  MailPlus,
  Linkedin,
  Instagram,
  Download,
  X,
} from "lucide-react";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p className="aboutMe">
        <u>You want to book an appointment?</u>
      </p>
      <div className="contact">
        <div className="contactSide1">
          <h3>Contact me</h3>
          <p>Get in touch with me for an appointment and questions</p>
          <div className="contactIcon">
            <div className="icon">
              <User />
            </div>
            <h5>
              {" "}
              <span>Name</span>
              <br />
              Nwali Izuchukwu Hosea
            </h5>
          </div>
          <div className="contactIcon">
            <div className="icon">
              <MapPinHouse />
            </div>
            <h5>
              {" "}
              <span>Address</span>
              <br />
              FUTO Road Eziobodo ,Owerri, Imo state.
            </h5>
          </div>
          <div className="contactIcon">
            <div className="icon">
              <MailPlus />
            </div>
            <div>
              <h5>
                <span>Email</span>
                <br />
                izuchukwunwali09@gmail.com
              </h5>
            </div>
          </div>
        </div>
        <div className="contactSide2">
          <h3>Message me</h3>
          <Button name="WhatsApp" value="https://wa.me/09017055095" />
          <ul>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/nwali-izuchukwu-hosea"
                target="_blank"
                style={{ color: "#000" }}
              >
                <Linkedin style={{ margin: "-6px 10px" }} /> linkedin
              </a>
            </li>
            <li>
              <a
                href="https://x.com/IzuGodN1"
                target="_blank"
                style={{ color: "#000" }}
              >
                <X style={{ margin: "-6px 10px" }} /> X
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iam_izuchukwu_?igsh=czhnMDM0MDhncDd0"
                target="_blank"
                style={{ color: "#000" }}
              >
                <Instagram style={{ margin: "-6px 10px" }} /> instagram
              </a>
            </li>
            <li>
              <a href="/My Resume (2).pdf" download style={{ color: "#000" }}>
                <Download style={{ margin: "-6px 10px" }} /> Download my resume
                here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
