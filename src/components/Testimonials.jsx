import React from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://via.placeholder.com/60x60?text=Sarah',
      text: 'CakeZone created the most beautiful and delicious wedding cake for our special day. The attention to detail was incredible and our guests couldn\'t stop raving about it!'
    },
    {
      name: 'Michael Chen',
      role: 'Event Planner',
      image: 'https://via.placeholder.com/60x60?text=Michael',
      text: 'I\'ve recommended CakeZone to all my clients. Their custom designs are always stunning and the quality is consistently exceptional. They\'re my go-to bakery!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mom',
      image: 'https://via.placeholder.com/60x60?text=Emily',
      text: 'My son\'s birthday cake was absolutely perfect! The chocolate flavor was rich and delicious, and the decorations were so creative. Thank you for making his day special!'
    },
    {
      name: 'David Thompson',
      role: 'CEO',
      image: 'https://via.placeholder.com/60x60?text=David',
      text: 'Professional service, premium quality, and outstanding taste. CakeZone catered our corporate event and made a lasting impression on our clients. Highly recommended!'
    }
  ];

  return (
    <div className={`${styles.testimonialContainer} container-fluid py-5`}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleSubtitle}>Testimonial</h2>
          <h1 className={styles.sectionTitleMain}>Our Clients Say!!!</h1>
        </div>

        {/* Testimonial Cards */}
        <div className={styles.testimonialCarousel}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialImage}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.testimonialAuthor}>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <span className={styles.testimonialRole}>{testimonial.role}</span>
                </div>
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
