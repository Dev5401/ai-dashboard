import { Link } from 'react-router-dom'
import type { NavigationItem } from '../types'

const navItems: NavigationItem[] = [
  { label: 'Dashboard', href: '/', icon: '📊' },
  { label: 'Analytics', href: '/analytics', icon: '📈' },
  { label: 'Users', href: '/users', icon: '👥' },
  { label: 'Reports', href: '/reports', icon: '📋' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
]

interface SidebarProps {
  isOpen: boolean
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gray-900 text-white transition-all duration-300 flex flex-col border-r border-gray-800`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-800">
        <span className={`font-bold ${isOpen ? 'text-lg' : 'text-xs'}`}>
          {isOpen ? 'AI Dash' : 'AD'}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            title={item.label}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="text-xs text-gray-400 text-center">v1.0.0</div>
      </div>
    </aside>
  )
}
