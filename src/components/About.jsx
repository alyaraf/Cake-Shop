import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={`${styles.aboutContainer} container-fluid pt-5`}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleSubtitle}>About Us</h2>
          <h1 className={styles.sectionTitleMain}>Welcome To CakeZone</h1>
        </div>

        {/* Content */}
        <div className={`row gx-5 ${styles.aboutContent}`}>
          {/* Image */}
          <div className={`col-lg-5 mb-5 mb-lg-0 ${styles.aboutImage}`}>
            <img
              src="https://via.placeholder.com/400x400?text=About+CakeZone"
              alt="About CakeZone"
            />
          </div>

          {/* Text Content */}
          <div className="col-lg-6 pb-5">
            <div className={styles.aboutText}>
              <h4>
                Crafting Delicious Memories Since 2010
              </h4>
              <p>
                At CakeZone, we believe that every celebration deserves a special touch. For over a decade, we've been dedicated to creating custom cakes that not only look stunning but taste absolutely delicious. We use only the finest ingredients, combining traditional baking techniques with modern creativity to deliver cakes that leave lasting impressions.
              </p>

              {/* Features Grid */}
              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <i className="fa fa-leaf"></i>
                  </div>
                  <div>
                    <h4 className={styles.featureName}>Fresh & Natural</h4>
                    <p className={styles.featureDescription}>
                      We use premium quality, natural ingredients without artificial preservatives or flavors to ensure the best taste and quality.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <i className="fa fa-trophy"></i>
                  </div>
                  <div>
                    <h4 className={styles.featureName}>Award Winning</h4>
                    <p className={styles.featureDescription}>
                      Multiple award winner at international cake competitions. Our commitment to excellence is recognized worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
