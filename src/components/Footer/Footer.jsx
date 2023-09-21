import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div className="title">
            <img
              src="img/logo.png"
              alt="logo"
            />
            <span>Notre Dame Academy</span>
          </div>
          <div className="newsletter">
            <span>Subscribe to our Newsletter to get more of our updates</span>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <div className="title">
              <span>Quick Links</span>
            </div>
            <ul className="items">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/portal">Portal</Link>
              </li>
            </ul>
          </div>
          <div className="info">
            <div className="title">
              <span>Contact Info</span>
            </div>
            <div className="items">
              <div className="item">
                <span className="title">Address:</span>
                <span className="desc">Awkunanaw, Enugu.</span>
              </div>
              <div className="item">
                <span className="title">Email:</span>
                <span className="desc">Info@notredameacademyenugu.com</span>
              </div>
              <div className="item">
                <span className="title">Contact Us:</span>
                <span className="desc">07088887333, 08066665777</span>
              </div>
            </div>
            <div className="socials">
              <a href="" target="_blank">
                <FacebookRoundedIcon className="icon" />
              </a>
              <a href="" target="_blank">
                <InstagramIcon className="icon" />
              </a>
              <a href="" target="_blank">
                <TwitterIcon className="icon" />
              </a>
              <a href="" target="_blank">
                <WhatsAppIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span> &copy; 2023 Verbum . All Right Reserved</span>
        <span>Developed by Verbum Networks, Enugu.</span>
      </div>
    </div>
  );
};

export default Footer;
