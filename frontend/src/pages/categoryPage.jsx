import React from 'react'
import weddingImage from '../assets/wedding.avif';
import corporateImage from '../assets/coprate.avif';
import birthdayImage from '../assets/birthday.avif';
import CategoryCard from '../components/CategoryCard';
import HoliCard from "../assets/holi.webp";
import ConferenceCard from "../assets/conference.webp";

const categories = [
  {
    title: 'Weddings',
    description: 'Elegant and unforgettable wedding celebrations...',
    image: weddingImage,
  },
  {
    title: 'Corporate Events',
    description: 'Professional and impactful corporate events...',
    image: corporateImage,
  },
  {
    title: 'Birthdays',
    description: 'Fun and memorable birthday celebrations...',
    image: birthdayImage,
  },
  {
    title: 'Holi',
    description: 'Indian festivities and celebrations...',
    image: HoliCard,
  },
  {
    title: 'Conferences',
    description: 'Exciting and inspiring business and professional events...',
    image: ConferenceCard,
  }

];

const categoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <CategoryCard key={index} title={category.title} description={category.description} image={category.image} />
      ))}
    </div>
  )
}

export default categoryPage