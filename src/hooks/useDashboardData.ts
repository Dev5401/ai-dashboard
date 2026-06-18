import { useState, useEffect } from 'react';

import type {
  RevenueDataPoint,
  UserData,
  TrafficSource,
  ActivityLog,
  DashboardMetrics,
} from '../data/types';

import {
  revenueData,
  userData,
  trafficSources,
  activityLog,
  dashboardMetrics,
} from '../data/mockData';

interface DashboardData {
  revenue: RevenueDataPoint[];
  users: UserData[];
  traffic: TrafficSource[];
  activity: ActivityLog[];
  metrics: DashboardMetrics;
  loading: boolean;
}

export function useDashboardData(): DashboardData {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return {
    revenue: revenueData,
    users: userData,
    traffic: trafficSources,
    activity: activityLog,
    metrics: dashboardMetrics,
    loading,
  };
}
