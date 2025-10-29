import { SetStateAction, Dispatch } from 'react';

export interface TableRowProps<T> {
  data: T[];
  selectedIds: Set<string>;
  handleSelectRow: (id: string, selected: boolean) => void;
};

export interface SortConfig<T> {
  key: keyof T | null;
  direction: 'asc' | 'desc';
}

export interface TableFilters {
  [key: string]: string[];
}

export interface UseTableDataReturn<T> {
  data: T[];
  sortedAndFilteredData: T[];
  loading: boolean;
  error: string | null;
  filters: TableFilters;
  setFilters: Dispatch<SetStateAction<TableFilters>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  sortConfig: SortConfig<T>;
  requestSort: (key: keyof T) => void;
  setData: Dispatch<SetStateAction<T[]>>;
}