import { ReactNode } from 'react';

export type RowClickHandler<T> = (item: T, e: React.MouseEvent<HTMLTableRowElement>) => void;

export interface TableHeaderProps {
  sortable?: boolean;
}

interface TableCellProps<T> {
  item: T;
  value: any;
}

export interface TableColumn<T> {
  sortable?: boolean;
  header: string /* | ((props: TableHeaderProps) => ReactNode)*/;
  accessor?: string | ((item: T) => any);
  render?: (props: TableCellProps<T>) => ReactNode;
}
