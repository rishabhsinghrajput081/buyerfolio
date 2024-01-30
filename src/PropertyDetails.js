// PropertyDetails.js
import React from 'react';

const PropertyDetails = ({ propertyName, details, customStyle }) => {
  return (
    <div style={{ backgroundColor:'white', marginBottom: '5px', textAlign: 'left', width: '50%', ...customStyle }}>
      {details && Array.isArray(details) && details.length > 0 && (
        <>
          <strong>{propertyName}</strong>
          <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PropertyDetails;
