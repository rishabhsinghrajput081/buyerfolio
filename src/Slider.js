import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [sliderValues, setSliderValues] = useState({
    slider1: 100000,
    slider2: 100000,
    slider3: 100000,
    slider4: 100000,
    slider5: 1,
  });

  const handleSliderChange = (event, sliderType) => {
    setSliderValues({
      ...sliderValues,
      [sliderType]: event.target.value,
    });
  };

  return (
    <div className="slide-border">
      <div className="slider-container">
        <div className="slider1">
          <h2>Full Market Value</h2>
          <p>$: {sliderValues.slider1}</p>
        </div>
        <input
          type="range"
          min="0"
          max="200000"
          value={sliderValues.slider1}
          onChange={(event) => handleSliderChange(event, 'slider1')}
        />

        <div className="slider2">
          <h2>Share Percentages</h2>
          <p>$: {sliderValues.slider2}</p>
        </div>
        <input
          type="range"
          min="0"
          max="200000"
          value={sliderValues.slider2}
          onChange={(event) => handleSliderChange(event, 'slider2')}
        />

        <div className="slider3">
          <h2>Deposit Amount</h2>
          <p>$: {sliderValues.slider3}</p>
        </div>
        <input
          type="range"
          min="0"
          max="200000"
          value={sliderValues.slider3}
          onChange={(event) => handleSliderChange(event, 'slider3')}
        />

        <div className="slider4">
          <h2>Mortgage Rate</h2>
          <p>%: {sliderValues.slider4}</p>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step = "0.10"
          value={sliderValues.slider4}
          onChange={(event) => handleSliderChange(event, 'slider4')}
        />

        <div className="slider5">
          <h2>Amortization</h2>
          <p>years: {sliderValues.slider5}</p>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          step = "1"
          value={sliderValues.slider5}
          onChange={(event) => handleSliderChange(event, 'slider5')}
        />
      </div>
    </div>
  );
};

export default Slider;
