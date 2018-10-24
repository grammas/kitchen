import React from 'react';

import { styled } from '../../styles';

import styles from './styles';
import TableCell from './table_cell';
import { RowClickHandler, TableColumn } from './types';

const defaultProps = {
  borderCollapse: true,
};

type Props<T extends {}> = {
  columns: TableColumn<T>[];
  data: T[];
  stretch?: boolean;
  itemKey?: (t: T) => string;
  onRowClick?: RowClickHandler<T>;
} & typeof defaultProps;

interface StyledContainerProps {
  stretch?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>(...styles.container);

interface StyledTableProps {
  borderCollapse: boolean;
}

const StyledTable = styled.table<StyledTableProps>(...styles.table);

interface StyledTableRowProps {
  onClick?: (e: any) => void;
}

const StyledRow = styled.tr<StyledTableRowProps>(...styles.row);

const DataTable = <T extends { [key: string]: any }>({
  borderCollapse,
  columns,
  data,
  itemKey = t => JSON.stringify(t),
  stretch,
  onRowClick,
}: Props<T>) => (
  <StyledContainer {...{ stretch }}>
    <StyledTable {...{ borderCollapse }}>
      <thead>
        <tr>
          {columns.map(column => (
            <TableCell key={column.header} header>
              {column.header}
            </TableCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <StyledRow key={itemKey(item)} onClick={(e: any) => (onRowClick ? onRowClick(item, e) : void 0)}>
              {columns.map(column => {
                const header = normalizeHeader(column.header);
                const value = normalizeAccessor(header, column.accessor)(item);

                let children: React.ReactNode = value;
                if (column.render) {
                  children = column.render({ item, value });
                }

                return <TableCell key={JSON.stringify(value || header)}>{children}</TableCell>;
              })}
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  </StyledContainer>
);

const normalizeHeader = (header: string): string => {
  if (typeof header === 'string') {
    return header;
  }
  return '';
};

const normalizeAccessor = <T extends { [key: string]: any }>(
  header: string,
  accessor?: string | ((item: T) => any)
) => {
  if (accessor) {
    if (typeof accessor === 'string') {
      return (t: T) => t[accessor];
    }
    return accessor;
  }
  return (t: T) => t[header];
};

DataTable.defaultProps = defaultProps;

export default DataTable;
