import RevenueChart from './RevenueChart';
import UserGrowthChart from './UserGrowthChart';
import type { RevenueDataPoint } from '../data/types';

interface ChartsGridProps {
  data: RevenueDataPoint[];
}

export default function ChartsGrid({ data }: ChartsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <RevenueChart data={data} />
      <UserGrowthChart data={data} />
    </div>
  );
}
