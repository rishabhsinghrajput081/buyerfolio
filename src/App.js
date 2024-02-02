

import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from './Slider';



import {
  faSearch,
  faBell,
  faBed,
  faBathtub,
  faHome,
  faLocation,
  faWalking,
  faBicycle,
  faBus
} from '@fortawesome/free-solid-svg-icons';
import ImageGallery from './ImageGallery';
import Map from './map';
import PropertyDetails from './PropertyDetails';
import PropertyAllign from './PropertyAllign';

const propertyData = {
  price: '$525,000',
  bedrooms: 3,
  bathrooms: 1,
  area: '1186 sq ft',
  location: '6323 St, Jamestown, Toronto, CA',
  overview: `Great renovation opportunity for this 3 bedroom, 1 bath home on a fenced lot. Terrazzo floors throughout, original kitchen and bathroom, indoor laundry, workshop, spacious backyard, impact windows, carport. Close to Larry and Penny Thompson Memorial Park and Campground and Zoo Miami.`,
  walkScore: 88,
  bikeScore: 83,
  busScore: 70
};
const images = [
  "/Mask group.png",
  "/kitchen.png",
  "/Rectangle.png"
  
];




function App() {
  const [searchInput, setSearchInput] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleLastImageClick = () => {
    window.open('https://play.google.com/store/games?hl=en&gl=US&pli=1', '_blank');
  };

  const handleSliderChange = (value, sliderType) => {
    console.log(`${sliderType} changed:`, value);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setShowWarning(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const itemList = ['item1', 'item2', 'item3'];

    if (!itemList.includes(searchInput)) {
      setShowWarning(true);
    } else {
      console.log('Match found:', searchInput);
      setShowWarning(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Buyer Folio</h1>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
            />
          </form>
          <FontAwesomeIcon icon={faBell} className="notification-icon" />
        </div>
        {showWarning && <p style={{ color: 'red' }}>No match found!</p>}
      </header>
      <ImageGallery images={images} />

      <div className="price-heading">
        <div>
          <h4 className="colour">{propertyData.price}</h4>
          <p className="price">
            <FontAwesomeIcon icon={faBed} className="fa-icon" /> {propertyData.bedrooms}{' '}
            <FontAwesomeIcon icon={faBathtub} className="fa-icon" /> {propertyData.bathrooms}{' '}
            <FontAwesomeIcon icon={faHome} className="fa-icon" /> {propertyData.area}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocation} className="fa-icon" /> {propertyData.location}
          </p>
        </div>
      </div>

      <Map
       width="300"
       height="200"
       className="small-map"
       mapUrl="https://www.google.com/maps/embed?..."
       title="Custom Map Title"
       frameborder="0"
       scrolling="no"
        />

 
      <div className="text-container">
        <p className="price-text">{propertyData.price}</p>
        <button className="prequalified-button">Get Prequalified</button>
      </div>

      <h4 className="left-aligned-heading">Overview</h4>
      <p className="left-aligned-heading">{propertyData.overview}</p>

      <h4 className="left-aligned-heading">Getting Around</h4>
      <div className="left-aligned-heading">
        <h3>
          <FontAwesomeIcon icon={faWalking} className="fa-icon" /> Walk Score
        </h3>
        <h3>
          <FontAwesomeIcon icon={faBicycle} className="fa-icon" /> Bike Score
        </h3>
        <h3>
          <FontAwesomeIcon icon={faBus} className="fa-icon" /> Bus Score
        </h3>
        <p>{propertyData.walkScore}/100</p>
        <p>{propertyData.bikeScore}/100</p>
        <p>{propertyData.busScore}/100</p>
      </div>

      <img src="/Higlights.png" alt="Highlights" className="custom-image" />
     
      <Slider/>
      <PropertyAllign />

     
      <div className="larger-map-container">
        <Map  
        
        width="600"
        height="400"
        className="custom-map"
        mapUrl="https://www.google.com/maps/embed?..."
        title="Custom Map Title"
        frameborder="0"
        scrolling="no"
      />
      
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
