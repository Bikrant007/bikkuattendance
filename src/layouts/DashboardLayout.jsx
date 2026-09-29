import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {

  return (

    <div className="min-h-screen bg-background flex">

      <Sidebar />

      <main className="flex-1 p-6 md:p-8">

        <Outlet />

      </main>

    </div>

  )
}

export default DashboardLayout