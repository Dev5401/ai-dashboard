export interface RevenueDataPoint {
  date: string
  revenue: number
  users: number
}

export interface UserData {
  id: string
  name: string
  email: string
  joinDate: string
  status: 'active' | 'inactive'
  totalSpent: number
}

export interface TrafficSource {
  name: string
  value: number
  percentage: number
}

export interface ActivityLog {
  id: string
  user: string
  action: string
  timestamp: string
  type: 'login' | 'purchase' | 'signup' | 'update'
}

export interface DashboardMetrics {
  totalRevenue: number
  totalUsers: number
  conversionRate: number
  churnRate: number
}
