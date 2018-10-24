import { fontSize, styles } from '../../styles';

import { Size } from './types';

const baseStyles = styles(css => ({ theme }) =>
  css({
    label: 'list',
    marginBottom: theme.spacers.rems.base,
    fontWeight: theme.typography.weights.normal,
  })
);

const sizeStyles = styles<{ size: Size }>(css => ({ theme, size }) =>
  css(
    {
      label: `list-${size}`,
      paddingLeft: theme.spacers.rems.femto,
      li: {
        marginBottom: theme.spacers.rems.micro,
        marginLeft: theme.spacers.rems.base,
      },
    },
    fontSize(theme, size)
  )
);

const noMarginStyles = styles<{ noMargin: boolean }>(css => ({ noMargin }) =>
  noMargin &&
  css({
    label: 'list--no-margin',
    marginBottom: 0,
  })
);

export default [baseStyles, sizeStyles, noMarginStyles];
