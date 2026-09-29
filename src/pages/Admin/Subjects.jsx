
import { useState } from 'react'

import {
  FaBook,
  FaChalkboardTeacher,
  FaUsers,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from 'react-icons/fa'

const Subjects = () => {

  // ================= SUBJECT DATA =================

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      subjectCode: 'CSC101',
      subjectName: 'Programming',
      program: 'BCA',
      semester: '1st Semester',
      teacher: 'Ram Sharma',
      students: 40,
      status: 'Active'
    },
    {
      id: 2,
      subjectCode: 'CSC102',
      subjectName: 'Web Development',
      program: 'BCA',
      semester: '3rd Semester',
      teacher: 'Hari KC',
      students: 38,
      status: 'Active'
    },
    {
      id: 3,
      subjectCode: 'MGT101',
      subjectName: 'Accounting',
      program: 'BBA',
      semester: '2nd Semester',
      teacher: 'Sita Thapa',
      students: 42,
      status: 'Active'
    },
    {
      id: 4,
      subjectCode: 'MAT101',
      subjectName: 'Mathematics',
      program: 'BCA',
      semester: '1st Semester',
      teacher: 'Bikash Rai',
      students: 40,
      status: 'Inactive'
    }
  ])


  // ================= SEARCH =================

  const [search, setSearch] = useState('')


  // ================= FILTERS =================

  const [programFilter, setProgramFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')


  // ================= MODAL =================

  const [showModal, setShowModal] = useState(false)


  // ================= FORM =================

  const [formData, setFormData] = useState({
    subjectCode: '',
    subjectName: '',
    program: '',
    semester: '',
    teacher: '',
    status: 'Active'
  })


  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  // ================= ADD SUBJECT =================

  const handleSubmit = (e) => {

    e.preventDefault()

    const newSubject = {

      id: Date.now(),

      subjectCode: formData.subjectCode,

      subjectName: formData.subjectName,

      program: formData.program,

      semester: formData.semester,

      teacher: formData.teacher,

      students: 0,

      status: formData.status

    }


    setSubjects([
      ...subjects,
      newSubject
    ])


    // Reset form

    setFormData({
      subjectCode: '',
      subjectName: '',
      program: '',
      semester: '',
      teacher: '',
      status: 'Active'
    })

    setShowModal(false)

  }


  // ================= DELETE SUBJECT =================

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this subject?'
    )

    if (!confirmDelete) return


    setSubjects(
      subjects.filter(
        (subject) => subject.id !== id
      )
    )

  }


  // ================= FILTER SUBJECTS =================

  const filteredSubjects = subjects.filter((subject) => {

    const matchesSearch =
      subject.subjectCode
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      subject.subjectName
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      subject.teacher
        .toLowerCase()
        .includes(search.toLowerCase())


    const matchesProgram =
      programFilter === 'All' ||
      subject.program === programFilter


    const matchesStatus =
      statusFilter === 'All' ||
      subject.status === statusFilter


    return (
      matchesSearch &&
      matchesProgram &&
      matchesStatus
    )

  })


  // ================= STATISTICS =================

  const totalSubjects = subjects.length

  const activeSubjects = subjects.filter(
    subject => subject.status === 'Active'
  ).length

  const inactiveSubjects = subjects.filter(
    subject => subject.status === 'Inactive'
  ).length

  const totalStudents = subjects.reduce(
    (total, subject) => total + subject.students,
    0
  )


  return (

    <div>


      {/* ================= HEADER ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-dark">
            Subjects
          </h1>

          <p className="text-muted mt-2">
            Manage all subjects offered by the college.
          </p>

        </div>


        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
        >

          <FaPlus />

          Add Subject

        </button>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">


        {/* Total Subjects */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Total Subjects
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {totalSubjects}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-indigo-100 text-primary flex items-center justify-center">

              <FaBook />

            </div>

          </div>

        </div>


        {/* Active Subjects */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Active Subjects
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {activeSubjects}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-green-100 text-success flex items-center justify-center">

              <FaBook />

            </div>

          </div>

        </div>


        {/* Inactive Subjects */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Inactive Subjects
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {inactiveSubjects}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-red-100 text-danger flex items-center justify-center">

              <FaBook />

            </div>

          </div>

        </div>


        {/* Students */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Enrolled Students
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {totalStudents}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-teal-100 text-secondary flex items-center justify-center">

              <FaUsers />

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
              placeholder="Search subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

          </div>


          {/* Program Filter */}

          <select
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
          >

            <option value="All">
              All Programs
            </option>

            <option value="BCA">
              BCA
            </option>

            <option value="BBA">
              BBA
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


      {/* ================= SUBJECT TABLE ================= */}

      <div className="bg-white border border-border rounded-xl overflow-hidden">

        <div className="p-6 border-b border-border">

          <h2 className="text-xl font-semibold text-dark">
            Subject List
          </h2>

          <p className="text-sm text-muted mt-1">
            Showing {filteredSubjects.length} subjects
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-background">

              <tr>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Subject
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Code
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Program
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Semester
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Teacher
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-dark">
                  Students
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

              {filteredSubjects.map((subject) => (

                <tr
                  key={subject.id}
                  className="border-t border-border hover:bg-background transition"
                >


                  {/* Subject */}

                  <td className="px-6 py-4">

                    <p className="font-semibold text-dark">
                      {subject.subjectName}
                    </p>

                  </td>


                  {/* Code */}

                  <td className="px-6 py-4">

                    <span className="px-3 py-1 bg-indigo-100 text-primary rounded-md text-sm font-medium">
                      {subject.subjectCode}
                    </span>

                  </td>


                  {/* Program */}

                  <td className="px-6 py-4 text-text">
                    {subject.program}
                  </td>


                  {/* Semester */}

                  <td className="px-6 py-4 text-text">
                    {subject.semester}
                  </td>


                  {/* Teacher */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <FaChalkboardTeacher className="text-secondary" />

                      <span>
                        {subject.teacher}
                      </span>

                    </div>

                  </td>


                  {/* Students */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <FaUsers className="text-muted" />

                      <span>
                        {subject.students}
                      </span>

                    </div>

                  </td>


                  {/* Status */}

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        subject.status === 'Active'
                          ? 'bg-green-100 text-success'
                          : 'bg-red-100 text-danger'
                      }`}
                    >

                      {subject.status}

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
                        onClick={() => handleDelete(subject.id)}
                        className="p-2 text-danger hover:bg-red-50 rounded-lg"
                        title="Delete"
                      >

                        <FaTrash />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}


              {/* No subjects */}

              {filteredSubjects.length === 0 && (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-10 text-muted"
                  >

                    No subjects found.

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* ================= ADD SUBJECT MODAL ================= */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50">

          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">


            {/* Modal Header */}

            <div className="flex items-center justify-between p-6 border-b border-border">

              <div>

                <h2 className="text-xl font-bold text-dark">
                  Add Subject
                </h2>

                <p className="text-sm text-muted mt-1">
                  Add a new subject to the system.
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


                {/* Subject Code */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Subject Code
                  </label>

                  <input
                    type="text"
                    name="subjectCode"
                    value={formData.subjectCode}
                    onChange={handleChange}
                    placeholder="CSC101"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Subject Name */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Subject Name
                  </label>

                  <input
                    type="text"
                    name="subjectName"
                    value={formData.subjectName}
                    onChange={handleChange}
                    placeholder="Programming"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Program */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Program
                  </label>

                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  >

                    <option value="">
                      Select Program
                    </option>

                    <option value="BCA">
                      BCA
                    </option>

                    <option value="BBA">
                      BBA
                    </option>

                  </select>

                </div>


                {/* Semester */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Semester
                  </label>

                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  >

                    <option value="">
                      Select Semester
                    </option>

                    <option value="1st Semester">
                      1st Semester
                    </option>

                    <option value="2nd Semester">
                      2nd Semester
                    </option>

                    <option value="3rd Semester">
                      3rd Semester
                    </option>

                    <option value="4th Semester">
                      4th Semester
                    </option>

                    <option value="5th Semester">
                      5th Semester
                    </option>

                    <option value="6th Semester">
                      6th Semester
                    </option>

                  </select>

                </div>


                {/* Teacher */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Teacher
                  </label>

                  <input
                    type="text"
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    placeholder="Teacher name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Status */}

                <div>

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

                  Add Subject

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  )
}

export default Subjects

