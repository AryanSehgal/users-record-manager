import { useState, ReactElement } from 'react';
import { FilterIcon } from './FilterIcon';
import { HealthStatus } from '@/lib/enums';
import { TableFilters } from './types';
import { SetStateAction, Dispatch } from 'react';

export const HealthFilter = ({ filters, setFilters }: {
  filters: TableFilters;
  setFilters: Dispatch<SetStateAction<TableFilters>>;
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (healthStatus: HealthStatus) => {
    setFilters(prev => {
      const newHealthFilters = prev.health?.includes(healthStatus)
        ? prev.health?.filter(status => status !== healthStatus)
        : [...prev.health, healthStatus];

      return { ...prev, health: newHealthFilters };
    });
  };

  return (
    <div className="filter-dropdown">
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="health-filter-menu" aria-label="Filter by health status">
        <FilterIcon />
      </button>
      {isOpen && (
        <div id="health-filter-menu" className="filter-menu">
          {Object.values(HealthStatus).map(status => (
            <label key={status}>
              <input
                type="checkbox"
                checked={filters.health?.includes(status)}
                onChange={() => handleFilterChange(status)}
              />
              {status}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

