import React from 'react';
import './footer.css';

/**
 * Footer Component
 * 
 * A comprehensive footer component that provides additional information
 * and navigation options. It's organized into three main sections:
 * - About Us: Brief description of the application
 * - Quick Links: Navigation shortcuts
 * - Contact Info: Ways to reach out
 * 
 * The component also includes a copyright notice at the bottom.
 * 
 * @returns {JSX.Element} A footer component with multiple information sections
 */
function Footer() {
  return (
    // Main footer container
    <footer className="footer">
      {/* Grid container for the three main sections */}
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>A simple and efficient todo app to manage your daily tasks.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#todos">Todos</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@todoapp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;