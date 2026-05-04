import React, { useState } from 'react';
import { useStickyNav } from '../hooks/useCustomHooks';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const isSticky = useStickyNav();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      <div className="container-fluid px-3 px-lg-0">
        {/* Mobile Brand */}
        <a href="#home" className={`${styles.navbarBrand} d-block d-lg-none`} onClick={handleNavClick}>
          <i className={`${styles.navIcon} fa fa-birthday-cake`}></i>
          CakeZone
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
          <ul className={`navbar-nav ms-auto mx-lg-auto py-0 ${styles.navLinks}`}>
            <li className="nav-item">
              <a href="#home" className={`${styles.navLink} active`} onClick={handleNavClick}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={styles.navLink} onClick={handleNavClick}>About Us</a>
            </li>
            <li className="nav-item">
              <a href="#menu" className={styles.navLink} onClick={handleNavClick}>Menu & Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#team" className={styles.navLink} onClick={handleNavClick}>Master Chefs</a>
            </li>
            <li className={`nav-item ${styles.dropdown}`}>
              <a href="#services" className={styles.navLink} onClick={handleNavClick}>Pages</a>
              <div className={styles.dropdownMenu}>
                <a href="#services" className={styles.dropdownItem} onClick={handleNavClick}>Our Service</a>
                <a href="#testimonials" className={styles.dropdownItem} onClick={handleNavClick}>Testimonial</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#contact" className={styles.navLink} onClick={handleNavClick}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
