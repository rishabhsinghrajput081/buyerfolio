// App.js
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from './ImageGallery';
import Map from './map';
import PropertyDetails from './PropertyDetails';


function App() {
  const handleLastImageClick = () => {
    window.open('https://play.google.com/store/games?hl=en&gl=US&pli=1', '_blank');
  };

  const handleSliderChange = (value, sliderType) => {
    console.log(`${sliderType} changed:`, value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Buyer Folio</h1>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faBell} className="notification-icon" />
        </div>
      </header>
      <ImageGallery />
      
      <Map className="small-map" />
      <h4 className="left-aligned-heading">Overview</h4>
      <p className="left-aligned-heading">
        Great renovation opportunity for this 3 bedroom, 1 bath home on a fenced lot.<br />
        Terrazzo floors throughout, original kitchen and bathroom, indoor laundry,<br />
        workshop, spacious backyard, impact windows, carport. Close to Larry and Penny<br />
        Thompson Memorial Park and Campground and Zoo Miami.
      </p>

      <img
        src="/Higlights.png"
        alt="Highlights"
        className="custom-image"
      />
      <PropertyDetails />
      <div className="larger-map-container">
        <Map className="custom-map" />
      </div>


      <img
        src="/Lastimage.png"
        alt="lastimage"
        className="last-image"
        style={{ cursor: 'pointer' }}
        onClick={handleLastImageClick}
      />
    </div>
  );
}

export default App;
