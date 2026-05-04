import React from 'react';
import styles from '../styles/Services.module.css';

const Services = () => {
  const services = [
    {
      name: 'Birthday Celebrations',
      description: 'Make birthdays special with our custom birthday cakes. Choose from classic flavors or create your own unique design. Perfect for all ages with personalized decorations.',
      image: 'https://via.placeholder.com/300x200?text=Birthday+Cake'
    },
    {
      name: 'Wedding & Engagement',
      description: 'Celebrate your special day with our elegant wedding cakes. Multi-tier designs, custom flavors, and beautiful decorations to match your wedding theme perfectly.',
      image: 'https://via.placeholder.com/300x200?text=Wedding+Cake'
    },
    {
      name: 'Custom Creations',
      description: 'Bring your imagination to life. Custom-designed cakes for corporate events, anniversaries, or any celebration. Hand-crafted details and premium quality guaranteed.',
      image: 'https://via.placeholder.com/300x200?text=Custom+Cake'
    }
  ];

  return (
    <div className={`${styles.servicesSection} container-fluid px-5 mt-5`}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleSubtitle}>Our Services</h2>
          <h1 className={styles.sectionTitleMain}>Delicious Cake Services</h1>
        </div>

        <div className={styles.servicesGrid}>
          {/* Service Cards */}
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.name} />
              </div>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <a href="#">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Offer Section */}
        <div className={styles.offerSection}>
          <h1>30% Discount For This Summer</h1>
          <div className={styles.offerButtons}>
            <button className={`${styles.offerBtn} ${styles.offerBtnPrimary}`}>Shop Now</button>
            <button className={`${styles.offerBtn} ${styles.offerBtnDark}`}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
