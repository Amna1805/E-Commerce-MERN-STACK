import styles from '../../css/myfile.module.css'; 
import TextTransition, { presets } from 'react-text-transition';
import { useState,useEffect } from 'react';
const TEXTS = ['Free Shipping on Orders Above Rs 3000', 'Pakistan No.1 Online Store'];
const Header1Component = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
     <div className={`text-white text-center py-2 ${styles.header}`}>
      <TextTransition className="m-0 d-flex justify-content-center" springConfig={presets.wobbly}><strong>{TEXTS[index % TEXTS.length]}</strong></TextTransition>
    </div>
  );
};

export default Header1Component;