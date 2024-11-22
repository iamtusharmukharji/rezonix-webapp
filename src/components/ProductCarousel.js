import React, { useState, useEffect, useRef } from "react";
import "./carousal.css";
import rezonixMainPage from './rezonixMainPage.jpg';
import imgs1 from './imgs1.jpg';
import imgs2 from './imgs2.jpg';
import Rezo_bck from './Rezo_bck.jpg';


function ProductCarousel() {
  const images = [rezonixMainPage, imgs1, imgs2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // When the transition ends, reset the position to avoid the jump effect
  const handleTransitionEnd = () => {
    if (currentIndex === images.length - 1) {
      setTimeout(() => {
        // Reset the position to the first image after transition ends
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(0)`;

        // Force reflow to apply the changes
        setTimeout(() => {
          carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 1000); // Small delay to wait for the end of the transition
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < images.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex; // Keep the index at the last image
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex; // Keep the index at the first image
    });
  };

  return (
    <section className="carousel">
    <div className="carousel-container">
      <div
        className="carousel-images"
        ref={carouselRef}
        style={{
          transform: `translateX(-${(currentIndex) * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.concat(images[0]).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>

    <div className="carousel-controls">
      <button onClick={prevImage} className="carousel-btn" disabled={currentIndex === 0}>❮</button>
      <button onClick={nextImage} className="carousel-btn" disabled={currentIndex === images.length - 1}>❯</button>
    </div>

  </section>
  );
};
export default ProductCarousel;
