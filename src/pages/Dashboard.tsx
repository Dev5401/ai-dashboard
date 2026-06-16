import { useDashboardData } from '../hooks/useDashboardData'

export default function Dashboard() {
  const { metrics, loading } = useDashboardData()

  if (loading) {
    return <div className="text-gray-500">Loading...</div>
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Dashboard
      </h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm">
        <p className="text-gray-900 dark:text-white">
          Revenue: ${metrics.totalRevenue.toLocaleString()}
        </p>
        <p className="text-gray-900 dark:text-white">
          Users: {metrics.totalUsers.toLocaleString()}
        </p>
        <p className="text-gray-900 dark:text-white">
          Conversion: {metrics.conversionRate}%
        </p>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        Metrics and charts coming soon...
      </p>
    </div>
  )
}
