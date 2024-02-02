
import React from 'react';

const Map = ({ width, height, className, mapUrl, title, frameborder, scrolling }) => {
  return (
    <div className={`map-container ${className}`}>
      <iframe
        src={mapUrl}
        width={width}
        height={height}
        style={{ border: '0', width: '100%', height: '100%' }}
        allowFullScreen=""
        frameborder={frameborder}
        scrolling={scrolling}
        title={title || "Google Map"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

