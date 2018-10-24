import { backgroundColor, fontSize, shadows, styles } from '../../styles';

const baseShadowsStyles = styles(css => ({ theme }) =>
  css({
    label: 'table--shadows',
    boxShadow: shadows.single(theme),
  })
);

const noShadowsStyles = styles<{ noShadows: boolean }>(css => ({ noShadows }) =>
  noShadows &&
  css({
    label: 'table--no-shadows',
    boxShadow: 'none',
  })
);

const baseContainerStyles = styles(css => ({ theme }) =>
  css({
    label: 'table-container',
    borderRadius: theme.spacers.pixels.femto,
    padding: theme.spacers.rems.base,
    maxWidth: '100%',
    overflowX: 'auto',
  })
);

const tableContainerStretchStyles = styles<{ stretch?: boolean }>(css => ({ stretch }) =>
  stretch &&
  css({
    label: 'table-container--stretch',
    alignSelf: 'stretch',
  })
);

const baseTableStyles = styles(css => () =>
  css({
    label: 'table',
    width: '100%',
    borderCollapse: 'separate',
  })
);

const tableBorderCollapseStyles = styles<{ borderCollapse: boolean }>(css => ({ borderCollapse }) =>
  borderCollapse &&
  css({
    label: 'table--border-collapsed',
    borderCollapse: 'collapse',
  })
);

const baseTableRowStyles = styles(css => () =>
  css({
    label: 'table-row',
    verticalAlign: 'middle',
    '&:last-of-type': {
      'th, td': {
        borderBottom: 'none',
      },
    },
  })
);

const tableRowClickableStyles = styles<{ onClick?: (e: any) => void }>(css => ({ theme, onClick }) =>
  onClick &&
  css({
    label: 'table-row--clickable',
    cursor: 'pointer',
    '&:hover': backgroundColor(theme, 'neutral', { shade: 1 }),
  })
);

const baseTableCellStyles = styles<{}>(css => ({ theme }) =>
  css({
    label: 'table-cell',
    padding: `${theme.spacers.rems.micro} ${theme.spacers.rems.base}`,
    border: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[7]}`,
    ...fontSize(theme, 'base'),
    textAlign: 'left',
  })
);

const tableCellSpacedStyles = styles<{ spaced?: boolean }>(css => ({ theme, spaced }) =>
  spaced &&
  css({
    label: 'table-cell--spaced',
    padding: `${theme.spacers.rems.kilo} ${theme.spacers.rems.exa}`,
  })
);

const tableHeaderStyles = styles<{ header?: boolean }>(css => ({ theme, header }) =>
  header &&
  css({
    label: 'table-header',
    ...fontSize(theme, 'kilo'),
    fontWeight: theme.typography.weights.bold,
    textAlign: 'center',
  })
);

export default {
  shadows: [baseShadowsStyles, noShadowsStyles],
  container: [baseContainerStyles, tableContainerStretchStyles],
  table: [baseTableStyles, tableBorderCollapseStyles],
  row: [baseTableRowStyles, tableRowClickableStyles],
  cell: [baseTableCellStyles, tableCellSpacedStyles, tableHeaderStyles],
};
