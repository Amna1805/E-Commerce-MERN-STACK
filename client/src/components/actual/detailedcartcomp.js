// ProductComp.js

import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from '../../css/myfile.module.css'; // Adjust the path to your CSS module
import img1 from '../../images/slider1.jpg'; // Replace with your image sources
import img2 from '../../images/slider1.jpg';
import img3 from '../../images/slider1.jpg';
import { Carousel } from 'react-responsive-carousel';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartComponent from '../helper/CartComponent';
const DetailedCart = () => {

    return (
      <div className={styles.productContainer}>
     <CartComponent/>
      </div>
    );
  };
  
  export default DetailedCart;