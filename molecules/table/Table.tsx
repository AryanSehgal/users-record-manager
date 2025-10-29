import { useState, ChangeEvent, ReactElement, ComponentType } from 'react';
import { List, useListRef } from 'react-window';
import { useTableData } from './hooks/useTableData';
import { TableRow } from './TableRow';
import { HealthFilter } from './HealthFilter';
import { SortIcon } from './SortIcon';
import { User } from '@/lib/types';
import { TableRowProps } from './types';
import './table.css';

export const Table = (): ReactElement => {
  const {
    data,
    sortedAndFilteredData,
    loading,
    error,
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    requestSort,
    sortConfig,
    setData
  } = useTableData<User>('/api/users');

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const listRef = useListRef(null);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allFilteredIds = sortedAndFilteredData.map(row => row.id);
      setSelectedIds(new Set(allFilteredIds));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleSelectRow = (id:string, isSelected:boolean) => {
    setSelectedIds(prev => {
      const newSelection = new Set(prev);
      if (isSelected) {
        newSelection.add(id);
      } else {
        newSelection.delete(id);
      }
      return newSelection;
    });
  };

  const toggleViewStatus = () => {
    if (selectedIds.size > 0) {
      const areSelectedRowsViewed = data.filter(row=>selectedIds.has(row.id)).every(row => row.viewed === true);
      let newData = [];

      if(areSelectedRowsViewed){
        newData = data.map(row =>
          selectedIds.has(row.id) ? { ...row, viewed: false } : row
        );
        console.log('Marking as unviewed:', [...selectedIds]);
      }else{
        newData = data.map(row =>
          selectedIds.has(row.id) ? { ...row, viewed: true } : row
        );
        console.log('Marking as viewed:', [...selectedIds]);
      }

      setData(newData);
      setSelectedIds(new Set()); // Clear selection after action
    }
  };

  const isSelectedAll = selectedIds.size > 0 && selectedIds.size === sortedAndFilteredData.length;
  const isIndeterminate = selectedIds.size > 0 && selectedIds.size < sortedAndFilteredData.length;

  if (loading) {
    return (
      <div className="loading-container" aria-live="polite">
        <div className="spinner"></div>
        <p>Loading data, please wait...</p>
      </div>
    );
  }

  if (error ) {
    return (
      <div className="error-container" aria-live="assertive" role="alert">
        <p>⚠️ Something went wrong:</p>
        <pre>{error}</pre>
      </div>
    );
  }

  // Future Scope: Take a columns config as a prop and render columns using it to make Table compnoent abolutely generic and resuable.
  // Currently the logic for rendering the table and logic specific to users table are coupled together. Pardon 😔
  return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search users"
        />
        <button onClick={toggleViewStatus} disabled={selectedIds.size === 0}>
          Toggle View Status
        </button>
      </div>

      <div className="table-wrapper" role="region" aria-live="polite" tabIndex={0}>
        <div className="users-table" style={{ width: '100%' }}>
          <div className="table-header">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={isSelectedAll}
              aria-label="Select all rows"
              aria-controls="user-list"
              className="table-header-cell "
            />
            <span className="table-header-cell">Name</span>
            <span className="table-header-cell">Location</span>
            <span className="table-header-cell">
              Health
              <HealthFilter filters={filters} setFilters={setFilters} />
            </span>
            <span className="table-header-cell" aria-sort={sortConfig.key === 'power' ? `${sortConfig.direction}ending` : 'none'}>
              <button className="sort-button" onClick={() => requestSort('power')} aria-label="Sort by power level">
                Power <SortIcon direction={sortConfig.key === 'power' ? sortConfig.direction : null} />
              </button>
            </span>
            <span className="table-header-cell">Viewed</span>
          </div>
        </div>
        <List<TableRowProps<User>>
          rowCount={sortedAndFilteredData.length}
          rowHeight={40}
          rowComponent={TableRow}  
          rowProps={{              
            data: sortedAndFilteredData,
            selectedIds,
            handleSelectRow,
          }}
          defaultHeight={600}
          style={{ width: '100%' }}
          listRef={listRef}
        />
      </div>
    </div>
  );
};
