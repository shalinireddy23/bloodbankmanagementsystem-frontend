import React from 'react';
import '../App.css';
import './HeroSection.css';
import pic from '../images/ob.png';
function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={pic} alt="Welcome" className='img-fluid' />
      
    </div>
  );
}

export default HeroSection;