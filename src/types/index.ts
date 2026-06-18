export interface User {
  id: string;
  name: string;
  email: string;
}

export interface DashboardMetric {
  label: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
}

export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}
