import { useTheme } from '../contexts/useTheme';
import DateRangePicker from './DateRangePicker';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      {/* Left: Menu button */}
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Toggle sidebar"
      >
        <span className="text-xl">☰</span>
      </button>

      {/* Center: Date range picker */}
      <div className="flex-1 mx-8">
        <DateRangePicker />
      </div>

      {/* Right: Dark mode toggle & user menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle dark mode"
        >
          <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
        </button>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-600">
          U
        </div>
      </div>
    </header>
  );
}
