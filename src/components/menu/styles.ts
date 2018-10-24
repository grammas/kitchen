import { boxShadow, styles } from '../../styles';
import { Theme } from '../../themes';
import { resolveColor } from '../../themes/colors';
import { Size } from '../../themes/spacers';

function itemBorder(theme: Theme) {
  return {
    outline: 'none',
    '&::after': {
      position: 'absolute' as 'absolute',
      content: '" "',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      ...boxShadow(theme, `0 0 0 ${theme.spacers.pixels.yocto} ${resolveColor(theme, 'primary')}`),
      borderRadius: theme.spacers.pixels.kilo,
    },
  };
}

const baseMenuStyles = styles(css => () =>
  css({
    label: 'menu',
    padding: 0,
  })
);

const baseItemStyles = styles(css => ({ theme }) =>
  css({
    label: 'menu-item',
    position: 'relative',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.colors.neutral[5],
    borderBottom: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[3]}`,
    font: `400 ${theme.typography.fontSizes.micro} system-ui`,
    textDecoration: 'none',
    '&:first-child': {
      borderTopLeftRadius: theme.spacers.pixels.micro,
      borderTopRightRadius: theme.spacers.pixels.micro,
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.spacers.pixels.micro,
      borderBottomRightRadius: theme.spacers.pixels.micro,
    },
  })
);

const itemPaddingStyles = styles<{ size: Size }>(css => ({ theme, size }) =>
  css({
    padding: theme.spacers.rems[size],
  })
);

const itemSelectedStyles = styles<{ selected: boolean }>(css => ({ theme, selected }) =>
  selected &&
  css({
    label: 'menu-item--selected',
    background: theme.colors.primary[1],
  })
);

const itemHoverStyles = styles(css => ({ theme }) =>
  css({
    '@media (hover: hover)': {
      '&:hover': {
        ...itemBorder(theme),
      },
    },
    '&:focus': {
      ...itemBorder(theme),
    },
  })
);

export default {
  menu: [baseMenuStyles],
  item: [baseItemStyles, itemPaddingStyles, itemSelectedStyles, itemHoverStyles],
};
