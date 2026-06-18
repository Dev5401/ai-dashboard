import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import type { RevenueDataPoint } from '../data/types'
import { useTheme } from '../contexts/useTheme'
import { formatRevenue } from '../utils/formatRevenue'

interface RevenueChartProps {
  data: RevenueDataPoint[]
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const { isDark } = useTheme()

  // Colors adapt to dark mode
  const textColor = isDark ? '#9ca3af' : '#6b7280'
  const gridColor = isDark ? '#374151' : '#e5e7eb'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Revenue Trend
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Monthly revenue over the last 12 months
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="date"
            stroke={textColor}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke={textColor}
            style={{ fontSize: '12px' }}
            label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: isDark ? '#f3f4f6' : '#111827',
            }}
            formatter={formatRevenue}
            labelStyle={{ color: isDark ? '#f3f4f6' : '#111827' }}
          />
          <Legend wrapperStyle={{ color: textColor }} iconType="line" />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ fill: '#6366f1', r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
