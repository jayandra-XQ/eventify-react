import React from 'react'
import eventManagementImage from '../../assets/event-management.webp';
import eventVenueImage from '../../assets/event-venue.webp';
import eventFeaturesImage from '../../assets/event-features.webp';
import teamMember1 from '../../assets/team-member1.png';
import teamMember2 from '../../assets/team-member2.png';
import teamMember3 from '../../assets/team-member3.png';

const Adminabout = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 py-16">
      <div className="container mx-auto px-4">
        {/* Welcome to EVENTIFY Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Welcome to EVENTIFY</h2>
            <p className="text-gray-700">
              EVENTIFY is your ultimate event planning companion, helping you
              craft unforgettable moments with ease.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={eventManagementImage}
              alt="Event Management"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Why Choose EVENTIFY? Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Why Choose EVENTIFY?</h2>
            <p className="text-gray-700 mb-4">
              With a user-friendly interface and powerful tools, EVENTIFY makes it easy
              to plan and execute successful events. From venue selection to modern
              invitation delivery, creating meaningful experiences.
              -
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={eventVenueImage}
              alt="Event Venue"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Discover Our Features Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img
              src={eventFeaturesImage}
              alt="Event Features"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Discover Our Features</h2>
            <p className="text-gray-700 mb-4">
              EVENTIFY provides comprehensive event creation tools. EVENTIFY provides everything you need to plan your event. Explore our innovative features designed to save time and bring your ideas to life.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* The People Behind EVENTIFY Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">The People Behind EVENTIFY.</h2>
          <p className="text-gray-700">
            We're a passionate group of developers dedicated to creating impactful event management solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src={teamMember1}
              alt="Jayandra Hamal"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jayandra Hamal</h3>
            <p className="text-gray-600">Co-Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src={teamMember2}
              alt="Ashik Sunar"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Ashik Sunar</h3>
            <p className="text-gray-600">Co-Founder</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
              src={teamMember3}
              alt="Bishwash Acharya"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Bishwash Acharya</h3>
            <p className="text-gray-600">Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminabout;