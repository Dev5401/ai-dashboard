export const formatRevenue = (value: number): React.ReactNode => {
  const num = typeof value === 'number' ? value : Number(value ?? 0);
  return `$${num.toLocaleString()}`;
};
