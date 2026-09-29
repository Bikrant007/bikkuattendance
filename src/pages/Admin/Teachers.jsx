
import { useState } from 'react'

import {
  FaChalkboardTeacher,
  FaUserCheck,
  FaUserTimes,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from 'react-icons/fa'

const Teachers = () => {

  // Teacher data
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      teacherId: 'T001',
      name: 'Ram Sharma',
      email: 'ram@gmail.com',
      department: 'Computer Science',
      subject: 'Web Development',
      className: 'BCA 3rd',
      status: 'Active'
    },
    {
      id: 2,
      teacherId: 'T002',
      name: 'Sita Thapa',
      email: 'sita@gmail.com',
      department: 'Management',
      subject: 'Accounting',
      className: 'BBA 2nd',
      status: 'Active'
    },
    {
      id: 3,
      teacherId: 'T003',
      name: 'Hari KC',
      email: 'hari@gmail.com',
      department: 'Computer Science',
      subject: 'Database',
      className: 'BCA 2nd',
      status: 'Active'
    },
    {
      id: 4,
      teacherId: 'T004',
      name: 'Bikash Rai',
      email: 'bikash@gmail.com',
      department: 'Mathematics',
      subject: 'Mathematics',
      className: 'BCA 1st',
      status: 'Inactive'
    }
  ])

  // Search
  const [search, setSearch] = useState('')

  // Filters
  const [departmentFilter, setDepartmentFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  // Modal
  const [showModal, setShowModal] = useState(false)

  // Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teacherId: '',
    department: '',
    subject: '',
    className: '',
    status: 'Active'
  })


  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  // Add teacher
  const handleSubmit = (e) => {
    e.preventDefault()

    const newTeacher = {
      id: Date.now(),
      teacherId: formData.teacherId,
      name: formData.name,
      email: formData.email,
      department: formData.department,
      subject: formData.subject,
      className: formData.className,
      status: formData.status
    }

    setTeachers([
      ...teachers,
      newTeacher
    ])

    // Reset form
    setFormData({
      name: '',
      email: '',
      teacherId: '',
      department: '',
      subject: '',
      className: '',
      status: 'Active'
    })

    setShowModal(false)
  }


  // Delete teacher
  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this teacher?'
    )

    if (!confirmDelete) return

    setTeachers(
      teachers.filter(
        (teacher) => teacher.id !== id
      )
    )
  }


  // Filter teachers
  const filteredTeachers = teachers.filter((teacher) => {

    const matchesSearch =
      teacher.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      teacher.teacherId
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      teacher.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      teacher.subject
        .toLowerCase()
        .includes(search.toLowerCase())


    const matchesDepartment =
      departmentFilter === 'All' ||
      teacher.department === departmentFilter


    const matchesStatus =
      statusFilter === 'All' ||
      teacher.status === statusFilter


    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    )
  })


  // Statistics
  const totalTeachers = teachers.length

  const activeTeachers = teachers.filter(
    teacher => teacher.status === 'Active'
  ).length

  const inactiveTeachers = teachers.filter(
    teacher => teacher.status === 'Inactive'
  ).length


  return (
    <div>

      {/* ================= HEADER ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-dark">
            Teachers
          </h1>

          <p className="text-muted mt-2">
            Manage all teachers in the college.
          </p>

        </div>


        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          <FaPlus />
          Add Teacher
        </button>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">


        {/* Total Teachers */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Total Teachers
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {totalTeachers}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-indigo-100 text-primary flex items-center justify-center">

              <FaChalkboardTeacher />

            </div>

          </div>

        </div>


        {/* Active Teachers */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Active Teachers
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {activeTeachers}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-green-100 text-success flex items-center justify-center">

              <FaUserCheck />

            </div>

          </div>

        </div>


        {/* Inactive Teachers */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Inactive Teachers
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {inactiveTeachers}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-red-100 text-danger flex items-center justify-center">

              <FaUserTimes />

            </div>

          </div>

        </div>

      </div>


      {/* ================= SEARCH & FILTER ================= */}

      <div className="bg-white border border-border rounded-xl p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


          {/* Search */}

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

            <input
              type="text"
              placeholder="Search teacher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          {/* Department Filter */}

          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
          >

            <option value="All">
              All Departments
            </option>

            <option value="Computer Science">
              Computer Science
            </option>

            <option value="Management">
              Management
            </option>

            <option value="Mathematics">
              Mathematics
            </option>

          </select>


          {/* Status Filter */}

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
          >

            <option value="All">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

        </div>

      </div>


      {/* ================= TEACHER TABLE ================= */}

      <div className="bg-white border border-border rounded-xl overflow-hidden">

        <div className="p-6 border-b border-border">

          <h2 className="text-xl font-semibold text-dark">
            Teacher List
          </h2>

          <p className="text-sm text-muted mt-1">
            Showing {filteredTeachers.length} teachers
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-background">

              <tr>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Teacher
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  ID
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Department
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Subject
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Class
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredTeachers.map((teacher) => (

                <tr
                  key={teacher.id}
                  className="border-t border-border hover:bg-background transition"
                >

                  {/* Teacher */}

                  <td className="px-6 py-4">

                    <div>

                      <p className="font-semibold text-dark">
                        {teacher.name}
                      </p>

                      <p className="text-sm text-muted">
                        {teacher.email}
                      </p>

                    </div>

                  </td>


                  {/* ID */}

                  <td className="px-6 py-4 text-text">
                    {teacher.teacherId}
                  </td>


                  {/* Department */}

                  <td className="px-6 py-4 text-text">
                    {teacher.department}
                  </td>


                  {/* Subject */}

                  <td className="px-6 py-4 text-text">
                    {teacher.subject}
                  </td>


                  {/* Class */}

                  <td className="px-6 py-4 text-text">
                    {teacher.className}
                  </td>


                  {/* Status */}

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        teacher.status === 'Active'
                          ? 'bg-green-100 text-success'
                          : 'bg-red-100 text-danger'
                      }`}
                    >

                      {teacher.status}

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
                        onClick={() => handleDelete(teacher.id)}
                        className="p-2 text-danger hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {/* No teachers */}

              {filteredTeachers.length === 0 && (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-10 text-muted"
                  >
                    No teachers found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* ================= ADD TEACHER MODAL ================= */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50">

          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">


            {/* Modal Header */}

            <div className="flex items-center justify-between p-6 border-b border-border">

              <div>

                <h2 className="text-xl font-bold text-dark">
                  Add Teacher
                </h2>

                <p className="text-sm text-muted mt-1">
                  Add a new teacher to the system.
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
                    Teacher Name
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


                {/* Teacher ID */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Teacher ID
                  </label>

                  <input
                    type="text"
                    name="teacherId"
                    value={formData.teacherId}
                    onChange={handleChange}
                    placeholder="T001"
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
                    placeholder="teacher@gmail.com"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Department */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Department
                  </label>

                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  >

                    <option value="">
                      Select Department
                    </option>

                    <option value="Computer Science">
                      Computer Science
                    </option>

                    <option value="Management">
                      Management
                    </option>

                    <option value="Mathematics">
                      Mathematics
                    </option>

                  </select>

                </div>


                {/* Subject */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Web Development"
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

                    <option value="BBA 1st">
                      BBA 1st
                    </option>

                    <option value="BBA 2nd">
                      BBA 2nd
                    </option>

                    <option value="BBA 3rd">
                      BBA 3rd
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
                  Add Teacher
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  )
}

export default Teachers

