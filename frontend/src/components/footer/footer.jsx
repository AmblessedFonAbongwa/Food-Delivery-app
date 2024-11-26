import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>We aim at bringing your memories to life with the delicious taste of our dishes made from Africa's finest and traditional ingredients</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
           <a href="#navbar"> <li>Home</li></a>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+237-670-636-107 </li>
            <li>fonbaise@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
     <p className="footer-copyright">Copyright 2024 &copy; Amblessed.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
