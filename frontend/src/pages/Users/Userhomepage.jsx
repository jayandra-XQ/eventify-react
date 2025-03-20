import React from 'react';
import party1 from '../../assets/party1.jpg';
import Carousel from '../../components/Carousel'


const Userhomepage = () => {
  const carouselImages = [party1]; // Single image in the carousel

  return (
    <div className="relative"> {/* Removed redundant <main> tag */}
      <Carousel images={carouselImages} />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center w-full">
        <p className="text-xl italic">"Your event, your way - we make it happen!"</p>
      </div>
    </div>
  );
};

export default Userhomepage;