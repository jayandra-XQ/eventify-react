import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: ''
  })


  //getting data from the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  //submitting data from the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.gender) {
      toast.error("please fill in all fields!")
      return
    }

    try {
      setLoading(true)

      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success === false) {
        toast.error(data?.message)
        return
      }

      setLoading(false)
      if (res.ok) {
        toast.success("Signup successful! Please login now.")
        navigate('/login')
      }

    } catch (error) {
      toast.error("An error occurred while signing up!")
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Event Registration</h2>
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
    </form>
      </div >
    
  );
};

export default SignupPage;
