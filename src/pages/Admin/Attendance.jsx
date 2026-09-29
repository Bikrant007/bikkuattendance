
import { useState } from 'react'

import {
  FaClipboardCheck,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaSave,
  FaSearch
} from 'react-icons/fa'

const Attendance = () => {

  // ================= CLASS DATA =================

  const classes = [
    'BCA 1st',
    'BCA 2nd',
    'BCA 3rd',
    'BBA 2nd'
  ]

  // ================= SUBJECT DATA =================

  const subjects = [
    'Programming',
    'Web Development',
    'Database',
    'Mathematics',
    'Accounting'
  ]

  // ================= STUDENT DATA =================

  const [students] = useState([
    {
      id: 1,
      studentId: 'ST001',
      name: 'Ram Sharma',
      className: 'BCA 1st'
    },
    {
      id: 2,
      studentId: 'ST002',
      name: 'Sita Thapa',
      className: 'BCA 2nd'
    },
    {
      id: 3,
      studentId: 'ST003',
      name: 'Hari KC',
      className: 'BCA 3rd'
    },
    {
      id: 4,
      studentId: 'ST004',
      name: 'Bikash Rai',
      className: 'BCA 3rd'
    },
    {
      id: 5,
      studentId: 'ST005',
      name: 'Aayush Karki',
      className: 'BCA 3rd'
    },
    {
      id: 6,
      studentId: 'ST006',
      name: 'Anisha Gurung',
      className: 'BCA 3rd'
    },
    {
      id: 7,
      studentId: 'ST007',
      name: 'Prakash Thapa',
      className: 'BBA 2nd'
    },
    {
      id: 8,
      studentId: 'ST008',
      name: 'Riya Shrestha',
      className: 'BBA 2nd'
    }
  ])


  // ================= FORM DATA =================

  const [className, setClassName] = useState('')

  const [subject, setSubject] = useState('')

  const [date, setDate] = useState(
    new Date().toISOString().split('T')[0]
  )


  // ================= SEARCH =================

  const [search, setSearch] = useState('')


  // ================= ATTENDANCE =================

  const [attendance, setAttendance] = useState({})


  // ================= SAVED MESSAGE =================

  const [saved, setSaved] = useState(false)


  // ================= SELECT CLASS =================

  const selectedStudents = students.filter(
    student => student.className === className
  )


  // ================= MARK ATTENDANCE =================

  const markAttendance = (studentId, status) => {

    setAttendance({
      ...attendance,
      [studentId]: status
    })

  }


  // ================= MARK ALL PRESENT =================

  const markAllPresent = () => {

    const newAttendance = {
      ...attendance
    }

    selectedStudents.forEach(student => {

      newAttendance[student.id] = 'Present'

    })

    setAttendance(newAttendance)

  }


  // ================= MARK ALL ABSENT =================

  const markAllAbsent = () => {

    const newAttendance = {
      ...attendance
    }

    selectedStudents.forEach(student => {

      newAttendance[student.id] = 'Absent'

    })

    setAttendance(newAttendance)

  }


  // ================= SAVE ATTENDANCE =================

  const handleSave = () => {

    if (!className) {
      alert('Please select a class.')
      return
    }

    if (!subject) {
      alert('Please select a subject.')
      return
    }


    if (selectedStudents.length === 0) {
      alert('No students found for this class.')
      return
    }


    const unmarkedStudents = selectedStudents.filter(
      student => !attendance[student.id]
    )


    if (unmarkedStudents.length > 0) {

      alert(
        'Please mark attendance for all students.'
      )

      return
    }


    setSaved(true)


    setTimeout(() => {
      setSaved(false)
    }, 3000)

  }


  // ================= FILTER STUDENTS =================

  const filteredStudents = selectedStudents.filter(
    student =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      student.studentId
        .toLowerCase()
        .includes(search.toLowerCase())
  )


  // ================= STATISTICS =================

  const totalStudents = selectedStudents.length

  const presentStudents = selectedStudents.filter(
    student => attendance[student.id] === 'Present'
  ).length

  const absentStudents = selectedStudents.filter(
    student => attendance[student.id] === 'Absent'
  ).length


  const attendancePercentage =
    totalStudents > 0
      ? Math.round(
          (presentStudents / totalStudents) * 100
        )
      : 0


  return (

    <div>


      {/* ================= HEADER ================= */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-dark">
          Attendance
        </h1>

        <p className="text-muted mt-2">
          Mark and manage daily student attendance.
        </p>

      </div>


      {/* ================= SELECT SECTION ================= */}

      <div className="bg-white border border-border rounded-xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-dark mb-5">
          Attendance Details
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


          {/* Class */}

          <div>

            <label className="block text-sm font-medium text-dark mb-2">
              Select Class
            </label>

            <select
              value={className}
              onChange={(e) => {

                setClassName(e.target.value)

                setAttendance({})

              }}
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            >

              <option value="">
                Select Class
              </option>

              {classes.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>


          {/* Subject */}

          <div>

            <label className="block text-sm font-medium text-dark mb-2">
              Select Subject
            </label>

            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            >

              <option value="">
                Select Subject
              </option>

              {subjects.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>


          {/* Date */}

          <div>

            <label className="block text-sm font-medium text-dark mb-2">
              Attendance Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>

        </div>

      </div>


      {/* ================= STATISTICS ================= */}

      {className && (

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-6">


          {/* Total */}

          <div className="bg-white border border-border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  Total Students
                </p>

                <h2 className="text-3xl font-bold text-dark mt-2">
                  {totalStudents}
                </h2>

              </div>

              <div className="w-11 h-11 rounded-lg bg-indigo-100 text-primary flex items-center justify-center">

                <FaUsers />

              </div>

            </div>

          </div>


          {/* Present */}

          <div className="bg-white border border-border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  Present
                </p>

                <h2 className="text-3xl font-bold text-success mt-2">
                  {presentStudents}
                </h2>

              </div>

              <div className="w-11 h-11 rounded-lg bg-green-100 text-success flex items-center justify-center">

                <FaCheckCircle />

              </div>

            </div>

          </div>


          {/* Absent */}

          <div className="bg-white border border-border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  Absent
                </p>

                <h2 className="text-3xl font-bold text-danger mt-2">
                  {absentStudents}
                </h2>

              </div>

              <div className="w-11 h-11 rounded-lg bg-red-100 text-danger flex items-center justify-center">

                <FaTimesCircle />

              </div>

            </div>

          </div>


          {/* Percentage */}

          <div className="bg-white border border-border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  Attendance
                </p>

                <h2 className="text-3xl font-bold text-primary mt-2">
                  {attendancePercentage}%
                </h2>

              </div>

              <div className="w-11 h-11 rounded-lg bg-indigo-100 text-primary flex items-center justify-center">

                <FaClipboardCheck />

              </div>

            </div>

          </div>

        </div>

      )}


      {/* ================= ATTENDANCE TABLE ================= */}

      {className && (

        <div className="bg-white border border-border rounded-xl overflow-hidden">


          {/* Table Header */}

          <div className="p-6 border-b border-border">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <h2 className="text-xl font-semibold text-dark">
                  Mark Attendance
                </h2>

                <p className="text-sm text-muted mt-1">

                  {className}

                  {subject && ` • ${subject}`}

                  {` • ${date}`}

                </p>

              </div>


              {/* Buttons */}

              <div className="flex gap-2">

                <button
                  onClick={markAllPresent}
                  className="px-4 py-2 bg-green-100 text-success rounded-lg text-sm font-semibold hover:bg-green-200 transition"
                >
                  Mark All Present
                </button>

                <button
                  onClick={markAllAbsent}
                  className="px-4 py-2 bg-red-100 text-danger rounded-lg text-sm font-semibold hover:bg-red-200 transition"
                >
                  Mark All Absent
                </button>

              </div>

            </div>


            {/* Search */}

            <div className="relative mt-5 max-w-md">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

              <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
              />

            </div>

          </div>


          {/* Table */}

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-background">

                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                    Student
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                    Student ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                    Attendance
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="border-t border-border hover:bg-background transition"
                  >


                    {/* Student */}

                    <td className="px-6 py-4">

                      <p className="font-semibold text-dark">
                        {student.name}
                      </p>

                    </td>


                    {/* ID */}

                    <td className="px-6 py-4 text-text">
                      {student.studentId}
                    </td>


                    {/* Buttons */}

                    <td className="px-6 py-4">

                      <div className="flex gap-3">


                        {/* Present */}

                        <button
                          onClick={() =>
                            markAttendance(
                              student.id,
                              'Present'
                            )
                          }
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                            attendance[student.id] === 'Present'
                              ? 'bg-success text-white'
                              : 'bg-green-100 text-success hover:bg-green-200'
                          }`}
                        >

                          <FaCheckCircle />

                          Present

                        </button>


                        {/* Absent */}

                        <button
                          onClick={() =>
                            markAttendance(
                              student.id,
                              'Absent'
                            )
                          }
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                            attendance[student.id] === 'Absent'
                              ? 'bg-danger text-white'
                              : 'bg-red-100 text-danger hover:bg-red-200'
                          }`}
                        >

                          <FaTimesCircle />

                          Absent

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}


                {filteredStudents.length === 0 && (

                  <tr>

                    <td
                      colSpan="3"
                      className="text-center py-10 text-muted"
                    >
                      No students found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>


          {/* Footer */}

          <div className="p-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">


            <div>

              {saved && (

                <p className="text-success text-sm font-semibold">
                  ✓ Attendance saved successfully!
                </p>

              )}

            </div>


            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >

              <FaSave />

              Save Attendance

            </button>

          </div>

        </div>

      )}


      {/* ================= EMPTY STATE ================= */}

      {!className && (

        <div className="bg-white border border-border rounded-xl p-12 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 text-primary flex items-center justify-center text-2xl mb-4">

            <FaClipboardCheck />

          </div>

          <h2 className="text-xl font-semibold text-dark">
            Select a Class
          </h2>

          <p className="text-muted mt-2">
            Select a class above to start marking attendance.
          </p>

        </div>

      )}

    </div>
  )
}

export default Attendance

