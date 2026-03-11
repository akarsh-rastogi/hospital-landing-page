import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="medi">Medi</span>
        <span className="care">Care+</span>
      </div>

    
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`nav-right ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>News</li>
        </ul>
        <button className="contact-btn">Contact</button>
      </div>
    </nav>
  );
};
// 34567890-
export default Navbar;
