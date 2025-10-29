import { ReactElement, CSSProperties } from 'react';
import { TableRowProps as BaseTableRowProps } from './types';
import { Character } from '@/lib/types';

export interface TableRowProps<T> extends BaseTableRowProps<T>
{
  index: number;
  style: CSSProperties;
  ariaAttributes: {
    'aria-posinset': number;
    'aria-setsize': number;
    role: 'listitem';
  };
} 

export const TableRow =  ({ index, style, ariaAttributes, data, selectedIds, handleSelectRow }: TableRowProps<Character>): ReactElement => {
  const row = data[index];
  const isSelected = selectedIds.has(row.id);

  return (
    <div style={style} className="table-row">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => handleSelectRow(row.id, e.target.checked)}
        aria-label={`Select character ${row.name}`}
        aria-posinset={ariaAttributes['aria-posinset']}
        aria-setsize={ariaAttributes['aria-setsize']}
      />
      <span>{row.name}</span>
      <span>{row.location}</span>
      <span>{row.health}</span>
      <span>{row.power}</span>
      <span>{row.viewed ? 'Yes' : 'No'}</span>
    </div>
  );
};
