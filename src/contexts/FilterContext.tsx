import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface FilterContextType {
  startDate: string;
  endDate: string;
  setDateRange: (start: string, end: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2023-12-31');

  const setDateRange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <FilterContext.Provider value={{ startDate, endDate, setDateRange }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within FilterProvider');
  }
  return context;
}
