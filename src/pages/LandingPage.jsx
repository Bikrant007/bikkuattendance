import { Link } from 'react-router-dom'

import {
  FaUserGraduate,
  FaClipboardCheck,
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa'

import Navbar from '../components/Navbar'

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-background">

      <Navbar />


      {/* HERO */}

      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-block bg-indigo-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">

              Smart College Management

            </div>


            <h1 className="text-5xl md:text-6xl font-bold text-dark leading-tight">

              Smart Attendance
              <span className="text-primary">
                {" "}Management
              </span>

            </h1>


            <p className="mt-6 text-lg text-muted leading-8 max-w-xl">

              Manage college attendance easily, track
              student performance, and generate accurate
              attendance reports from one platform.

            </p>


            <div className="mt-8 flex gap-4">

              <Link
                to="/register"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 border border-border bg-white text-dark rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Login
              </Link>

            </div>

          </div>


          {/* Hero Card */}

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">

            <div className="flex justify-between items-center mb-8">

              <div>

                <p className="text-muted text-sm">
                  Today's Attendance
                </p>

                <h2 className="text-4xl font-bold text-dark mt-2">
                  92%
                </h2>

              </div>

              <div className="w-14 h-14 rounded-full bg-green-100 text-success flex items-center justify-center">
                <FaCheckCircle size={28} />
              </div>

            </div>


            <div className="space-y-5">

              <div>

                <div className="flex justify-between mb-2">
                  <span>Present</span>
                  <span className="text-success font-semibold">
                    92%
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">

                  <div className="h-3 bg-success rounded-full w-[92%]" />

                </div>

              </div>


              <div>

                <div className="flex justify-between mb-2">
                  <span>Absent</span>
                  <span className="text-danger font-semibold">
                    8%
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">

                  <div className="h-3 bg-danger rounded-full w-[8%]" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section
        id="features"
        className="py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-3xl font-bold text-dark">
              Everything You Need
            </h2>

            <p className="text-muted mt-3">
              Simple tools for managing college attendance.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <Feature
              icon={<FaClipboardCheck />}
              title="Easy Attendance"
              description="Teachers can quickly mark student attendance."
            />

            <Feature
              icon={<FaUserGraduate />}
              title="Student Management"
              description="Manage students, classes and subjects easily."
            />

            <Feature
              icon={<FaChartLine />}
              title="Detailed Reports"
              description="View attendance statistics and performance."
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-primary rounded-2xl p-12 text-center text-white">

            <h2 className="text-3xl font-bold">
              Ready to simplify attendance?
            </h2>

            <p className="mt-4 text-indigo-100">
              Start managing your college attendance today.
            </p>

            <Link
              to="/register"
              className="inline-block mt-7 bg-white text-primary px-7 py-3 rounded-lg font-semibold"
            >
              Get Started
            </Link>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer
        id="contact"
        className="bg-dark text-white py-8"
      >

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p>
            © 2026 College Attendance System
          </p>

          <p className="text-slate-400 text-sm mt-2">
            Smart • Simple • Efficient
          </p>

        </div>

      </footer>

    </div>
  )
}


const Feature = ({ icon, title, description }) => {

  return (

    <div className="bg-background border border-border rounded-xl p-7 hover:shadow-lg transition">

      <div className="w-12 h-12 bg-indigo-100 text-primary rounded-lg flex items-center justify-center text-xl">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-dark mt-5">
        {title}
      </h3>

      <p className="text-muted mt-3 leading-7">
        {description}
      </p>

    </div>

  )
}

export default LandingPage