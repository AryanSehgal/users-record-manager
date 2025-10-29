import { useState, useEffect, useMemo } from 'react';
import { UseTableDataReturn, TableFilters, SortConfig} from '../../types';

export const useTableData = <T extends Record<string, any>>(fetchUrl: string): UseTableDataReturn<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<TableFilters>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({ key: null, direction: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const result: T[] = await response.json();
        setData(result.map(item => ({ ...item, viewed: false })));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const sortedAndFilteredData = useMemo(() => {
    let filtered = [...data];

    // Filter data based on filters
    for (const key in filters) {
      const values = filters[key];
      if (values.length > 0) {
        filtered = filtered.filter(row => values.includes(row[key]));
      }
    }

    // Apply search filter (simple text search across all string fields)
    if (searchTerm) {
      filtered = filtered.filter(row =>
        Object.values(row).some(
          val =>
            typeof val === 'string' &&
            val.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aVal = a[sortConfig.key!];
        const bVal = b[sortConfig.key!];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, filters, searchTerm, sortConfig]);

  const requestSort = (key: keyof T) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return {
    data,
    sortedAndFilteredData,
    loading,
    error,
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    sortConfig,
    requestSort,
    setData,
  };
};

