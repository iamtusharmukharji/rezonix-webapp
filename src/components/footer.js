import React from "react";
import "./carousal.css";
import fb from "./images/fb.png"
import insta from "./images/insta.png"
import phone from "./images/phone.png"
import location from "./images/location.png"
import youtube from "./images/youtube.png"
import twitter from "./images/twitter.png"
import amazonLogo from './amazonLogo.png'; // Adjust the path based on your project structure
import flipkartLogo from './flipkartLogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Contact Us</h4>
        <p>Plot no. 9, 4 Bay, Institutional Area, Sector 32,<br />Gurugram, Haryana 122003</p>
        <p>Email: business@rezonix.com</p>
        <p>Phone: +91 8853159576</p>
        <a href="#" className="social-icon"><img src={fb} height={30} width={30}/></a> 
        <a href="#" className="social-icon"><img src={insta} height={30} width={30}/></a> 
        <a href="#" className="social-icon"><img src={twitter} height={30} width={30}/></a> 
        <a href="#" className="social-icon"><img src={youtube} height={30} width={30}/></a> 


      </div>
      
      {/* <div className="social-media">
        <h4>Discover Us on trusted E-Commerce Sites of India</h4>
        <div className="social-icons">
          <a href="#" className="social-icon"><img src={amazonLogo} height={30} width={30}/></a> 
          <a href="#" className="social-icon"><img src={flipkartLogo} height={30} width={30}/></a>
        </div>
      </div> */}
      <div className="about-section">
        {/* <h3>Rezonix</h3>
        <p>At Rezonix, we specialize in designing cutting-edge switches that transform your home into a smart living space.<br />Whether you’re looking to enhance convenience, security, or energy efficiency, Rezonix is your trusted partner in creating a modern and automated home.</p> */}
         <h4>Discover Us on trusted E-Commerce Sites of India</h4>
        <div className="social-icons">
          <a href="#" className="social-icon"><img src={amazonLogo} height={30} width={30}/></a> {/* Replace with social media icons */}
          <a href="#" className="social-icon"><img src={flipkartLogo} height={30} width={30}/></a>
        </div>
      </div>
      
      <div className="copyright">
        <p>Copyright &copy; 2024 Rezonix India Pvt Ltd. <br />All Rights Reserved.</p>
      </div>

      
    </footer>
  );
}

export default Footer;
