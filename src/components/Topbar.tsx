import { useTheme } from '../contexts/useTheme';
import DateRangePicker from './DateRangePicker';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 sm:px-6 gap-4">
      {/* Left: Menu button (visible on mobile) */}
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
        aria-label="Toggle sidebar"
      >
        <span className="text-xl">☰</span>
      </button>

      {/* Center: Date range picker (hidden on mobile, shown on tablet+) */}
      <div className="hidden md:flex flex-1">
        <DateRangePicker />
      </div>

      {/* Mobile date picker label */}
      <div className="md:hidden text-xs text-gray-600 dark:text-gray-400 flex-1">
        Filters
      </div>

      {/* Right: Dark mode toggle & user menu */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle dark mode"
        >
          <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
        </button>
        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-600 text-xs sm:text-sm">
          U
        </div>
      </div>
    </header>
  );
}
