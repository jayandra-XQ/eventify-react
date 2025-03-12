import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields!')
      return
    }

    try {
      setLoading(true)

      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (data.success === false) {
        toast.error(data?.message)
        return
      }
      setLoading(false)

      if (res.ok) {
        toast.success('Logged in successfully!')
        navigate('/')
      };

    } catch (error) {
      toast.error("An error occurred while signing up!")
      console.error(error)
      setLoading(false)

    }
    console.log('form data submitted', formData)

    navigate('/')
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold text-center mb-8">Event Login</h2>
          <hr />

          <form className="space-y-8 mt-10" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg" placeholder="abcdef1234@gmail.com"
                id='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg"
                placeholder='************'
                id='password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="w-30% bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
                type='submit'
                disabled={loading}
              >
                {
                  loading ? (
                    <>
                      <span className='pl-3'>Loading...</span>
                    </>
                  ) : 'Login'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login