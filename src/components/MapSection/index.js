import React from 'react';
import './map.css';
import { TextWrapper, TopLine, Heading, Subtitle } from '../AboutSection/AboutElements';

 const AddressMap = ({ topline, lightText, headline, darkText, description }) => {
    return (
        <div id="location" className="root">
          <div className="left">
                    <TextWrapper>
                        <TopLine>
                            {topline}
                        </TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
          </div>
          <div className="right">
             <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405755.11898430827!2d-79.63647137425991!3d37.39073407063527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d47d92704762d%3A0x3e947b571056bfba!2sSmith%20Mountain%20Laundromat!5e0!3m2!1sen!2sus!4v1665604519662!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
    );
 }

 
 export{AddressMap};
