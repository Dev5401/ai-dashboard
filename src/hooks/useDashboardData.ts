import { useState, useEffect, useMemo } from 'react';
import {
  revenueData,
  userData,
  trafficSources,
  activityLog,
} from '../data/mockData';
import type {
  RevenueDataPoint,
  UserData,
  TrafficSource,
  ActivityLog,
  DashboardMetrics,
} from '../data/types';
import { useFilter } from '../contexts/FilterContext';

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
  const { startDate, endDate } = useFilter();

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [startDate, endDate]);

  // Filter revenue data by date range
  const filteredRevenue = useMemo(() => {
    const monthMap: { [key: string]: RevenueDataPoint } = {};

    // Create a map of month names to data
    revenueData.forEach((item) => {
      monthMap[item.date] = item;
    });

    // Get month range from dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    const result: RevenueDataPoint[] = [];

    for (let d = new Date(start); d <= end; d.setMonth(d.getMonth() + 1)) {
      const monthName = d.toLocaleString('default', { month: 'short' });
      if (monthMap[monthName]) {
        result.push(monthMap[monthName]);
      }
    }

    return result.length > 0 ? result : revenueData;
  }, [startDate, endDate]);

  // Calculate metrics from filtered revenue data
  const calculatedMetrics = useMemo(() => {
    const totalRevenue = filteredRevenue.reduce(
      (sum, item) => sum + item.revenue,
      0
    );
    const totalUsers = filteredRevenue.reduce(
      (sum, item) => sum + item.users,
      0
    );

    return {
      totalRevenue,
      totalUsers,
      conversionRate: 3.24,
      churnRate: 1.8,
    };
  }, [filteredRevenue]);

  return {
    revenue: filteredRevenue,
    users: userData,
    traffic: trafficSources,
    activity: activityLog,
    metrics: calculatedMetrics,
    loading,
  };
}
