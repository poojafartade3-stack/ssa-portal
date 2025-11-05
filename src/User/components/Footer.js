// Footer.js
import React from "react";
import "./css/Footer.css"; // make sure the CSS file path is correct

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: About */}
        <div className="footer-about">
          <h3>Success Science Academy</h3>
          <p>Building bright futures through quality education and guidance.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="Home.js">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><i className="fas fa-phone"></i> +91 70580 91185</p>
          <p><i className="fas fa-envelope"></i> academy.successnation@gmail.com</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/SuccessNationAcademy/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/success_science_academy?igsh=MXZhMTlnanNiYXpkcw==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCwy1crD0QdFF6uCW8sXVt0A" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2025 Success Science Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
