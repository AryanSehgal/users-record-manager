import { ReactElement } from 'react';

export const SortIcon = ({ direction }: { direction: 'asc' | 'desc' | null }): ReactElement => {
  if (direction === 'asc') {
    return <span aria-label="Ascending sort">▲</span>;
  }

  if (direction === 'desc') {
    return <span aria-label="Descending sort">▼</span>;
  }
  
  return <span aria-label="No sort">◆</span>;
};
