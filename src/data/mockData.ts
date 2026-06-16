import type {
  RevenueDataPoint,
  UserData,
  TrafficSource,
  ActivityLog,
  DashboardMetrics,
} from './types'

// 12 months of revenue data
export const revenueData: RevenueDataPoint[] = [
  { date: 'Jan', revenue: 4000, users: 240 },
  { date: 'Feb', revenue: 3000, users: 221 },
  { date: 'Mar', revenue: 2000, users: 229 },
  { date: 'Apr', revenue: 2780, users: 200 },
  { date: 'May', revenue: 1890, users: 229 },
  { date: 'Jun', revenue: 2390, users: 200 },
  { date: 'Jul', revenue: 3490, users: 321 },
  { date: 'Aug', revenue: 4200, users: 450 },
  { date: 'Sep', revenue: 3800, users: 380 },
  { date: 'Oct', revenue: 4500, users: 520 },
  { date: 'Nov', revenue: 5200, users: 640 },
  { date: 'Dec', revenue: 6100, users: 780 },
]

// Mock users
export const userData: UserData[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    joinDate: '2023-01-15',
    status: 'active',
    totalSpent: 1250,
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    joinDate: '2023-02-20',
    status: 'active',
    totalSpent: 890,
  },
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol@example.com',
    joinDate: '2023-03-10',
    status: 'inactive',
    totalSpent: 450,
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@example.com',
    joinDate: '2023-04-05',
    status: 'active',
    totalSpent: 2100,
  },
  {
    id: '5',
    name: 'Eve Davis',
    email: 'eve@example.com',
    joinDate: '2023-05-12',
    status: 'active',
    totalSpent: 1670,
  },
  {
    id: '6',
    name: 'Frank Miller',
    email: 'frank@example.com',
    joinDate: '2023-06-08',
    status: 'inactive',
    totalSpent: 320,
  },
  {
    id: '7',
    name: 'Grace Lee',
    email: 'grace@example.com',
    joinDate: '2023-07-22',
    status: 'active',
    totalSpent: 3400,
  },
  {
    id: '8',
    name: 'Henry Wilson',
    email: 'henry@example.com',
    joinDate: '2023-08-30',
    status: 'active',
    totalSpent: 1950,
  },
]

// Traffic sources
export const trafficSources: TrafficSource[] = [
  { name: 'Organic', value: 4800, percentage: 40 },
  { name: 'Paid Ads', value: 3200, percentage: 27 },
  { name: 'Referral', value: 2100, percentage: 18 },
  { name: 'Direct', value: 1900, percentage: 15 },
]

// Activity log
export const activityLog: ActivityLog[] = [
  {
    id: '1',
    user: 'Alice Johnson',
    action: 'Purchased premium plan',
    timestamp: '2024-01-15 14:32',
    type: 'purchase',
  },
  {
    id: '2',
    user: 'Bob Smith',
    action: 'Logged in',
    timestamp: '2024-01-15 13:15',
    type: 'login',
  },
  {
    id: '3',
    user: 'Carol Williams',
    action: 'Created new account',
    timestamp: '2024-01-15 10:45',
    type: 'signup',
  },
  {
    id: '4',
    user: 'David Brown',
    action: 'Updated profile',
    timestamp: '2024-01-15 09:20',
    type: 'update',
  },
  {
    id: '5',
    user: 'Eve Davis',
    action: 'Purchased upgrade',
    timestamp: '2024-01-14 18:50',
    type: 'purchase',
  },
]

// Dashboard metrics summary
export const dashboardMetrics: DashboardMetrics = {
  totalRevenue: 43350,
  totalUsers: 3239,
  conversionRate: 3.24,
  churnRate: 1.8,
}
