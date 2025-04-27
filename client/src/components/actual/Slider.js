import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../images/slider1.jpg'
import slider3 from '../../images/slider2.png'
import slider4 from '../../images/slider3.jpg'
import styles from '../../css/myfile.module.css';
function Slider() {
    return (
        <div className={styles.carouselContainer}>
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            stopOnHover={false}
            infiniteLoop={false}
            autoPlay={false}
            swipeable={true}
            dynamicHeight={true}
            interval={2000}
            className={styles.customCarousel} 
          >
            <div>
              <img src={slider4} alt="Slide 1"  className={styles.sliderimage} />
            </div>
            <div>
              <img src={slider3} alt="Slide 2"  className={styles.sliderimage} />
            </div>
            <div>
              <img src={slider4} alt="Slide 3"  className={styles.sliderimage} />
            </div>
          </Carousel>
        </div>
      );
}
export default Slider