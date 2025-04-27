import React, { useState, useEffect } from 'react';
import styles from '../../css/myfile.module.css';
import Category1Component from '../helper/Categories1Component';

function Categories() {
  const [viewportSize, setViewportSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
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

  let categoryWidth = '200px';
  let categoryHeight = categoryWidth;

  switch (viewportSize) {
    case 'xs':
      categoryWidth = '180px';
      categoryHeight = categoryWidth;
      break;
    case 'sm':
      categoryWidth = '150px';
      categoryHeight = categoryWidth;
      break;
    case 'md':
      categoryWidth = '150px';
      categoryHeight = categoryWidth;
      break;
    case 'lg':
      categoryWidth = '200px';
      categoryHeight = categoryWidth;
      break;

    default:
      categoryWidth = '300px';
      categoryHeight = categoryWidth;
      break;
  }

  return (
    <div className={`categories-container p-0 ${styles.categoriesContainer}`}>
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
        <div className={`col-lg-3 col-md-6 col-sm-6 col-6 ${styles.categoryColumn}`} style={{ width: categoryWidth }}>
          <Category1Component width={categoryWidth} height={categoryHeight} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
