import { Link } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa'

const Navbar = () => {

  return (
    <nav className="bg-white border-b border-border">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
            <FaGraduationCap size={22} />
          </div>

          <div>
            <h1 className="font-bold text-dark">
              College Attendance
            </h1>

            <p className="text-xs text-muted">
              Management System
            </p>
          </div>

        </Link>


        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="text-text hover:text-primary transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-text hover:text-primary transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-text hover:text-primary transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-text hover:text-primary transition"
          >
            Contact
          </a>

        </div>


        {/* Buttons */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="px-5 py-2 text-primary font-medium hover:bg-indigo-50 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar