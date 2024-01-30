// ContactList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
import PropertyDetails from './PropertyDetails'; // Import the new component

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contact'));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), showDetails: false }));
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts from Firestore: ', error);
      }
    };

    fetchContacts();
  }, []); // Run once on component mount

  const toggleDetails = (id) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? { ...contact, showDetails: !contact.showDetails } : contact
      )
    );
  };

  return (
    <div>
      <h2>Home Details</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div style={{ cursor: 'pointer', fontSize: '20px' }} onClick={() => toggleDetails(contact.id)}>
              {contact.showDetails ? '▲' : '▼'} 
            </div>
            {/* Use the PropertyDetails component for each property section */}
            <PropertyDetails propertyName="Bedroom and Bathroom" details={contact.bedroomandbathroom} />
            <PropertyDetails propertyName="Recreation Room" details={contact.RecreationalRoom} />
            <PropertyDetails propertyName="Kitchen" details={contact.Kitchen} />
            <PropertyDetails propertyName="Bedroom" details={contact.Bedroom} />
            <PropertyDetails propertyName="Basement" details={contact.Basement} />
            <PropertyDetails propertyName="Heating" details={contact.Heating} />
            <PropertyDetails propertyName="Appliances" details={contact.Appliances} />



            <PropertyDetails propertyName="Parking" details={contact.Parking} />
            <PropertyDetails propertyName="Property" details={contact.Property} />
            <PropertyDetails propertyName="Lot" details={contact.Lot} />
            <PropertyDetails propertyName="Other Information" details={contact.OtherInformation} />




            <PropertyDetails propertyName="Type & Style" details={contact.Type} />
            <PropertyDetails propertyName="Condition" details={contact.Condition} />
            <PropertyDetails propertyName="Material Information" details={contact.MaterialInformation} />



            <PropertyDetails propertyName="Utility" details={contact.Utility} />


            

            <PropertyDetails propertyName="Community" details={contact.Community } />
            <PropertyDetails propertyName="Location" details={contact.Location} />
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
