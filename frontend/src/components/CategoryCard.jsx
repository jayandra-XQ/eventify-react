import React from 'react'


const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default CategoryCard