import {
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck
} from 'react-icons/fa'

const AdminDashboard = () => {

  const stats = [
    {
      title: 'Total Students',
      value: '1,250',
      icon: <FaUsers />,
      color: 'text-primary',
      bg: 'bg-indigo-100'
    },
    {
      title: 'Total Teachers',
      value: '45',
      icon: <FaChalkboardTeacher />,
      color: 'text-secondary',
      bg: 'bg-teal-100'
    },
    {
      title: 'Total Classes',
      value: '32',
      icon: <FaBook />,
      color: 'text-accent',
      bg: 'bg-amber-100'
    },
    {
      title: "Today's Attendance",
      value: '92%',
      icon: <FaClipboardCheck />,
      color: 'text-success',
      bg: 'bg-green-100'
    }
  ]


  return (

    <div>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-dark">
          Dashboard
        </h1>

        <p className="text-muted mt-2">
          Welcome back! Here's what's happening today.
        </p>

      </div>


      {/* Stats */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="bg-white border border-border rounded-xl p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold text-dark mt-2">
                  {stat.value}
                </h2>

              </div>


              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}
              >
                {stat.icon}
              </div>

            </div>

          </div>

        ))}

      </div>


      {/* Attendance Overview */}

      <div className="mt-8 bg-white border border-border rounded-xl p-6">

        <h2 className="text-xl font-semibold text-dark">
          Attendance Overview
        </h2>

        <p className="text-muted text-sm mt-1">
          Today's overall college attendance
        </p>


        <div className="mt-8">

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Present
            </span>

            <span className="font-semibold text-success">
              92%
            </span>

          </div>


          <div className="h-4 bg-gray-100 rounded-full">

            <div className="h-4 bg-success rounded-full w-[92%]" />

          </div>

        </div>

      </div>

    </div>

  )
}

export default AdminDashboard