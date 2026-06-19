import RevenueChart from './RevenueChart';
import UserGrowthChart from './UserGrowthChart';
import MonthlyComparisonChart from './MonthlyComparisonChart';
import TrafficSourceChart from './TrafficSourceChart';
import type { RevenueDataPoint, TrafficSource } from '../data/types';

interface ChartsSectionProps {
  revenueData: RevenueDataPoint[];
  trafficData: TrafficSource[];
}

export default function ChartsSection({
  revenueData,
  trafficData,
}: ChartsSectionProps) {
  return (
    <div className="space-y-6">
      {/* Row 1: Trend charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={revenueData} />
        <UserGrowthChart data={revenueData} />
      </div>

      {/* Row 2: Comparison and traffic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyComparisonChart data={revenueData} />
        <TrafficSourceChart data={trafficData} />
      </div>
    </div>
  );
}
