import React from 'react';
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

  return (
    <div className={`container ${styles.wrapper}`}>
      {/* Row for both columns */}
      <div className={`row ${styles.row}`}>
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
