import React from 'react';
import DataTableComponent from 'react-data-table-component';
import { DataRow } from '../types';
import { getColumnDisplayName } from '../utils/filterUtils';

interface DataTableProps {
  data: DataRow[];
  loading?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ data, loading = false }) => {
  const columns = [
    {
      name: getColumnDisplayName('number'),
      selector: (row: DataRow) => row.number,
      sortable: true,
      width: '120px',
      cell: (row: DataRow) => (
        <div className="font-mono text-blue-600 font-semibold">
          {row.number}
        </div>
      )
    },
    {
      name: getColumnDisplayName('mod3'),
      selector: (row: DataRow) => row.mod3,
      sortable: true,
      width: '120px',
      cell: (row: DataRow) => (
        <div className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
          {row.mod3}
        </div>
      )
    },
    {
      name: getColumnDisplayName('mod4'),
      selector: (row: DataRow) => row.mod4,
      sortable: true,
      width: '120px',
      cell: (row: DataRow) => (
        <div className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {row.mod4}
        </div>
      )
    },
    {
      name: getColumnDisplayName('mod5'),
      selector: (row: DataRow) => row.mod5,
      sortable: true,
      width: '120px',
      cell: (row: DataRow) => (
        <div className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
          {row.mod5}
        </div>
      )
    },
    {
      name: getColumnDisplayName('mod6'),
      selector: (row: DataRow) => row.mod6,
      sortable: true,
      width: '120px',
      cell: (row: DataRow) => (
        <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {row.mod6}
        </div>
      )
    }
  ];

  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
        backgroundColor: '#F8FAFC',
        borderBottom: '2px solid #E2E8F0'
      },
    },
    headRow: {
      style: {
        backgroundColor: '#F1F5F9',
        borderBottom: '2px solid #E2E8F0',
        fontWeight: '600',
        fontSize: '14px',
        color: '#334155'
      },
    },
    headCells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '12px',
        paddingBottom: '12px'
      },
    },
    rows: {
      style: {
        minHeight: '60px',
        '&:hover': {
          backgroundColor: '#F8FAFC',
          cursor: 'pointer'
        }
      },
      stripedStyle: {
        backgroundColor: '#FAFAFA'
      }
    },
    pagination: {
      style: {
        borderTop: '2px solid #E2E8F0',
        minHeight: '56px'
      },
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
        <h2 className="text-xl font-bold text-white">Data Analysis Results</h2>
        <p className="text-blue-100 text-sm mt-1">
          Showing {data.length} records with applied filters
        </p>
      </div>
      
      <DataTableComponent
        columns={columns}
        data={data}
        pagination
        paginationPerPage={100}
        paginationRowsPerPageOptions={[20, 50, 100, 200]}
        fixedHeader
        fixedHeaderScrollHeight="400px"
        striped
        highlightOnHover
        progressPending={loading}
        progressComponent={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading data...</span>
          </div>
        }
        noDataComponent={
          <div className="flex items-center justify-center p-8 text-gray-500">
            <div className="text-center">
              <p className="text-lg font-medium">No data matches your filters</p>
              <p className="text-sm">Try adjusting your filter selection</p>
            </div>
          </div>
        }
        customStyles={customStyles}
      />
    </div>
  );
};

export default DataTable;