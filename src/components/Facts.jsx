import React from 'react';
import { useCountUp } from '../hooks/useCustomHooks';
import styles from '../styles/Facts.module.css';

const Facts = () => {
  const experience = useCountUp(12345, 2000);
  const specialists = useCountUp(12345, 2000);
  const projects = useCountUp(12345, 2000);
  const clients = useCountUp(12345, 2000);

  const factItems = [
    { label: 'Our Experience', icon: 'fa fa-star', count: experience },
    { label: 'Cake Specialist', icon: 'fa fa-users', count: specialists },
    { label: 'Complete Project', icon: 'fa fa-check', count: projects },
    { label: 'Happy Clients', icon: 'fa fa-mug-hot', count: clients }
  ];

  return (
    <div className={`${styles.factsContainer} container-fluid py-5 mb-5`}>
      <div className="container py-5">
        <div className={styles.factsGrid}>
          {factItems.map((item, index) => (
            <div key={index} className={styles.factItem} ref={item.count.ref}>
              <div className={styles.factIcon}>
                <i className={item.icon}></i>
              </div>
              <div className={styles.factContent}>
                <h6 className={styles.factLabel}>{item.label}</h6>
                <h1 className={styles.factNumber}>{item.count.count.toLocaleString()}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
