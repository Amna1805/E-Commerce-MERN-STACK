// CategoriesComponent.js

import React, { useState, useEffect } from 'react';
import styles from '../../css/myfile.module.css'; // Make sure to import your CSS file
import img from '../../images/shampoo.png';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CategoriesComponent = () => {
  // Replace the following data with your category data
  const categories = [
    { name: 'Wireless Earbuds', image: img },
    { name: 'SmartWatches', image: img },
    { name: 'Moisturizer', image: img },
    { name: 'Shampoo', image: img },
    { name: 'Milk Powder', image: img },
    { name: 'Hoop Earings', image: img },
    { name: 'Oil', image: img },
    { name: 'FlashLights', image: img },
    { name: 'Drivers', image: img },
    { name: 'Casuals', image: img },
    { name: 'Socks and Tights', image: img },
    { name: 'Hair Accessories', image: img },
    { name: 'Organisers', image: img },
    { name: 'Watering Systems', image: img },
    { name: 'Card Holders', image: img },
    { name: 'Clocks', image: img },
  ];
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
     <h3 style={{ marginLeft: '100px' }}>Categories</h3>

    <div className={`${styles.newComponentWrapper}`}>
     
      <div className={`${styles.CategoriesContainer}`}>
        
      <div className={`${styles.UpwardArrow}`} onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
        <div className={`${styles.CategoriesRow}`}>
          {categories.map((category, index) => (
            <div key={index} className={`${styles.CategoryItem}`}>
               <Link to={"/category/product"}  className={styles.linkstyle}>
              <div className='row text-center'>
                <div className='col-md-12'>
                  <img src={category.image} alt={category.name} className={`${styles.CategoryImage}`} />
                </div>
              </div>
              <div className='row text-center'>
                <div className='col-md-12'>
                  <p className={`${styles.CategoryText}`}>{category.name}</p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </div>
    </div>
    
  );
};

export default CategoriesComponent;