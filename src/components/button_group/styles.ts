import { styles } from '../../styles';
import { Theme } from '../../themes';

import { Alignment } from './types';

function buttonGroupInlineStyles(theme: Theme, fill: boolean) {
  return {
    display: 'flex',
    alignItems: fill ? 'stretch' : 'center',
    flexWrap: 'nowrap',
    '> li:not(:last-of-type)': {
      marginBottom: 0,
      marginRight: theme.spacers.rems.base,
    },
  };
}

function buttonGroupAlignment(align: Alignment) {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
  }
}

const baseStyles = styles<{ fill: boolean }>(css => ({ theme, fill }) =>
  css({
    label: 'button-group',
    width: '100%',
    listStyleType: 'none',
    '> li': {
      '&:not(:last-of-type)': {
        marginBottom: theme.spacers.rems.base,
      },
      '> *': {
        width: '100%',
      },
    },
    ...theme.mediaQueries.atLeastKilo(buttonGroupInlineStyles(theme, fill)),
  })
);

const alignmentStyles = styles<{ align: Alignment }>(css => ({ align }) =>
  css({
    label: `button-group--${align}`,
    justifyContent: buttonGroupAlignment(align),
  })
);

const mobileStyles = styles<{ fill: boolean; mobile: boolean }>(css => ({ theme, fill, mobile }) =>
  mobile &&
  css({
    label: 'button-group--mobile',
    ...theme.mediaQueries.atMostKilo(buttonGroupInlineStyles(theme, fill)),
  })
);

const baseItemStyles = styles<{ flex: boolean }>(css => ({ flex }) =>
  flex &&
  css({
    display: 'flex',
  })
);

export default {
  group: [baseStyles, alignmentStyles, mobileStyles],
  item: [baseItemStyles],
};
