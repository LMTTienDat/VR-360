import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;