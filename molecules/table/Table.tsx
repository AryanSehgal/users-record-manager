import { useState, ChangeEvent, ReactElement, ComponentType } from 'react';
import { List, useListRef } from 'react-window';
import { useTableData } from './hooks/useTableData';
import { TableRow } from './TableRow';
import { HealthFilter } from './HealthFilter';
import { SortIcon } from './SortIcon';
import { Character } from '@/lib/types';
import {TableRowProps} from './types';


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
  } = useTableData<Character>('/api/users');

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

  const handleMarkAsViewed = () => {
    if (selectedIds.size > 0) {
      console.log('Marking as viewed:', [...selectedIds]);
      const newData = data.map(row =>
        selectedIds.has(row.id) ? { ...row, viewed: true } : row
      );
      setData(newData);
      setSelectedIds(new Set()); // Clear selection after action
    }
  };

  const isSelectedAll = selectedIds.size > 0 && selectedIds.size === sortedAndFilteredData.length;
  const isIndeterminate = selectedIds.size > 0 && selectedIds.size < sortedAndFilteredData.length;

  if (loading) return <div aria-live="polite">Loading...</div>;
  if (error) return <div aria-live="assertive" role="alert">Error: {error}</div>;

  return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search characters"
        />
        <button onClick={handleMarkAsViewed} disabled={selectedIds.size === 0}>
          Mark Selected as Viewed
        </button>
      </div>

      <div className="table-wrapper" role="region" aria-live="polite" tabIndex={0}>
        <table className="character-table">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={isSelectedAll}
                  aria-label="Select all rows"
                  aria-controls="character-list"
                />
              </th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">
                Health
                <HealthFilter filters={filters} setFilters={setFilters} />
              </th>
              <th scope="col" aria-sort={sortConfig.key === 'power' ? `${sortConfig.direction}ending` : 'none'}>
                <button className="sort-button" onClick={() => requestSort('power')} aria-label="Sort by power level">
                  Power <SortIcon direction={sortConfig.key === 'power' ? sortConfig.direction : null} />
                </button>
              </th>
              <th scope="col">Viewed</th>
            </tr>
          </thead>
        </table>
        <List<TableRowProps<Character>>
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
