import React, { useState, useEffect } from 'react';
import Carousel from 'react-grid-carousel';
import Card1Component from '../helper/Card1Component';

export default function Gallery() {
  const [viewportSize, setViewportSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
        setViewportSize('xs'); // Extra small devices (phones)
      } else if (windowWidth <= 768) {
        setViewportSize('sm'); // Small devices (tablets)
      } else if (windowWidth <= 992) {
        setViewportSize('md'); // Medium devices (landscape tablets)
      } else if (windowWidth <= 1200) {
        setViewportSize('lg'); // Large devices (desktops)
      } else {
        setViewportSize('xl'); // Extra large devices (large desktops)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let numCols = 4;
  let cardWidth = "50%";

  switch (viewportSize) {
    case 'xs':
      numCols = 2;
      cardWidth = '50%';
      break;
    case 'sm':
      numCols = 2;
      cardWidth = '50%';
      break;
    case 'md':
      numCols = 3;
      cardWidth = '75%';
      break;
    case 'lg':
      numCols = 3;
      cardWidth = '75%';
      break;
    default:
      numCols = 4;
      cardWidth = '90%';
      break;
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
      <div className="d-flex align-items-center justify-content-between p-3 m-2">
        <h2>New Arrivals</h2>
        <button className="btn btn-link text-dark text-decoration-underline">
          View All
        </button>
      </div>

      <Carousel cols={numCols} rows={2} gap={10} loop>
        {[...Array(20)].map((_, index) => (
          <Carousel.Item key={index}>
            <Card1Component width={cardWidth} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
