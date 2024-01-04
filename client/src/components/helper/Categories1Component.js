import React from 'react';
import styles from '../../css/myfile.module.css';
import slider2 from '../../images/slider2.jpg';

function Category1Component({ width, height }) {
  const circleStyle = {
    width: width,
    height: height,
    borderRadius: '50%',
    overflow: 'hidden',
  };

  return (
    <div className={`category-item  ${styles.categoryItem}`}>
      <div className={`category-circle ${styles.categoryCircle}`} style={circleStyle}>
        <img src={slider2} alt="Category" className={`category-image ${styles.categoryImage}`} />
      </div>
      <div className={`category-title ${styles.categoryTitle}`}>
        Category
      </div>
    </div>
  );
}

export default Category1Component;
