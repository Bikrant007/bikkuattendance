import { NavLink, useNavigate } from 'react-router-dom'

import {
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck,
  FaChartBar,
  FaSignOutAlt
} from 'react-icons/fa'

import { useAuth } from '../context/AuthContext'

const Sidebar = () => {

  const navigate = useNavigate()

  const { authData, logout } = useAuth()


  const handleLogout = () => {

    logout()

    navigate('/login')

  }


  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: <FaHome />
    },
    {
      name: 'Students',
      path: '/admin/students',
      icon: <FaUsers />
    },
    {
      name: 'Teachers',
      path: '/admin/teachers',
      icon: <FaChalkboardTeacher />
    },
    {
      name: 'Classes',
      path: '/admin/classes',
      icon: <FaBook />
    },
    {
      name: 'Subjects',
      path: '/admin/subjects',
      icon: <FaBook />
    },
    {
      name: 'Reports',
      path: '/admin/reports',
      icon: <FaChartBar />
    }
  ]


  return (

    <aside className="w-64 min-h-screen bg-white border-r border-border p-5 hidden md:block">

      {/* Logo */}

      <div className="flex items-center gap-3 mb-10">

        <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">

          <FaClipboardCheck />

        </div>

        <div>

          <h1 className="font-bold text-dark">
            Attendance
          </h1>

          <p className="text-xs text-muted">
            Management System
          </p>

        </div>

      </div>


      {/* User */}

      <div className="bg-indigo-50 rounded-lg p-4 mb-6">

        <p className="font-semibold text-dark">
          {authData.user?.name || 'Admin'}
        </p>

        <p className="text-sm text-muted capitalize">
          {authData.role || 'Admin'}
        </p>

      </div>


      {/* Menu */}

      <nav className="space-y-2">

        {menuItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-text hover:bg-indigo-50 hover:text-primary'
              }`
            }
          >

            {item.icon}

            <span>
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>


      {/* Logout */}

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 mt-10 text-danger hover:bg-red-50 rounded-lg"
      >

        <FaSignOutAlt />

        Logout

      </button>

    </aside>

  )
}

export default Sidebar