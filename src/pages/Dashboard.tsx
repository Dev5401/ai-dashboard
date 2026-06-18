import { useDashboardData } from '../hooks/useDashboardData';
import MetricsGrid from '../components/MetricsGrid';
import ChartsGrid from '../components/ChartsGrid';

export default function Dashboard() {
  const { metrics, revenue, loading } = useDashboardData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      {/* Metrics */}
      <MetricsGrid metrics={metrics} />

      {/* Charts */}
      <ChartsGrid data={revenue} />

      {/* Coming next */}
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          💡 More charts (pie, bar) and data tables coming on Day 7–10
        </p>
      </div>
    </div>
  );
}
