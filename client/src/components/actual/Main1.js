<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> c8cade39e601dbf934e83902925eb54f91f784d3
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
<<<<<<< HEAD
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

=======
import { Link } from "react-router-dom"; 

function Main1() {
  const categories = [
    { name: 'Groceries & Pets', icon: <FaShoppingBasket /> },
    { name: 'Health & Beauty', icon: <FaMedkit /> },
    { name: "Men's Fashion", icon: <FaTshirt /> },
    { name: "Women's Fashion", icon: <FaFemale /> },
    { name: 'Mother & Baby', icon: <FaBabyCarriage /> },
    { name: 'Home & Lifestyle', icon: <FaHome /> },
    { name: 'Electronic Devices', icon: <FaMobileAlt /> },
    { name: 'Electronic Accessories', icon: <FaHeadphones /> },
    { name: 'Watches, Bags & Jewellery', icon: <FaWatchmanMonitoring /> },
    { name: 'Automotive & Motorbike', icon: <FaCar /> },
  ];
>>>>>>> c8cade39e601dbf934e83902925eb54f91f784d3

  return (
    <div className={`container ${styles.wrapper}`}>
      {/* Row for both columns */}
      <div className={`row ${styles.row}`}>
<<<<<<< HEAD
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
=======
      {/* Left Column */}
      <div className={`col-md-3 ${styles.leftColumn}`}>
          <div className={`${styles.roundedContainer}`}>
            <div className={styles.categoriesContainer}>
              {categories.map((category, index) => (
                <div key={index} className={styles.categoryItem}>
                    <Link to="/category/product" className={styles.catlink}>
                    <div className='row'>
                        <div className='col-md-2'>
                        {category.icon}
                        </div>
                        <div className='col-md-10'>
                        <p>{category.name}</p>
                        </div>
                    </div>
                    </Link>
>>>>>>> c8cade39e601dbf934e83902925eb54f91f784d3
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
