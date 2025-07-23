
import React from 'react';
import '../styles/herosection.css';

function HeroSection() {
  return (
    <div className="hero">
        
      <div className="text-container">
        <h1 className="text-title">Indian Railways</h1>
        <h4 className="text-subtitle">Security</h4>
        <h4 className="text-subtitle">Safety</h4>
      </div>
      <div className="hero-content">
        <div className="hero-content-box">
          <h1>Welcome to IRCTC</h1>
          <p>Book your train tickets easily and quickly!</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;