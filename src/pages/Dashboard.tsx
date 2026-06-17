import { useDashboardData } from '../hooks/useDashboardData'
import MetricsGrid from '../components/MetricsGrid'

export default function Dashboard() {
  const { metrics, loading } = useDashboardData()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    )
  }

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      {/* Metrics */}
      <MetricsGrid metrics={metrics} />

      {/* Coming next */}
      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          💡 Charts and data tables coming on Day 6–10
        </p>
      </div>
    </div>
  )
}
