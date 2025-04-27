import { useParams } from 'react-router-dom';
import Footer from '../actual/Footer';
import Header from '../actual/Header';
import { FaArrowUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import CategoryProductComp from '../actual/CategoryProductComp';
import styles from '../../css/myfile.module.css';

export default function CategoryProducts() {
  const { categoryID } = useParams(); // Extract categoryID from URL
  const [showArrow, setShowArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if categoryID is being extracted
  console.log("Extracted Category ID:", categoryID);

  return (
    <div>
      <Header />
      {/* Pass categoryID to CategoryProductComp */}
      <CategoryProductComp categoryID={categoryID} />
      {showArrow && (
        <div className={`${styles.Upward}`} onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      )}
      <Footer />
    </div>
  );
}
