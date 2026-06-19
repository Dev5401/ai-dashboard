import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { RevenueDataPoint } from '../data/types';
import { useTheme } from '../contexts/useTheme';
import { formatRevenue } from '../utils/formatRevenue';

interface UserGrowthChartProps {
  data: RevenueDataPoint[];
}

export default function UserGrowthChart({ data }: UserGrowthChartProps) {
  const { isDark } = useTheme();

  const textColor = isDark ? '#9ca3af' : '#6b7280';
  const gridColor = isDark ? '#374151' : '#e5e7eb';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          User Growth
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          New users acquired each month
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="date"
            stroke={textColor}
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke={textColor}
            style={{ fontSize: '12px' }}
            label={{ value: 'Users', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
              color: isDark ? '#f3f4f6' : '#111827',
            }}
            formatter={(value: any) => formatRevenue(value)}
            labelStyle={{ color: isDark ? '#f3f4f6' : '#111827' }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#06b6d4"
            fillOpacity={1}
            fill="url(#colorUsers)"
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
