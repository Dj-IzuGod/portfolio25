import React from "react";
import "../contact.css";
import Button from "./Button";
import {
  User,
  MapPinHouse,
  MailPlus,
  Linkedin,
  Instagram,
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
          <Button name="WhatsApp" />
          <ul>
            <li>
              {" "}
              <Linkedin style={{ margin: "-6px 10px" }} /> linkedin
            </li>
            <li>
              <X style={{ margin: "-6px 10px" }} /> X
            </li>
            <li>
              <Instagram style={{ margin: "-6px 10px" }} /> instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
