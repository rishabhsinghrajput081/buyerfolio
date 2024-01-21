import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faBed, faBathtub, faHome, faLocation, faWalking, faBicycle, faBus } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from './ImageGallery';
import Map from './map';
import PropertyDetails from './PropertyDetails';

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
    event.preventDefault(); // Prevent the default form submission
    // Implement your logic to check for a match
    // For this example, let's assume there's a list of items to search
    const itemList = ['item1', 'item2', 'item3'];

    if (!itemList.includes(searchInput)) {
      setShowWarning(true);
    } else {
      // Implement your logic for a successful match
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
      <ImageGallery />

      <div className="price-heading">
        <div>
          <h4 className="colour">$525,000</h4>
          <p className="price">
            <FontAwesomeIcon icon={faBed} className="fa-icon" /> 3 {' '}
            <FontAwesomeIcon icon={faBathtub} className="fa-icon" /> 1{' '}
            <FontAwesomeIcon icon={faHome} className="fa-icon" /> 1186 sq ft
          </p>
          <p>
            <FontAwesomeIcon icon={faLocation} className="fa-icon" /> 6323 St, Jamestown, Toronto, CA
          </p>
        </div>
      </div>

      <Map className="small-map" />

      {/* Additional content below the first map */}
      <div className="text-container">
        <p className="price-text">$ 525,000</p>
        <button className="prequalified-button">Get Prequalified</button>
      </div>

      <h4 className="left-aligned-heading">Overview</h4>
      <p className="left-aligned-heading">
        Great renovation opportunity for this 3 bedroom, 1 bath home on a fenced lot.<br />
        Terrazzo floors throughout, original kitchen and bathroom, indoor laundry,<br />
        workshop, spacious backyard, impact windows, carport. Close to Larry and Penny<br />
        Thompson Memorial Park and Campground and Zoo Miami.
      </p>

      <h4 className="left-aligned-heading">Getting Around</h4>
      <div className="left-aligned-heading">
      <h3><FontAwesomeIcon icon={faWalking} className="fa-icon" /> Walk Score</h3>
       <h3><FontAwesomeIcon icon={faBicycle} className="fa-icon" /> Bike Score</h3>
       <h3><FontAwesomeIcon icon={faBus} className="fa-icon" /> Bus Score</h3>
       <p>88/100</p>
       <p>83/100</p>
       <p>70/100</p>
      </div>

      <img src="/Higlights.png" alt="Highlights" className="custom-image" />
      <img src="/MonthlyPayment.png" alt="MonthlyPayment" className="side-image" />

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
