import { styles, shadows } from '../../styles';
import { Theme } from '../../themes';

import { FooterAlignment, Padding, Shadow } from './types';

function cardPadding(theme: Theme, padding: Padding) {
  switch (padding) {
    case 'normal':
      return `${theme.spacers.rems.base}`;
    case 'extra':
      return `${theme.spacers.rems.base} ${theme.spacers.rems.kilo}`;
  }
}

const baseCardStyles = styles(css => ({ theme }) =>
  css({
    label: 'card',
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacers.pixels.micro,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  })
);
const cardShadowStyles = styles<{ shadow: Shadow }>(css => ({ theme, shadow }) =>
  css({
    boxShadow: shadows[shadow](theme),
  })
);
const cardPaddingStyles = styles<{ padding: Padding }>(css => ({ theme, padding }) =>
  css({
    label: `card--padding-${padding}`,
    padding: cardPadding(theme, padding),
  })
);

const baseHeaderStyles = styles(css => ({ theme }) =>
  css({
    label: 'card-header',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacers.rems.kilo,
  })
);

const emptyHeaderStyles = styles<{ children?: React.ReactNode }>(css => ({ children }) =>
  !children &&
  css({
    label: 'card-header--empty',
    justifyContent: 'flex-end',
  })
);

const baseFooterStyles = styles(css => ({ theme }) =>
  css({
    label: 'card-footer',
    display: 'block',
    width: '100%',
    marginTop: theme.spacers.rems.kilo,
    ...theme.mediaQueries.atLeastKilo({
      marginTop: theme.spacers.rems.base,
      display: 'flex',
      alignItems: 'center',
    }),
  })
);

const footerAlignmentStyles = styles<{ align: FooterAlignment }>(css => ({ theme, align }) =>
  align === 'right' &&
  css({
    ...theme.mediaQueries.atLeastKilo({ justifyContent: 'flex-end' }),
  })
);

export default {
  card: [baseCardStyles, cardShadowStyles, cardPaddingStyles],
  header: [baseHeaderStyles, emptyHeaderStyles],
  footer: [baseFooterStyles, footerAlignmentStyles],
};
