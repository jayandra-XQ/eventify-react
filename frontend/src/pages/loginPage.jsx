import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';

const Login = () => {
  const navigate = useNavigate();


  const { loading } = useSelector(state => state.user)

  const dispatch = useDispatch()
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
      return dispatch(signInFailure('Please fill out all fields'))
    }

    try {
      dispatch(signInStart())

      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data.message))
      }

      if (res.ok) {
        dispatch(signInSuccess(data))
        toast.success("Login successful!")
        navigate('/')
      };

    } catch (error) {
      dispatch(signInFailure(error.message))

    }
    console.log('form data submitted', formData)

    navigate('/')
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-md">
        <h2 className="text-4xl font-semibold text-center mb-6">Event Login</h2>
        <hr />

        <form className="space-y-8 mt-10" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email" value={formData.email} onChange={handleChange}
              type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg" placeholder="abcdef1234@gmail.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id='password' value={formData.password} onChange={handleChange}
              type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg"
              placeholder='************'
            />
          </div>
          <div>
            <button className="w-30% bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
              onClick={() => navigate('/')}
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
  )
}

export default Login;
