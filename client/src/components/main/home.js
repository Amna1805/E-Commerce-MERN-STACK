import CategoriesComponent from '../actual/CategoriesList';
import Footer from '../actual/Footer';
import Header from '../actual/Header';
import Main1 from '../actual/Main1';
import styles from '../../css/myfile.module.css';
import { FaArrowUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Card from '../actual/Card'
export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show the arrow when scrolling down, hide when at the top
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Main1 />
      {/* <CategoriesComponent /> */}
      {showArrow && (
        <div className={`${styles.Upward}`} onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      )}
      {/* <Card /> */}
      <Footer />
    </div>
  );
}
