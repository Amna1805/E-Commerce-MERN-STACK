import Footer from '../actual/Footer';
import Header from '../actual/Header';
import styles from '../../css/myfile.module.css';
import { FaArrowUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import SignupComp from '../actual/SignupComp';
export default function Signup() {
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
      <SignupComp/>
      {showArrow && (
        <div className={`${styles.Upward}`} onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      )}
      <Footer />
    </div>
  );
}
