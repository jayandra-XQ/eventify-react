import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');

  const handleLogin = () => {
    if (selectedRole === 'user') {
      navigate('/Users/Userhomepage');
    } else if (selectedRole === 'admin') {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-md">
        <h2 className="text-4xl font-semibold text-center mb-6">Event Login</h2>
        <hr />

        <form className="space-y-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg" 
              placeholder="abcdef1234@gmail.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg"
              placeholder="************"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Login As</label>
            <select
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 text-lg"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">-- Select Role --</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              
            </select>
          </div>

          <div>
            <button 
              type="button"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
              onClick={handleLogin}
              disabled={!selectedRole} 
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
