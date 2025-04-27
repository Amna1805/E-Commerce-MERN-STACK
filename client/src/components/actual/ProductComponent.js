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
const ProductComp = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const images = [img1, img2, img3]; // Add more images as needed
  
    const [quantity, setQuantity] = useState(1);
    
      const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
      };
    
      const handleDecreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
        }
      };
    
      const handleBuyNow = () => {
        // Add logic for Buy Now button
        console.log('Buy Now clicked');
      };
    
      const handleAddToCart = () => {
        // Add logic for Add to Cart button
        console.log('Add to Cart clicked');
      };
    return (
      <div className={styles.productContainer}>
        <Row>
          <Col md={6}>
            <Carousel showArrows={true} onChange={(index) => setCurrentImage(index)} selectedItem={currentImage}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Product ${index + 1}`}
                   style={{ width: '100%', maxHeight: '100%' }}/>
                </div>
              ))}
            </Carousel>
          </Col>
          <Col md={6}>
          <div className={styles.productDescription}>
            <h2>Product Title</h2>
            <p>Product details and description go here.</p>
            <div className={styles.testimonialStars} style={{marginBottom:"20px"}}>

              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />

            </div>
            <p className={styles.price}>Rs. <span className={styles.redText}>195</span></p>
            <div className={styles.quantityContainer}>
              <Button variant="outline-dark" onClick={handleDecreaseQuantity}>-</Button>
              <span className={styles.quantity}>{quantity}</span>
              <Button variant="outline-dark" onClick={handleIncreaseQuantity}>+</Button>
            </div>
            <div className={styles.buttonContainer}>
              <button  onClick={handleBuyNow} className={styles.buyNowButton}>Buy Now</button>
              <button  onClick={handleAddToCart} className={styles.addToCartButton}>Add to Cart</button>
            </div>
          </div>
        </Col>
        </Row>
      </div>
    );
  };
  
  export default ProductComp;