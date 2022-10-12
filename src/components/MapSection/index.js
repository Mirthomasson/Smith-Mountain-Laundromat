import React from 'react';
import './map.css';

 const AddressMap = () => {
    return (
        <div className="google-map-code">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.492675526919!2d-79.63802178429391!3d37.1647609798751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d47d92704762d%3A0x3e947b571056bfba!2sSmith%20Mountain%20Laundromat!5e0!3m2!1sen!2sus!4v1665520939962!5m2!1sen!2sus" width="500" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
 }

 
 export{AddressMap};
