import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <a href="/" className={styles.footerBrandTitle}>
              <h1>
                <i className={styles.footerIcon}>🎂</i>
                CakeZone
              </h1>
            </a>
            <p className={styles.footerBrandText}>
              Premium cakes and pastries crafted with passion and the finest ingredients for your special moments.
            </p>
          </div>

          {/* Footer Content */}
          <div className={styles.footerContent}>
            {/* Get In Touch */}
            <div className={styles.footerColumn}>
              <h4>Get In Touch</h4>
              <div className={styles.contactItem}>
                <i className={`${styles.contactIcon} bi bi-geo-alt`}></i>
                <p className={styles.contactText}>123 Street, New York, USA</p>
              </div>
              <div className={styles.contactItem}>
                <i className={`${styles.contactIcon} bi bi-envelope-open`}></i>
                <p className={styles.contactText}>info@example.com</p>
              </div>
              <div className={styles.contactItem}>
                <i className={`${styles.contactIcon} bi bi-telephone`}></i>
                <p className={styles.contactText}>+012 345 67890</p>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialBtn}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={styles.socialBtn}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles.socialBtn}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h4>Quick Links</h4>
              <a href="/" className={styles.footerLink}>
                <i className="bi bi-arrow-right"></i>
                Home
              </a>
              <a href="/about" className={styles.footerLink}>
                <i className="bi bi-arrow-right"></i>
                About Us
              </a>
              <a href="/service" className={styles.footerLink}>
                <i className="bi bi-arrow-right"></i>
                Our Services
              </a>
              <a href="/team" className={styles.footerLink}>
                <i className="bi bi-arrow-right"></i>
                Meet The Team
              </a>
              <a href="/blog" className={styles.footerLink}>
                <i className="bi bi-arrow-right"></i>
                Latest Blog
              </a>
              <a href="/contact" className={styles.footerLink}>
                <i className="bi bi-arrow-right"></i>
                Contact Us
              </a>
            </div>

            {/* Newsletter */}
            <div className={styles.footerColumn}>
              <h4>Newsletter</h4>
              <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p className="mb-0">
          &copy; {currentYear} CakeZone. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
