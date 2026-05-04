import React from 'react';
import styles from '../styles/Topbar.module.css';

const Topbar = () => {
  return (
    <div className={`${styles.topbar} container-fluid`}>
      <div className="container">
        <div className={`row gx-4 ${styles.topbarRow}`}>
          {/* Email Section */}
          <div className={`${styles.topbarCol} col-lg-4`}>
            <div className={styles.topbarItem}>
              <div className={styles.iconBox}>
                <i className="fa fa-envelope"></i>
              </div>
              <div className={styles.topbarText}>
                <span className={styles.label}>Email Us</span>
                <p>info@cakezone.com</p>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className={`${styles.topbarCol} ${styles.primaryLogo} col-lg-4`}>
            <div className={styles.topbarItem}>
              <a href="#home" className={styles.brandLink}>
                <i className="fa fa-birthday-cake"></i>
                <span>CakeZone</span>
              </a>
            </div>
          </div>

          {/* Phone Section */}
          <div className={`${styles.topbarCol} col-lg-4`}>
            <div className={styles.topbarItem}>
              <div className={styles.iconBox}>
                <i className="fa fa-phone"></i>
              </div>
              <div className={styles.topbarText}>
                <span className={styles.label}>Call Us</span>
                <p>+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
