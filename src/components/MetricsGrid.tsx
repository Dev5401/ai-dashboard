import MetricCard from './MetricCard';
import type { DashboardMetrics } from '../data/types';

interface MetricsGridProps {
  metrics: DashboardMetrics;
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        label="Total Revenue"
        value={metrics.totalRevenue}
        format="currency"
        change={12.5}
        changeType="increase"
      />

      <MetricCard
        label="Total Users"
        value={metrics.totalUsers}
        format="number"
        change={8.2}
        changeType="increase"
      />

      <MetricCard
        label="Conversion Rate"
        value={metrics.conversionRate}
        format="percentage"
        change={2.4}
        changeType="increase"
      />

      <MetricCard
        label="Churn Rate"
        value={metrics.churnRate}
        format="percentage"
        change={0.5}
        changeType="decrease"
      />
    </div>
  );
}
