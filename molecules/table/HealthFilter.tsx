import { useState, useRef, useEffect, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { FilterIcon } from './FilterIcon';
import { HealthStatus } from '@/lib/enums';
import { TableFilters } from './types';
import { SetStateAction, Dispatch } from 'react';
import './healthFilter.css';

export const HealthFilter = ({
  filters,
  setFilters,
}: {
  filters: TableFilters;
  setFilters: Dispatch<SetStateAction<TableFilters>>;
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Position tooltip to the right of the button
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 10, // 10px gap
      });
    }
  }, [isOpen]);

  const handleFilterChange = (healthStatus: HealthStatus) => {
    setFilters(prev => {
      const newHealthFilters = prev.health?.includes(healthStatus)
        ? prev.health?.filter(status => status !== healthStatus)
        : [...(prev.health ?? []), healthStatus];
      return { ...prev, health: newHealthFilters };
    });
  };

  return (
    <>
      <button
        ref={buttonRef}
        className="tooltip-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Filter by health status"
      >
        <FilterIcon />
      </button>

      {isOpen &&
        createPortal(
          <div
            className="tooltip-box tooltip-right fixed"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: 'translateY(-50%)',
              position: 'fixed',
            }}
          >
            <div className="tooltip-arrow tooltip-arrow-right" />
            {Object.values(HealthStatus).map(status => (
              <label key={status} className="tooltip-option">
                <input
                  type="checkbox"
                  checked={filters.health?.includes(status)}
                  onChange={() => handleFilterChange(status)}
                />
                {status}
              </label>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};
