export const formatRevenue = (value: number): React.ReactNode => {
  return `$${value.toLocaleString()}`;
};
