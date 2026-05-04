import React, { useState } from 'react';
import styles from '../styles/Menu.module.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('birthday');

  const menuData = {
    birthday: [
      { name: 'Chocolate Dreams', price: '$45.00', description: 'Rich dark chocolate cake with fudgy frosting and chocolate shavings', image: 'https://via.placeholder.com/300x200?text=Chocolate+Dreams' },
      { name: 'Vanilla Bliss', price: '$40.00', description: 'Classic vanilla cake with butter cream frosting and sprinkles', image: 'https://via.placeholder.com/300x200?text=Vanilla+Bliss' },
      { name: 'Rainbow Party', price: '$50.00', description: 'Colorful layer cake with bright frosting and fun decorations', image: 'https://via.placeholder.com/300x200?text=Rainbow+Party' },
      { name: 'Strawberry Delight', price: '$48.00', description: 'Fresh strawberry cake with cream cheese frosting and real berries', image: 'https://via.placeholder.com/300x200?text=Strawberry+Delight' },
      { name: 'Cookies & Cream', price: '$46.00', description: 'Vanilla cake with crushed cookies and creamy frosting', image: 'https://via.placeholder.com/300x200?text=Cookies+Cream' },
      { name: 'Red Velvet Party', price: '$52.00', description: 'Elegant red velvet cake with cream cheese frosting', image: 'https://via.placeholder.com/300x200?text=Red+Velvet' }
    ],
    wedding: [
      { name: 'Classic Elegance', price: '$150.00', description: 'Traditional white cake with sophisticated pearl decorations and fresh flowers', image: 'https://via.placeholder.com/300x200?text=Classic+Elegance' },
      { name: 'Rose Romance', price: '$160.00', description: 'Champagne-infused cake with delicate rose buttercream', image: 'https://via.placeholder.com/300x200?text=Rose+Romance' },
      { name: 'Gold Luxury', price: '$180.00', description: 'Premium chocolate cake with gold leaf decorations and edible glitter', image: 'https://via.placeholder.com/300x200?text=Gold+Luxury' },
      { name: 'Garden Fresh', price: '$155.00', description: 'Lemon cake with fresh berries and natural flower arrangements', image: 'https://via.placeholder.com/300x200?text=Garden+Fresh' },
      { name: 'Silk & Satin', price: '$175.00', description: 'Three-tier cake with smooth satin finish and intricate piping work', image: 'https://via.placeholder.com/300x200?text=Silk+Satin' },
      { name: 'Royal Masterpiece', price: '$200.00', description: 'Four-tier custom design with premium ingredients and hand-crafted details', image: 'https://via.placeholder.com/300x200?text=Royal+Masterpiece' }
    ],
    custom: [
      { name: 'Your Design Dream', price: 'Quote', description: 'Fully customizable cake designed to match your exact vision and theme', image: 'https://via.placeholder.com/300x200?text=Custom+Design' },
      { name: 'Theme Magic', price: 'Quote', description: 'Character-based or themed cakes for movies, games, or special interests', image: 'https://via.placeholder.com/300x200?text=Theme+Magic' },
      { name: 'Sugar Art Masterpiece', price: 'Quote', description: 'Hand-sculpted sugar flowers, figurines, and artistic decorations', image: 'https://via.placeholder.com/300x200?text=Sugar+Art' },
      { name: 'Corporate Excellence', price: 'Quote', description: 'Professional cakes for corporate events with logo and branding', image: 'https://via.placeholder.com/300x200?text=Corporate+Cake' },
      { name: 'Flavor Fusion', price: 'Quote', description: 'Mix and match your favorite flavors with personalized filling combinations', image: 'https://via.placeholder.com/300x200?text=Flavor+Fusion' },
      { name: 'Limited Edition', price: 'Quote', description: 'Seasonal specialty flavors and exclusive custom creations', image: 'https://via.placeholder.com/300x200?text=Limited+Edition' }
    ]
  };

  return (
    <div className={`${styles.menuContainer} container-fluid py-5`}>
      <div className="container">
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleSubtitle}>Menu & Pricing</h2>
          <h1 className={styles.sectionTitleMain}>Explore Our Cakes</h1>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabButtons}>
          {['birthday', 'wedding', 'custom'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`${styles.tabContent} ${activeTab ? styles.active : ''}`}>
          <div className={styles.menuGrid}>
            {menuData[activeTab].map((item, index) => (
              <div key={index} className={styles.menuItem}>
                <div className={styles.menuImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.menuInfo}>
                  <h5 className={styles.menuName}>{item.name}</h5>
                  <p className={styles.menuDescription}>{item.description}</p>
                  <div className={styles.menuFooter}>
                    <span className={styles.menuPrice}>{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
