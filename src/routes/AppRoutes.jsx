import { Routes, Route } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'

import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

import DashboardLayout from '../layouts/DashboardLayout'

import AdminDashboard from '../pages/Admin/AdminDashboard'
import Students from '../pages/Admin/Students'
import Teachers from '../pages/Admin/Teachers'
import Classes from '../pages/Admin/Classes'
import Subjects from '../pages/Admin/Subjects'
import Attendance from '../pages/Admin/Attendance'
import Reports from '../pages/Admin/Reports'

import TeacherDashboard from '../pages/Teacher/TeacherDashboard'

import StudentDashboard from '../pages/Student/StudentDashboard'

const AppRoutes = () => {

  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      {/* Admin */}
      <Route
        path="/admin"
        element={<DashboardLayout />}
      >
        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="students"
          element={<Students />}
        />

        <Route
          path="teachers"
          element={<Teachers />}
        />

        <Route
          path="classes"
          element={<Classes />}
        />

        <Route
          path="subjects"
          element={<Subjects />}
        />
        <Route path="attendance" element={<Attendance />} />

        <Route
          path="reports"
          element={<Reports />}
        />
      </Route>


      {/* Teacher */}
      <Route
        path="/teacher"
        element={<DashboardLayout />}
      >
        <Route
          path="dashboard"
          element={<TeacherDashboard />}
        />
      </Route>


      {/* Student */}
      <Route
        path="/student"
        element={<DashboardLayout />}
      >
        <Route
          path="dashboard"
          element={<StudentDashboard />}
        />
      </Route>

    </Routes>
  )
}

export default AppRoutes