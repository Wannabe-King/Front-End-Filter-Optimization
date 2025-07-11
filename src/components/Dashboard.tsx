import React, { useState, useMemo, useCallback } from "react";
import FilterPanel from "./FilterPanel";
import DataTable from "./DataTable";
import { DataRow, FilterState } from "../types";
import { generateSampleData } from "../utils/dataGenerator";
import { applyFilters } from "../utils/filterUtils";
import GenerateData from "./generateData";

const Dashboard: React.FC = () => {
  const [rawData, setData] = useState<DataRow[]>(generateSampleData());
  // Initialize radom sample data
  // const rawData = useMemo(() => generateSampleData(), []);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    number: [],
    mod3: [],
    mod4: [],
    mod5: [],
    mod6: [],
  });

  // Apply filters to get filtered data
  const filteredData = useMemo(() => {
    return applyFilters(rawData, filters);
  }, [rawData, filters]);

  // Handle filter changes
  const handleFilterChange = useCallback((column: string, values: number[]) => {
    setFilters((prev) => ({
      ...prev,
      [column]: values,
    }));
  }, []);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setFilters({
      number: [],
      mod3: [],
      mod4: [],
      mod5: [],
      mod6: [],
    });
  }, []);

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      totalRecords: rawData.length,
      filteredRecords: filteredData.length,
      filterPercentage:
        rawData.length > 0
          ? ((filteredData.length / rawData.length) * 100).toFixed(1)
          : "0",
    };
  }, [rawData.length, filteredData.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {" "}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Business Intelligence Dashboard
                </h1>
                <p className="text-gray-600 text-sm">
                  Advanced filtering and data analysis platform
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  Total Records
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stats.totalRecords.toLocaleString()}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  Filtered
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {stats.filteredRecords.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 justify-center flex">
          <GenerateData onDataUpdate={setData} />
        
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <FilterPanel
          data={rawData}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        <DataTable data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
