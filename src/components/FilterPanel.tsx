import React from 'react';
import FilterDropdown from './FilterDropdown';
import { DataRow, FilterState, FilterOption } from '../types';
import { getFilterOptions, getColumnDisplayName } from '../utils/filterUtils';
// import { Filter, RefreshCw } from 'lucide-react';

interface FilterPanelProps {
  data: DataRow[];
  filters: FilterState;
  onFilterChange: (column: string, values: number[]) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  data,
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const columns = ['number', 'mod3', 'mod4', 'mod5', 'mod6'];
  
  const hasActiveFilters = Object.values(filters).some(values => values.length > 0);
  const activeFilterCount = Object.values(filters).reduce(
    (count, values) => count + (values.length > 0 ? 1 : 0), 0
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            {/* <Filter className="w-5 h-5 text-blue-600" /> */}
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Smart Filters</h2>
            <p className="text-sm text-gray-600">
              {activeFilterCount > 0 
                ? `${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} active`
                : 'No filters applied'
              }
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            {/* <RefreshCw className="w-4 h-4" /> */}
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {columns.map(column => {
          const options = getFilterOptions(data, column, filters);
          const selectedValues = filters[column] || [];
          
          return (
            <FilterDropdown
              key={column}
              column={column}
              displayName={getColumnDisplayName(column)}
              options={options}
              selectedValues={selectedValues}
              onChange={onFilterChange}
            />
          );
        })}
      </div>
      
      {hasActiveFilters && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Active Filters:</strong> {
              Object.entries(filters)
                .filter(([_, values]) => values.length > 0)
                .map(([column, values]) => 
                  `${getColumnDisplayName(column)}: ${values.join(', ')}`
                )
                .join(' | ')
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;