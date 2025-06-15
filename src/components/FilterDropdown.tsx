import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { FilterOption } from '../types';
// import { Search } from 'lucide-react';

interface FilterDropdownProps {
  column: string;
  displayName: string;
  options: FilterOption[];
  selectedValues: number[];
  onChange: (column: string, values: number[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  column,
  displayName,
  options,
  selectedValues,
  onChange
}) => {
  const selectedObjects = options.filter(option => 
    selectedValues.includes(option.value)
  );

  const handleSelect = (selectedList: FilterOption[]) => {
    const values = selectedList.map(item => item.value);
    onChange(column, values);
  };

  const handleRemove = (selectedList: FilterOption[]) => {
    const values = selectedList.map(item => item.value);
    onChange(column, values);
  };

  return (
    <div className="min-w-[200px]">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {displayName}
      </label>
      <div className="relative">
        <Multiselect
          options={options}
          selectedValues={selectedObjects}
          onSelect={handleSelect}
          onRemove={handleRemove}
          displayValue="label"
          placeholder={`Select ${displayName.toLowerCase()}...`}
          showCheckbox={true}
          keepSearchTerm={false}
          hidePlaceholder={selectedObjects.length > 0}
          closeOnSelect={false}
          avoidHighlightFirstOption={true}
          style={{
            chips: {
              background: '#3B82F6',
              fontSize: '12px',
              color: 'white',
              borderRadius: '6px',
              padding: '2px 8px',
              margin: '2px'
            },
            searchBox: {
              border: '2px solid #E5E7EB',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '14px',
              minHeight: '44px',
              background: 'white'
            },
            inputField: {
              margin: '0',
              border: 'none',
              outline: 'none',
              fontSize: '14px'
            },
            option: {
              padding: '8px 12px',
              fontSize: '14px',
              borderBottom: '1px solid #F3F4F6'
            },
            optionContainer: {
              border: '2px solid #E5E7EB',
              borderRadius: '8px',
              marginTop: '4px',
              maxHeight: '200px',
              background: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }
          }}
        />
      </div>
    </div>
  );
};

export default FilterDropdown;