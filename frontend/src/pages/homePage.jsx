import React from 'react'
import party1 from '../assets/party1.jpg'
import Carousel from '../components/Carousel'

const homePage = () => {
  const carouselImages = [
    party1,
  ]
  return (
    <main>
      <div className="relative">
        <Carousel images={carouselImages} />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center w-full">
          <p className="text-xl italic">"Your event, your way - we make it happen!"</p>
        </div>
      </div>
    </main>
  )
}

export default homePage