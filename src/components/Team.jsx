import React from 'react';
import styles from '../styles/Team.module.css';

const Team = () => {
  const team = [
    { name: 'Full Name', role: 'Designation', image: 'https://via.placeholder.com/400x300?text=Chef+1' },
    { name: 'Full Name', role: 'Designation', image: 'https://via.placeholder.com/400x300?text=Chef+2' },
    { name: 'Full Name', role: 'Designation', image: 'https://via.placeholder.com/400x300?text=Chef+3' }
  ];

  return (
    <div className={`${styles.teamContainer} container-fluid py-5`}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleSubtitle}>Team Members</h2>
          <h1 className={styles.sectionTitleMain}>Our Master Chefs</h1>
        </div>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {team.map((chef, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.teamImageContainer}>
                <img src={chef.image} alt={chef.name} />
                <div className={styles.teamOverlay}>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className={styles.teamInfo}>
                <h4 className={styles.teamName}>{chef.name}</h4>
                <p className={styles.teamRole}>{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
