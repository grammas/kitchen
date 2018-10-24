import React from 'react';

import { styled } from '../../styles';

import styles from './styles';

const defaultProps = {
  borderCollapse: true,
};

type Props = {
  children: React.ReactNode;
  header?: boolean;
  spaced?: boolean;
} & typeof defaultProps;

interface StyledTableCellProps {
  borderCollapse: boolean;
  spaced?: boolean;
}

const StyledTableCell = styled.td<StyledTableCellProps>(...styles.cell);

const StyledTableHeader = StyledTableCell.withComponent('th');

const TableCell = ({ children, header, ...rest }: Props) => {
  const Component = header ? StyledTableHeader : StyledTableCell;
  return <Component {...{ ...rest, header }}>{children}</Component>;
};

TableCell.defaultProps = defaultProps;

export default TableCell;
