import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="footer-section">
    <div className="newsletter-box">
      <h2>Subscribe to Newsletter</h2>
      <p>We have a wide experience in experience design and strategy,</p>

      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Send Now</button>
      </div>
    </div>

    <div className="footer-bottom">
     <div className="logo">
        <span className="medi">Medi</span>
        <span className="care">Care+</span>
      </div>
      <nav className="footer-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">News</a>
      </nav>
    </div>

      
    <div className="footer-social">
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaGoogle /></a>
      <a href="#"><FaTwitter /></a>
    </div>

    <p className="footer-copy">©2026 - 011BQ</p>

  </footer>
);

export default Footer;
