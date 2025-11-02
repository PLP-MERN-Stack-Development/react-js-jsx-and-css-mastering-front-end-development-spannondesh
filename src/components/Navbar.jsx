import React from 'react';
import './navbar.css';

/**
 * Navbar Component
 * 
 * This component creates a responsive navigation bar for the Todo application.
 * It includes:
 * - A brand/logo section
 * - Navigation links for different sections of the app
 * - Responsive design that adapts to different screen sizes
 * 
 * @returns {JSX.Element} A navigation bar component
 */
function Navbar() {
  return (
    // Main navigation container with styling defined in navbar.css
    <nav className="navbar">
      {/* Brand section containing the app title */}
      <div className="navbar-brand">
        <h1>Todo App</h1>
      </div>
      
      {/* Navigation links section */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#todos">Todos</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;