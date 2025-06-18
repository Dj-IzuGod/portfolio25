import React from "react";
import "../Header.css";

function Header() {
  return (
    <header className="navbar">
      <h1>Portfolio</h1>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#tech">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <!-- Mobile Hamburger Menu (CSS-only toggle) --> */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label for="menu-toggle" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* <!-- Mobile Menu --> */}
      <nav class="mobile-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
