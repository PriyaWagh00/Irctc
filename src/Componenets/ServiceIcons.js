
import React from 'react';
import "../styles/se.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faTrain, faUtensils, faBus, faSuitcase, faMountain, faSubway, faCamera } from '@fortawesome/free-solid-svg-icons';

function ServiceIcons() {
  const services = [
    { name: "FLIGHTS", icon: faPlane },
    { name: "HOTELS", icon: faHotel },
    { name: "RAIL DRISHTI", icon: faTrain },
    { name: "E-CATERING", icon: faUtensils },
    { name: "BUS", icon: faBus },
    { name: "HOLIDAY PACKAGES", icon: faSuitcase },
    { name: "TOURIST TRAIN", icon: faTrain },
    { name: "HILL RAILWAYS", icon: faMountain },
    { name: "CHARTER TRAIN", icon: faSubway },
    { name: "GALLERY", icon: faCamera },
  ];

  return (
    <div className="b">
      <h1 className="a">Have you not found the right one?</h1>
      <h1 className="a"> Find a service suitable for you here.</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} size="3x" />
            </div>
            <p className="service-name">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceIcons;