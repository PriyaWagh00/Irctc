import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>IRCTC Trains</h3>
          <ul>
            <li><a href="#">General Information</a></li>
            <li><a href="#">Important Information</a></li>
            <li><a href="#">Agents</a></li>
            <li><a href="#">Enquiries</a></li>
            <li><a href="#">How To</a></li>
            <li><a href="#">IRCTC Official App</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Advertise with us</h3>
          <ul>
            <li><a href="#">Refund Rules</a></li>
            <li><a href="#">Person With Disability Facilities</a></li>
            <li><a href="#">IRCTC eWallet</a></li>
            <li><a href="#">Avail Loyalty Benefits</a></li>
            <li><a href="#">IRCTC-iPAY Payment Gateway</a></li>
            <li><a href="#">IRCTC Zone</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>DMRC Ticket Booking</h3>
          <ul>
            <li><a href="#">For Newly Migrated Agents</a></li>
            <li><a href="#">Mobile Zone</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Ask Disha ChatBot</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IRCTC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
