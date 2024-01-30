// ImageGallery.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
          alt={`Image ${index + 1}`}
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
