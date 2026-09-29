import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa'

import { useAuth } from '../../context/AuthContext'

const Login = () => {

  const navigate = useNavigate()

  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  const handleSubmit = (e) => {

    e.preventDefault()

    /*
      Temporary login.

      Later this will be replaced with
      Axios API request to backend.
    */

    const user = {
      name: 'Demo User',
      email: formData.email,
      role: 'admin'
    }

    login(user)

    navigate('/admin/dashboard')

  }


  return (

    <div className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <div className="w-14 h-14 bg-primary text-white rounded-xl mx-auto flex items-center justify-center">

            <FaGraduationCap size={28} />

          </div>

          <h1 className="text-3xl font-bold text-dark mt-4">
            Welcome Back
          </h1>

          <p className="text-muted mt-2">
            Login to your attendance account
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="bg-white border border-border rounded-2xl p-8 shadow-sm"
        >

          <div className="mb-5">

            <label className="block text-sm font-medium text-dark mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          <div className="mb-6">

            <label className="block text-sm font-medium text-dark mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>


          <p className="text-center text-sm text-muted mt-6">

            Don't have an account?

            <Link
              to="/register"
              className="text-primary font-semibold ml-1"
            >
              Register
            </Link>

          </p>

        </form>

      </div>

    </div>

  )
}

export default Login