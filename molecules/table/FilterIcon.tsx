import {ReactElement} from 'react';

export const FilterIcon = ({ width = 16, height = 16, fill = "currentColor" }: {
  width?: number; height?: number, fill?: string
}): ReactElement => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm6 6h-4v2h4v-2z" />
  </svg>
);