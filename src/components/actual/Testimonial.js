import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import userPic1 from '../../images/slider1.jpg';
import userPic2 from '../../images/slider1.jpg';
import userPic3 from '../../images/slider1.jpg';
import styles from '../../css/myfile.module.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Web Developer',
      comment: 'Pellentesque nec leo est. Morbi non enim eu erat varius consequat id at erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed laoreet tortor risus.',
      image: userPic1,
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      comment: 'Pellentesque nec leo est. Morbi non enim eu erat varius consequat id at erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed laoreet tortor risus.',
      image: userPic2,
    },
    {
      name: 'Mike Johnson',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
    {
      name: 'AAA',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
    {
      name: 'BBB',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },
    {
      name: 'CCC',
      role: 'Marketing Specialist',
      comment: 'Suspendisse vitae mi eu urna tincidunt tincidunt. Ut vitae purus sem. Curabitur convallis sapien et mi lacinia, in dictum est aliquam. Fusce vel elementum nisl, a consectetur nibh.',
      image: userPic3,
    },

  ];

  const [viewportSize, setViewportSize] = useState('');
  const [height, setHeight] = useState('');
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 576) {
        setViewportSize('xs'); // Extra small devices (phones)
        setHeight('300px')
      } else if (windowWidth <= 768) {
        setViewportSize('sm'); // Small devices (tablets)
        setHeight('300px')
      } else if (windowWidth <= 992) {
        setViewportSize('md'); // Medium devices (landscape tablets)
        setHeight('150px')
      } else if (windowWidth <= 1200) {
        setViewportSize('lg'); // Large devices (desktops)
        setHeight('250px')
      } else if (windowWidth > 1200) {
        setViewportSize('xl'); // Extra large devices (large desktops)
        setHeight('300px')
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let carouselOptions = {};
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [isSlidingIn, setIsSlidingIn] = useState(true);
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const handleSlideChange = (index) => {
    if (isSlidingIn) {
      setIsSlidingIn(false);
    } else {
      setCurrentSlide(index);
      setIsSlidingIn(true);
    }
  };

  const handleSwipeEnd = () => {
    setIsSlidingIn(true);
  };

  switch (viewportSize) {
    case 'xs':
    case 'sm':
    case 'md':
      carouselOptions = {
        showArrows: false,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        centerMode: true,
        centerSlidePercentage: 100,
        transitionTime: 500,
        interval: 4000,
        selectedItem: currentSlide,
        onChange: handleSlideChange,
        onSwipeEnd: handleSwipeEnd,
      };
      break;

    default:
      carouselOptions = {
        showArrows: false,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        centerMode: true,
        centerSlidePercentage: 33.33,
        transitionTime: 500,
        interval: 4000,
        selectedItem: currentSlide,
        onChange: handleSlideChange,
        onSwipeEnd: handleSwipeEnd,
      };
      break;
  }

  return (
    <div className={`container ${styles.testimonialSection}`}>
      <h2 className={`text-center ${styles.sectionTitle}`}>Customer Reviews</h2>
      <Carousel {...carouselOptions}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.testimonialItem} ${currentSlide === index ? styles.selected : ''} mb-5`}
          >
            <div className={`${styles.testimonialContent} ${currentSlide === index ? styles.activeTestimonial : ''}`}>
              <div className={styles.testimonialStarsImageContainer}>

                <div className={`${styles.testimonialImageContainer}`}> {/* Image */}
                  <img src={testimonial.image} alt="User" width={"40px"} className={styles.testimonialImage} style={{ height: height }} />
                </div>
                <div className={`${styles.testimonialStarsContainer} mt-3`}>
                  <div className={styles.testimonialStars}>

                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                    <FontAwesomeIcon icon={faStar} className={styles.starIcon} />

                  </div>
                </div>
              </div>
              <div className={styles.testimonialTextContainer}>
                <div className={styles.testimonialName}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                <div className={styles.testimonialComment}>
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Testimonial;