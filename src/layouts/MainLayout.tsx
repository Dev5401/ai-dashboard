import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isDark, setIsDark] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleDarkMode = () => setIsDark(!isDark)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar
            onMenuClick={toggleSidebar}
            onDarkModeClick={toggleDarkMode}
            isDark={isDark}
          />
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
