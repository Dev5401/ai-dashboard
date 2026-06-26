import { useDashboardData } from '../hooks/useDashboardData';
import MetricsGrid from '../components/MetricsGrid';
import ChartsSection from '../components/ChartsSection';

export default function Dashboard() {
  const { metrics, revenue, traffic, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      {/* Metrics */}
      <MetricsGrid metrics={metrics} />

      {/* Charts */}
      <ChartsSection revenueData={revenue} trafficData={traffic} />

      {/* Coming next */}
      <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">
          💡 AI assistant sidebar with Claude API coming on Day 11–15
        </p>
      </div>
    </div>
  );
}
