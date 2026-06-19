import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { RevenueDataPoint } from '../data/types';
import { useTheme } from '../contexts/useTheme';
import { formatRevenue } from '../utils/formatRevenue';

interface MonthlyComparisonChartProps {
  data: RevenueDataPoint[];
}

export default function MonthlyComparisonChart({
  data,
}: MonthlyComparisonChartProps) {
  const { isDark } = useTheme();

  const textColor = isDark ? '#9ca3af' : '#6b7280';
  const gridColor = isDark ? '#374151' : '#e5e7eb';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Monthly Comparison
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Revenue vs Users acquired each month
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
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
            yAxisId="left"
            label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            stroke={textColor}
            style={{ fontSize: '12px' }}
            yAxisId="right"
            orientation="right"
            label={{ value: 'Users', angle: 90, position: 'insideRight' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: isDark ? '#f3f4f6' : '#111827',
            }}
            labelStyle={{ color: isDark ? '#f3f4f6' : '#111827' }}
            formatter={(value: any) => formatRevenue(value)}
          />
          <Legend wrapperStyle={{ color: textColor }} />
          <Bar
            yAxisId="left"
            dataKey="revenue"
            fill="#6366f1"
            radius={[8, 8, 0, 0]}
            isAnimationActive={true}
          />
          <Bar
            yAxisId="right"
            dataKey="users"
            fill="#06b6d4"
            radius={[8, 8, 0, 0]}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
