import React, { useState, useEffect } from 'react';
import styles from '../../css/myfile.module.css';
import Category1Component from '../helper/Categories1Component';

function Productcategories({ width }) {
  const [viewportSize, setViewportSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 450) {
        setViewportSize('xxs');
      }
      else if (windowWidth <= 576) {
        setViewportSize('xs'); // Extra small devices (phones)
      } else if (windowWidth <= 768) {
        setViewportSize('sm'); // Small devices (tablets)
      } else if (windowWidth <= 992) {
        setViewportSize('md'); // Medium devices (landscape tablets)
      } else if (windowWidth <= 1200) {
        setViewportSize('lg'); // Large devices (desktops)
      } else if (windowWidth > 1200) {
        setViewportSize('xl'); // Extra large devices (large desktops)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let categoryWidth = width;
  let categoryHeight = categoryWidth;

  switch (viewportSize) {
    case 'xxs':
      categoryWidth = '100px';
      categoryHeight = categoryWidth;
      break;
    case 'xs':
      categoryWidth = '150px';
      categoryHeight = categoryWidth;
      break;
    case 'sm':
      categoryWidth = '200px';
      categoryHeight = categoryWidth;
      break;
    case 'md':
      categoryWidth = '180px';
      categoryHeight = categoryWidth;
      break;
    case 'lg':
      categoryWidth = '250px';
      categoryHeight = categoryWidth;
      break;

    default:
      categoryWidth = categoryWidth;
      categoryHeight = categoryWidth;
      break;
  }

  return (
    <div className={`${styles.ProductcategoriesContainer}`}>
      <div className={`${styles.categoriesRow}`}>
        <div className={`col-lg-3 col-md-6 col-sm-6 col-6 ${styles.categoryColumn}`} style={{ width: categoryWidth }}>
          <Category1Component width={categoryWidth} height={categoryHeight} />
        </div>
        <div className={`col-lg-3 col-md-6 col-sm-6 col-6 ${styles.categoryColumn}`} style={{ width: categoryWidth }}>
          <Category1Component width={categoryWidth} height={categoryHeight} />
        </div>
        <div className={`col-lg-3 col-md-6 col-sm-6 col-6 ${styles.categoryColumn}`} style={{ width: categoryWidth }}>
          <Category1Component width={categoryWidth} height={categoryHeight} />
        </div>

      </div>
    </div>
  );
}

export default Productcategories;
