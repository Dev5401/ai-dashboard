import { useState, useMemo } from 'react';

type SortDirection = 'asc' | 'desc' | null;

export function useTableSort<T extends Record<string, any>>(
  data: T[],
  defaultSortKey?: keyof T
) {
  const [sortKey, setSortKey] = useState<keyof T | null>(
    defaultSortKey || null
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sort the data
  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      // Handle strings
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      // Handle numbers
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
  }, [data, sortKey, sortDirection]);

  // Paginate the sorted data
  const paginatedData = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIdx, startIdx + itemsPerPage);
  }, [sortedData, currentPage]);

  // Total pages
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  // Handle column click
  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      // If clicking same column, toggle direction or clear
      setSortDirection(
        sortDirection === 'asc'
          ? 'desc'
          : sortDirection === 'desc'
            ? null
            : 'asc'
      );
      if (sortDirection === null) {
        setSortKey(null);
      }
    } else {
      // New column, start with ascending
      setSortKey(key);
      setSortDirection('asc');
    }
    setCurrentPage(1); // Reset to page 1 when sorting
  };

  return {
    data: paginatedData,
    sortKey,
    sortDirection,
    currentPage,
    totalPages,
    handleSort,
    goToPage: setCurrentPage,
  };
}
