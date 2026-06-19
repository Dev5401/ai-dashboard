import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { TrafficSource } from '../data/types';
import { useTheme } from '../contexts/useTheme';
import { formatRevenue } from '../utils/formatRevenue';

interface TrafficSourceChartProps {
  data: TrafficSource[];
}

const COLORS = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b'];

export default function TrafficSourceChart({ data }: TrafficSourceChartProps) {
  const { isDark } = useTheme();

  const textColor = isDark ? '#9ca3af' : '#6b7280';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Traffic Sources
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Where your users come from
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${Math.round((percent ?? 0) * 100)}%`
            }
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
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
          <Legend
            wrapperStyle={{ color: textColor }}
            align="center"
            verticalAlign="bottom"
            height={36}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
