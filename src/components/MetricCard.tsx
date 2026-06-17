interface MetricCardProps {
  label: string
  value: number | string
  format?: 'currency' | 'number' | 'percentage'
  change: number
  changeType: 'increase' | 'decrease'
}

export default function MetricCard({
  label,
  value,
  format = 'number',
  change,
  changeType,
}: MetricCardProps) {
  const formatValue = (val: number | string) => {
    if (typeof val === 'string') return val
    if (format === 'currency') return `$${val.toLocaleString()}`
    if (format === 'percentage') return `${val}%`
    return val.toLocaleString()
  }

  const isPositive = changeType === 'increase'
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600'
  const changeBgColor = isPositive
    ? 'bg-green-50 dark:bg-green-900/20'
    : 'bg-red-50 dark:bg-red-900/20'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      {/* Label */}
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        {label}
      </p>

      {/* Value */}
      <div className="flex items-baseline justify-between">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          {formatValue(value)}
        </h3>
      </div>

      {/* Change indicator */}
      <div
        className={`mt-4 inline-flex items-center gap-1 px-2 py-1 rounded ${changeBgColor}`}
      >
        <span className={`text-sm font-medium ${changeColor}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </span>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        vs last month
      </p>
    </div>
  )
}
