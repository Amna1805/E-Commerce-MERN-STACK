// CategoryItem.js
import React from 'react';
import styles from '../../css/myfile.module.css'; // Make sure to import your CSS file

const CategoryItem = ({ name, icon }) => {
  return (
    <div className={`${styles.categoryItemContainer}`}>
      <div className={`${styles.categoryImage}`}>
        {icon}
      </div>
      <div className={`${styles.categoryText}`}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
