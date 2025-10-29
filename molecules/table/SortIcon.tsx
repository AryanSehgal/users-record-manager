import { ReactElement } from 'react';

export const SortIcon = ({ direction }: { direction: 'asc' | 'desc' | null }): ReactElement => {
  if (direction === 'asc') {
    return <span aria-label="Ascending sort" style={{cursor: 'pointer'}}>▲</span>;
  }

  if (direction === 'desc') {
    return <span aria-label="Descending sort" style={{cursor: 'pointer'}}>▼</span>;
  }
  
  return <span aria-label="No sort" style={{cursor: 'pointer'}}>◆</span>;
};
