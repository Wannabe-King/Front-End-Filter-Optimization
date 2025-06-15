import { DataRow, FilterState, FilterOption } from '../types';

export const applyFilters = (data: DataRow[], filters: FilterState): DataRow[] => {
  return data.filter(row => {
    return Object.entries(filters).every(([column, selectedValues]) => {
      if (selectedValues.length === 0) return true;
      const columnValue = row[column as keyof DataRow] as number;
      return selectedValues.includes(columnValue);
    });
  });
};

export const getFilterOptions = (
  data: DataRow[], 
  targetColumn: string, 
  filters: FilterState
): FilterOption[] => {
  // Get filtered data excluding the target column
  const filtersExcludingTarget = { ...filters };
  delete filtersExcludingTarget[targetColumn];
  
  const filteredData = applyFilters(data, filtersExcludingTarget);
  
  // Get unique values for the target column from filtered data
  const uniqueValues = [...new Set(
    filteredData.map(row => row[targetColumn as keyof DataRow] as number)
  )].sort((a, b) => a - b);
  
  return uniqueValues.map(value => ({
    label: value.toString(),
    value: value
  }));
};

export const getColumnDisplayName = (column: string): string => {
  const displayNames: { [key: string]: string } = {
    number: 'Number',
    mod3: 'Modulo 3',
    mod4: 'Modulo 4', 
    mod5: 'Modulo 5',
    mod6: 'Modulo 6'
  };
  return displayNames[column] || column;
};