import { useFilter } from '../contexts/FilterContext';

export default function DateRangePicker() {
  const { startDate, endDate, setDateRange } = useFilter();

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value, endDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(startDate, e.target.value);
  };

  const handleReset = () => {
    setDateRange('2023-01-01', '2023-12-31');
  };

  return (
    <div className="flex items-end gap-2 sm:gap-3 flex-wrap">
      {/* Start Date */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 dark:text-gray-400 mb-1">
          From
        </label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          max={endDate}
          className="px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 dark:text-gray-400 mb-1">
          To
        </label>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate}
          className="px-2 sm:px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
      >
        Reset
      </button>

      {/* Display date range - hidden on small screens */}
      <div className="hidden sm:block text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {new Date(startDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })}{' '}
        -{' '}
        {new Date(endDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })}
      </div>
    </div>
  );
}
