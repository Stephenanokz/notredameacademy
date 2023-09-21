import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contactTitle">
        <span className="title">Contact Us</span>
        <span className="subTitle">
          For enquiries and more information about us, please reach out to us
        </span>
      </div>
      <div className="form">
        <form>
          <span className="title">Get in touch</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className="map"></div>
      <Link to="/contact">
        <button>
          More ways to contact us <ArrowCircleRightIcon className="icon" />{" "}
        </button>
      </Link>
    </div>
  );
};

export default Contact;
