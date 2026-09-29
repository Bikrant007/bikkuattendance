
import { useState } from 'react'
import {
  FaChartBar,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch
} from 'react-icons/fa'

const Reports = () => {

  const reports = [
    {
      id: 1,
      studentId: 'ST001',
      name: 'Ram Sharma',
      className: 'BCA 1st',
      subject: 'Programming',
      totalClasses: 20,
      present: 18,
      absent: 2
    },
    {
      id: 2,
      studentId: 'ST002',
      name: 'Sita Thapa',
      className: 'BCA 2nd',
      subject: 'Web Development',
      totalClasses: 20,
      present: 17,
      absent: 3
    },
    {
      id: 3,
      studentId: 'ST003',
      name: 'Hari KC',
      className: 'BCA 3rd',
      subject: 'Database',
      totalClasses: 20,
      present: 14,
      absent: 6
    },
    {
      id: 4,
      studentId: 'ST004',
      name: 'Bikash Rai',
      className: 'BCA 3rd',
      subject: 'Database',
      totalClasses: 20,
      present: 12,
      absent: 8
    },
    {
      id: 5,
      studentId: 'ST005',
      name: 'Aayush Karki',
      className: 'BCA 3rd',
      subject: 'Web Development',
      totalClasses: 20,
      present: 16,
      absent: 4
    },
    {
      id: 6,
      studentId: 'ST006',
      name: 'Anisha Gurung',
      className: 'BCA 3rd',
      subject: 'Programming',
      totalClasses: 20,
      present: 19,
      absent: 1
    }
  ]

  const [search, setSearch] = useState('')
  const [classFilter, setClassFilter] = useState('')

  const filteredReports = reports.filter((report) => {

    const nameMatch = report.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const idMatch = report.studentId
      .toLowerCase()
      .includes(search.toLowerCase())

    const classMatch =
      classFilter === '' ||
      report.className === classFilter

    return (nameMatch || idMatch) && classMatch
  })


  // Statistics

  const totalClasses = reports.reduce(
    (sum, report) => sum + report.totalClasses,
    0
  )

  const totalPresent = reports.reduce(
    (sum, report) => sum + report.present,
    0
  )

  const totalAbsent = reports.reduce(
    (sum, report) => sum + report.absent,
    0
  )

  const averageAttendance =
    totalClasses === 0
      ? 0
      : Math.round(
          (totalPresent / totalClasses) * 100
        )


  return (
    <div className="p-2">

      {/* PAGE HEADER */}

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-dark">
          Attendance Reports
        </h1>

        <p className="text-muted mt-1">
          View student attendance reports
        </p>

      </div>


      {/* STATISTICS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        {/* Total Classes */}

        <div className="bg-card border border-border rounded-lg p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-muted text-sm">
                Total Classes
              </p>

              <h2 className="text-2xl font-bold text-dark mt-1">
                {totalClasses}
              </h2>

            </div>

            <FaChartBar
              className="text-primary"
              size={25}
            />

          </div>

        </div>


        {/* Present */}

        <div className="bg-card border border-border rounded-lg p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-muted text-sm">
                Present
              </p>

              <h2 className="text-2xl font-bold text-success mt-1">
                {totalPresent}
              </h2>

            </div>

            <FaCheckCircle
              className="text-success"
              size={25}
            />

          </div>

        </div>


        {/* Absent */}

        <div className="bg-card border border-border rounded-lg p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-muted text-sm">
                Absent
              </p>

              <h2 className="text-2xl font-bold text-danger mt-1">
                {totalAbsent}
              </h2>

            </div>

            <FaTimesCircle
              className="text-danger"
              size={25}
            />

          </div>

        </div>


        {/* Average */}

        <div className="bg-card border border-border rounded-lg p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-muted text-sm">
                Average Attendance
              </p>

              <h2 className="text-2xl font-bold text-secondary mt-1">
                {averageAttendance}%
              </h2>

            </div>

            <FaChartBar
              className="text-secondary"
              size={25}
            />

          </div>

        </div>

      </div>


      {/* FILTER */}

      <div className="bg-card border border-border rounded-lg p-5 mb-6">

        <div className="flex flex-col md:flex-row gap-4">

          {/* Search */}

          <div className="relative flex-1">

            <FaSearch
              className="absolute left-3 top-3 text-muted"
              size={14}
            />

            <input
              type="text"
              placeholder="Search student name or ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-border rounded-lg py-2 pl-9 pr-3 outline-none"
            />

          </div>


          {/* Class Filter */}

          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="border border-border rounded-lg px-4 py-2 outline-none"
          >

            <option value="">
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

            <option value="BBA 2nd">
              BBA 2nd
            </option>

          </select>

        </div>

      </div>


      {/* TABLE */}

      <div className="bg-card border border-border rounded-lg overflow-hidden">

        <div className="p-5 border-b border-border">

          <h2 className="text-lg font-semibold text-dark">
            Student Attendance
          </h2>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-background">

              <tr>

                <th className="text-left px-5 py-4 text-sm text-muted">
                  Student
                </th>

                <th className="text-left px-5 py-4 text-sm text-muted">
                  Class
                </th>

                <th className="text-left px-5 py-4 text-sm text-muted">
                  Subject
                </th>

                <th className="text-center px-5 py-4 text-sm text-muted">
                  Total
                </th>

                <th className="text-center px-5 py-4 text-sm text-muted">
                  Present
                </th>

                <th className="text-center px-5 py-4 text-sm text-muted">
                  Absent
                </th>

                <th className="text-left px-5 py-4 text-sm text-muted">
                  Attendance
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredReports.map((report) => {

                const percentage = Math.round(
                  (report.present / report.totalClasses) * 100
                )

                return (

                  <tr
                    key={report.id}
                    className="border-t border-border"
                  >

                    {/* Student */}

                    <td className="px-5 py-4">

                      <div className="font-medium text-dark">
                        {report.name}
                      </div>

                      <div className="text-sm text-muted">
                        {report.studentId}
                      </div>

                    </td>


                    {/* Class */}

                    <td className="px-5 py-4 text-sm">
                      {report.className}
                    </td>


                    {/* Subject */}

                    <td className="px-5 py-4 text-sm">
                      {report.subject}
                    </td>


                    {/* Total */}

                    <td className="px-5 py-4 text-center">
                      {report.totalClasses}
                    </td>


                    {/* Present */}

                    <td className="px-5 py-4 text-center text-success font-semibold">
                      {report.present}
                    </td>


                    {/* Absent */}

                    <td className="px-5 py-4 text-center text-danger font-semibold">
                      {report.absent}
                    </td>


                    {/* Attendance */}

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        <div className="w-24 bg-border rounded-full h-2">

                          <div
                            className={
                              percentage < 75
                                ? 'bg-danger h-2 rounded-full'
                                : 'bg-success h-2 rounded-full'
                            }
                            style={{
                              width: percentage + '%'
                            }}
                          />

                        </div>

                        <span className="text-sm font-semibold">
                          {percentage}%
                        </span>

                      </div>

                    </td>

                  </tr>

                )
              })}

            </tbody>

          </table>


          {/* NO DATA */}

          {filteredReports.length === 0 && (

            <div className="text-center py-10">

              <p className="text-muted">
                No student reports found.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default Reports

