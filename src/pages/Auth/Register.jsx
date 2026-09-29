import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  })


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  const handleSubmit = (e) => {

    e.preventDefault()

    console.log('Registration Data:', formData)

    alert('Registration successful!')

    navigate('/login')

  }


  return (

    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-dark">
            Create Account
          </h1>

          <p className="text-muted mt-2">
            Register for the College Attendance System
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="bg-white border border-border rounded-2xl p-8 shadow-sm"
        >

          {/* Name */}

          <div className="mb-4">

            <label className="block text-sm font-medium text-dark mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          {/* Email */}

          <div className="mb-4">

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


          {/* Password */}

          <div className="mb-4">

            <label className="block text-sm font-medium text-dark mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              required
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          {/* Role */}

          <div className="mb-6">

            <label className="block text-sm font-medium text-dark mb-2">
              Role
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            >

              <option value="student">
                Student
              </option>

              <option value="teacher">
                Teacher
              </option>

            </select>

          </div>


          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Account
          </button>


          <p className="text-center text-sm text-muted mt-6">

            Already have an account?

            <Link
              to="/login"
              className="text-primary font-semibold ml-1"
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>

  )
}

export default Register