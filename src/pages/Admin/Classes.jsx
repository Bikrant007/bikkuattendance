
import { useState } from 'react'

import {
  FaChalkboard,
  FaUsers,
  FaBook,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from 'react-icons/fa'

const Classes = () => {

  // ================= CLASS DATA =================

  const [classes, setClasses] = useState([
    {
      id: 1,
      className: 'BCA 1st',
      program: 'BCA',
      semester: '1st Semester',
      section: 'A',
      academicYear: '2026',
      classTeacher: 'Ram Sharma',
      students: 40,
      subjects: 6,
      attendance: 88
    },
    {
      id: 2,
      className: 'BCA 2nd',
      program: 'BCA',
      semester: '2nd Semester',
      section: 'A',
      academicYear: '2026',
      classTeacher: 'Hari KC',
      students: 35,
      subjects: 6,
      attendance: 84
    },
    {
      id: 3,
      className: 'BCA 3rd',
      program: 'BCA',
      semester: '3rd Semester',
      section: 'A',
      academicYear: '2026',
      classTeacher: 'Bikash Rai',
      students: 38,
      subjects: 7,
      attendance: 79
    },
    {
      id: 4,
      className: 'BBA 2nd',
      program: 'BBA',
      semester: '2nd Semester',
      section: 'A',
      academicYear: '2026',
      classTeacher: 'Sita Thapa',
      students: 42,
      subjects: 6,
      attendance: 91
    }
  ])


  // ================= SEARCH =================

  const [search, setSearch] = useState('')


  // ================= FILTER =================

  const [programFilter, setProgramFilter] = useState('All')


  // ================= MODAL =================

  const [showModal, setShowModal] = useState(false)


  // ================= FORM =================

  const [formData, setFormData] = useState({
    className: '',
    program: '',
    semester: '',
    section: '',
    academicYear: '',
    classTeacher: ''
  })


  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  // ================= ADD CLASS =================

  const handleSubmit = (e) => {

    e.preventDefault()

    const newClass = {

      id: Date.now(),

      className: formData.className,

      program: formData.program,

      semester: formData.semester,

      section: formData.section,

      academicYear: formData.academicYear,

      classTeacher: formData.classTeacher,

      students: 0,

      subjects: 0,

      attendance: 0

    }


    setClasses([
      ...classes,
      newClass
    ])


    // Reset form

    setFormData({
      className: '',
      program: '',
      semester: '',
      section: '',
      academicYear: '',
      classTeacher: ''
    })

    setShowModal(false)

  }


  // ================= DELETE CLASS =================

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this class?'
    )

    if (!confirmDelete) return


    setClasses(
      classes.filter(
        (item) => item.id !== id
      )
    )

  }


  // ================= FILTER CLASSES =================

  const filteredClasses = classes.filter((item) => {

    const matchesSearch =
      item.className
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.program
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.classTeacher
        .toLowerCase()
        .includes(search.toLowerCase())


    const matchesProgram =
      programFilter === 'All' ||
      item.program === programFilter


    return (
      matchesSearch &&
      matchesProgram
    )

  })


  // ================= STATISTICS =================

  const totalClasses = classes.length

  const totalStudents = classes.reduce(
    (total, item) => total + item.students,
    0
  )

  const totalSubjects = classes.reduce(
    (total, item) => total + item.subjects,
    0
  )


  return (

    <div>


      {/* ================= HEADER ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-dark">
            Classes
          </h1>

          <p className="text-muted mt-2">
            Manage all classes and sections in the college.
          </p>

        </div>


        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
        >

          <FaPlus />

          Add Class

        </button>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">


        {/* Total Classes */}

        <div className="bg-white border border-border rounded-xl p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted">
                Total Classes
              </p>

              <h2 className="text-3xl font-bold text-dark mt-2">
                {totalClasses}
              </h2>

            </div>


            <div className="w-12 h-12 rounded-lg bg-indigo-100 text-primary flex items-center justify-center">

              <FaChalkboard />

            </div>

          </div>

        </div>


        {/* Total Students */}

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


            <div className="w-12 h-12 rounded-lg bg-teal-100 text-secondary flex items-center justify-center">

              <FaUsers />

            </div>

          </div>

        </div>


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


            <div className="w-12 h-12 rounded-lg bg-amber-100 text-accent flex items-center justify-center">

              <FaBook />

            </div>

          </div>

        </div>

      </div>


      {/* ================= SEARCH & FILTER ================= */}

      <div className="bg-white border border-border rounded-xl p-5 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          {/* Search */}

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />

            <input
              type="text"
              placeholder="Search class..."
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

        </div>

      </div>


      {/* ================= CLASS CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredClasses.map((item) => (

          <div
            key={item.id}
            className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition"
          >


            {/* Card Header */}

            <div className="p-6 border-b border-border">

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-xl font-bold text-dark">
                    {item.className}
                  </h2>

                  <p className="text-sm text-muted mt-1">
                    {item.program} • Section {item.section}
                  </p>

                </div>


                <span className="px-3 py-1 bg-indigo-100 text-primary text-xs font-semibold rounded-full">
                  {item.academicYear}
                </span>

              </div>

            </div>


            {/* Card Body */}

            <div className="p-6">


              {/* Semester */}

              <div className="flex justify-between mb-4">

                <span className="text-sm text-muted">
                  Semester
                </span>

                <span className="text-sm font-semibold text-dark">
                  {item.semester}
                </span>

              </div>


              {/* Class Teacher */}

              <div className="flex justify-between mb-4">

                <span className="text-sm text-muted">
                  Class Teacher
                </span>

                <span className="text-sm font-semibold text-dark">
                  {item.classTeacher}
                </span>

              </div>


              {/* Students */}

              <div className="flex justify-between mb-4">

                <span className="text-sm text-muted">
                  Students
                </span>

                <span className="text-sm font-semibold text-dark">
                  {item.students}
                </span>

              </div>


              {/* Subjects */}

              <div className="flex justify-between mb-5">

                <span className="text-sm text-muted">
                  Subjects
                </span>

                <span className="text-sm font-semibold text-dark">
                  {item.subjects}
                </span>

              </div>


              {/* Attendance */}

              <div className="mb-5">

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-muted">
                    Attendance
                  </span>

                  <span
                    className={`font-semibold ${
                      item.attendance >= 75
                        ? 'text-success'
                        : 'text-danger'
                    }`}
                  >
                    {item.attendance}%
                  </span>

                </div>


                <div className="h-2 bg-gray-100 rounded-full">

                  <div
                    className={`h-2 rounded-full ${
                      item.attendance >= 75
                        ? 'bg-success'
                        : 'bg-danger'
                    }`}
                    style={{
                      width: `${item.attendance}%`
                    }}
                  />

                </div>

              </div>


              {/* Actions */}

              <div className="flex items-center justify-between pt-4 border-t border-border">


                <button
                  className="flex items-center gap-2 px-3 py-2 text-secondary hover:bg-teal-50 rounded-lg text-sm"
                  title="View"
                >

                  <FaEye />

                  View

                </button>


                <button
                  className="p-2 text-primary hover:bg-indigo-50 rounded-lg"
                  title="Edit"
                >

                  <FaEdit />

                </button>


                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-danger hover:bg-red-50 rounded-lg"
                  title="Delete"
                >

                  <FaTrash />

                </button>

              </div>

            </div>

          </div>

        ))}


        {/* No classes */}

        {filteredClasses.length === 0 && (

          <div className="col-span-full text-center py-10 text-muted">

            No classes found.

          </div>

        )}

      </div>


      {/* ================= ADD CLASS MODAL ================= */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-5 z-50">

          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">


            {/* Modal Header */}

            <div className="flex items-center justify-between p-6 border-b border-border">

              <div>

                <h2 className="text-xl font-bold text-dark">
                  Add Class
                </h2>

                <p className="text-sm text-muted mt-1">
                  Add a new class to the system.
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


                {/* Class Name */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Class Name
                  </label>

                  <input
                    type="text"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    placeholder="BCA 1st"
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


                {/* Section */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Section
                  </label>

                  <select
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  >

                    <option value="">
                      Select Section
                    </option>

                    <option value="A">
                      A
                    </option>

                    <option value="B">
                      B
                    </option>

                    <option value="C">
                      C
                    </option>

                  </select>

                </div>


                {/* Academic Year */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Academic Year
                  </label>

                  <input
                    type="text"
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleChange}
                    placeholder="2026"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

                </div>


                {/* Class Teacher */}

                <div>

                  <label className="block text-sm font-medium text-dark mb-2">
                    Class Teacher
                  </label>

                  <input
                    type="text"
                    name="classTeacher"
                    value={formData.classTeacher}
                    onChange={handleChange}
                    placeholder="Teacher name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                  />

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
                  Add Class
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  )
}

export default Classes

