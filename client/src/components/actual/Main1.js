import React, { useState, useEffect } from 'react';
import styles from '../../css/myfile.module.css';
import Slider from './Slider';
import {
  FaShoppingBasket,
  FaMedkit,
  FaTshirt,
  FaFemale,
  FaBabyCarriage,
  FaHome,
  FaMobileAlt,
  FaHeadphones,
  FaTv,
  FaBicycle,
  FaWatchmanMonitoring,
  FaCar,
} from 'react-icons/fa';
import { Link } from "react-router-dom";

function Main1() {
  const [categories, setCategories] = useState([]);

  // Icon map for category names
  const categoryIcons = {
    'Groceries & Pets': <FaShoppingBasket />,
    'Health & Beauty': <FaMedkit />,
    "Men's Fashion": <FaTshirt />,
    "Women's Fashion": <FaFemale />,
    'Mother & Baby': <FaBabyCarriage />,
    'Home & Lifestyle': <FaHome />,
    'Electronic Devices': <FaMobileAlt />,
    'Electronic Accessories': <FaHeadphones />,
    'Watches, Bags & Jewellery': <FaWatchmanMonitoring />,
    'Automotive & Motorbike': <FaCar />
  };

  useEffect(() => {
    fetch('https://localhost:7034/api/Category/categories')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Categories:', data); // <-- 👈 Add this
        setCategories(data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);


  return (
    <div className={`container ${styles.wrapper}`}>
      {/* Row for both columns */}
      <div className={`row ${styles.row}`}>
        {/* Left Column */}
        <div className={`col-md-3 ${styles.leftColumn}`}>
          <div className={styles.roundedContainer}>
            <div className={styles.categoriesContainer}>
              {categories.map((category) => (
                <div key={category.categoryID} className={styles.categoryItem}>
                  <Link
                    to={`/category/${category.categoryID}`}
                    className={styles.catlink}
                  >
                    <div className='row'>
                      <div className='col-md-2'>
                        {categoryIcons[category.categoryName] || <FaTv />} {/* fallback icon */}
                      </div>
                      <div className='col-md-10'>
                        <p>{category.categoryName}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={`col-md-9 ${styles.rightColumn}`}>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Main1;
