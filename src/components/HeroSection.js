import React from 'react'

import { useNavigate } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  let navigate = useNavigate();

  const routeChange = () => { 
    let path = '/services'; 
    navigate(path);
  }


  return (
    <div className='hero-container'>
      <video src='/videos/video-01.mp4' autoPlay loop muted />
      <h1>Đà Lạt 360</h1>
      <p>Trải nghiệm ảo Đà Lạt 360</p>
    </div>
  )
}

export default HeroSection;