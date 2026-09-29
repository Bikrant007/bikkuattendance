import { useState } from 'react'

import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from 'react-icons/fa'


const Students = () => {

  // -----------------------------
  // Student Data
  // -----------------------------

  const [students, setStudents] = useState([
    {
      id: 1,
      studentId: 'ST001',
      name: 'Ram Sharma',
      email: 'ram@gmail.com',
      className: 'BCA 1st',
      attendance: 92,
      status: 'Active'
    },

    {
      id: 2,
      studentId: 'ST002',
      name: 'Sita Thapa',
      email: 'sita@gmail.com',
      className: 'BCA 2nd',
      attendance: 86,
      status: 'Active'
    },

    {
      id: 3,
      studentId: 'ST003',
      name: 'Hari KC',
      email: 'hari@gmail.com',
      className: 'BCA 3rd',
      attendance: 74,
      status: 'Active'
    },

    {
      id: 4,
      studentId: 'ST004',
      name: 'Bikash Rai',
      email: 'bikash@gmail.com',
      className: 'BCA 3rd',
      attendance: 68,
      status: 'Inactive'
    }
  ])


  // -----------------------------
  // State
  // -----------------------------

  const [search, setSearch] = useState('')

  const [classFilter, setClassFilter] = useState('All')

  const [showModal, setShowModal] = useState(false)


  // -----------------------------
  // Form State
  // -----------------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    className: '',
    status: 'Active'
  })


  // -----------------------------
  // Handle Input
  // -----------------------------

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  // -----------------------------
  // Add Student
  // -----------------------------

  const handleSubmit = (e) => {

    e.preventDefault()

    const newStudent = {
      id: Date.now(),

      studentId: formData.studentId,

      name: formData.name,

      email: formData.email,

      className: formData.className,

      attendance: 0,

      status: formData.status
    }


    setStudents([
      ...students,
      newStudent
    ])


    // Reset form

    setFormData({
      name: '',
      email: '',
      studentId: '',
      className: '',
      status: 'Active'
    })

    setShowModal(false)

  }


  // -----------------------------
  // Delete Student
  // -----------------------------

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this student?'
    )

    if (!confirmDelete) return

    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    )

  }


  // -----------------------------
  // Filter Students
  // -----------------------------

  const filteredStudents = students.filter((student) => {

    const matchesSearch =
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      student.studentId
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      student.email
        .toLowerCase()
        .includes(search.toLowerCase())


    const matchesClass =
      classFilter === 'All' ||
      student.className === classFilter


    return matchesSearch && matchesClass

  })


  // -----------------------------
  // Statistics
  // -----------------------------

  const totalStudents = students.length

  const activeStudents = students.filter(
    student => student.status === 'Active'
  ).length

  const inactiveStudents = students.filter(
    student => student.status === 'Inactive'
  ).length


  return (

    <div>

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-dark">
            Students
          </h1>

          <p className="text-muted mt-2">
            Manage all students in the college.
          </p>

        </div>


        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
        >

          <FaPlus />

          Add Student

        </button>

      </div>


      {/* =====================================
          STATISTICS
      ====================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">


        {/* Total */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Total Students
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {totalStudents}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-indigo-100 text-primary flex items-center justify-center">

              <FaUsers />

            </div>

          </div>

        </div>


        {/* Active */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Active Students
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {activeStudents}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-green-100 text-success flex items-center justify-center">

              <FaUserCheck />

            </div>

          </div>

        </div>


        {/* Inactive */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Inactive Students
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {inactiveStudents}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-red-100 text-danger flex items-center justify-center">

              <FaUserTimes />

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          SEARCH + FILTER
      ====================================== */}

      <div className="bg-white border border-border rounded-xl p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          {/* Search */}

          <div className="relative">

            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          {/* Class Filter */}

          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
          >

            <option value="All">
              All Classes
            </option>

            <option value="BCA 1st">
              BCA 1st
            </option>

            <option value="BCA 2nd">
              BCA 2nd
            </option>

            <option value="BCA 3rd">
              BCA 3rd
            </option>

          </select>

        </div>

      </div>


      {/* =====================================
          STUDENT TABLE
      ====================================== */}

      <div className="bg-white border border-border rounded-xl overflow-hidden">

        <div className="p-6 border-b border-border">

          <h2 className="text-xl font-semibold text-dark">
            Student List
          </h2>

          <p className="text-sm text-muted mt-1">
            Showing {filteredStudents.length} students
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-background">

              <tr>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Student
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  ID
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Class
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Attendance
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Action
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

                    <div>

                      <p className="font-semibold text-dark">
                        {student.name}
                      </p>

                      <p className="text-sm text-muted">
                        {student.email}
                      </p>

                    </div>

                  </td>


                  {/* ID */}

                  <td className="px-6 py-4 text-text">
                    {student.studentId}
                  </td>


                  {/* Class */}

                  <td className="px-6 py-4 text-text">
                    {student.className}
                  </td>


                  {/* Attendance */}

                  <td className="px-6 py-4">

                    <div className="min-w-28">

                      <div className="flex justify-between text-sm mb-1">

                        <span>
                          {student.attendance}%
                        </span>

                      </div>

                      <div className="h-2 bg-gray-100 rounded-full">

                        <div
                          className={`h-2 rounded-full ${
                            student.attendance >= 75
                              ? 'bg-success'
                              : 'bg-danger'
                          }`}
                          style={{
                            width: `${student.attendance}%`
                          }}
                        />

                      </div>

                    </div>

                  </td>


                  {/* Status */}

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === 'Active'
                          ? 'bg-green-100 text-success'
                          : 'bg-red-100 text-danger'
                      }`}
                    >

                      {student.status}

                    </span>

                  </td>


                  {/* Actions */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <button
                        className="p-2 text-secondary hover:bg-teal-50 rounded-lg"
                        title="View"
                      >
                        <FaEye />
                      </button>


                      <button
                        className="p-2 text-primary hover:bg-indigo-50 rounded-lg"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>


                      <button
                        onClick={() => handleDelete(student.id)}
                        className="p-2 text-danger hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {/* No result */}

              {filteredStudents.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-muted"
                  >

                    No students found.

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* =====================================
          ADD STUDENT MODAL
      ====================================== */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">

            {/* Modal Header */}

            <div className="flex items-center justify-between p-6 border-b border-border">

              <div>

                <h2 className="text-xl font-bold text-dark">
                  Add Student
                </h2>

                <p className="text-sm text-muted mt-1">
                  Add a new student to the system.
                </p>

              </div>


              <button
                onClick={() => setShowModal(false)}
                className="text-muted hover:text-danger text-xl"
              >
                ×
              </button>

            </div>


            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="p-6"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                {/* Name */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Student Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Student ID */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Student ID
                  </label>

                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="ST001"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Email */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@gmail.com"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Class */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Class
                  </label>

                  <select
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  >

                    <option value="">
                      Select Class
                    </option>

                    <option value="BCA 1st">
                      BCA 1st
                    </option>

                    <option value="BCA 2nd">
                      BCA 2nd
                    </option>

                    <option value="BCA 3rd">
                      BCA 3rd
                    </option>

                  </select>

                </div>


                {/* Status */}

                <div className="md:col-span-2">

                  <label className="block text-sm font-medium text-dark mb-2">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  >

                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
                    </option>

                  </select>

                </div>

              </div>


              {/* Buttons */}

              <div className="flex justify-end gap-3 mt-6">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-3 border border-border rounded-lg text-text hover:bg-background"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700"
                >
                  Add Student
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  )
}

export default Students