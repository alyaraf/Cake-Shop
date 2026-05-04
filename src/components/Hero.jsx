import React, { useState } from 'react';
import styles from '../styles/Hero.module.css';
import VideoModal from './VideoModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleExplore = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-8">
              <div className={styles.heroContent}>
                <h2 className={styles.heroSubtitle}>Welcome to</h2>
                <h1 className={styles.heroTitle}>CakeZone</h1>
                <p className={styles.heroSubtitle2}>Handcrafted Cakes Made with Love & Quality</p>

                <div className={styles.heroActions}>
                  <button className={styles.heroBtn} onClick={handleExplore}>Explore Menu</button>
                  <button
                    className={styles.playBtn}
                    onClick={() => setShowModal(true)}
                    aria-label="Play video"
                  ></button>
                  <span className={styles.playLabel}>Watch Our Story</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        show={showModal}
        onClose={() => setShowModal(false)}
        videoUrl="https://www.youtube.com/embed/DWRcNpR6Kdc"
      />
    </>
  );
};

export default Hero;
