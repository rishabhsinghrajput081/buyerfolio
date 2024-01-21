import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const images = [
    "/Mask group.png",
    "/kitchen.png",
    "/Rectangle.png"
    // Remove "/garden.png"
    // Add more image URLs as needed
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-gallery">
      <button className="nav-button" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`large-image ${index === currentImageIndex ? 'visible' : 'hidden'}`}
        />
      ))}
      <button className="nav-button" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ImageGallery;
