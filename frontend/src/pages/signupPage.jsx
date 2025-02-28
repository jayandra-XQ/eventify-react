import React from 'react'
import { useNavigate } from 'react-router-dom';

const signupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold text-center mb-8">Event Registration</h2>
          <hr />

          <form className="space-y-8 mt-10">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg "
                placeholder='First Name'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg"
                placeholder='Last Name'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg" placeholder="abcdef1234@gmail.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg"
                placeholder='************'
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg">
                <option>----Select----</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <button className="w-30% bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
                onClick={() => navigate('/login')}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default signupPage