import { styles } from '../styles';
import { fade } from '../utils';

const STACKED_BOOKEND_WIDTH = '75px';

const baseHeaderStyles = styles(css => ({ theme }) =>
  css({
    label: 'stacked-layout-container',
    display: 'flex',
    flexDirection: 'column',
    ...theme.mediaQueries.atMostMega({ flexDirection: 'row', justifyContent: 'space-between' }),
  })
);

const baseStyles = styles(css => ({ theme }) =>
  css({
    label: 'stacked-layout',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacers.rems.giga,
  })
);

const logoStyles = styles(css => ({ theme }) =>
  css({
    label: 'stacked-layout--logo',
    height: '150px',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ...theme.mediaQueries.atMostMega({ height: '50px' }),
  })
);

const baseNavContainerStyles = styles(css => ({ theme }) =>
  css({
    label: 'stacked-layout--nav',
    height: '50px',
    padding: `0 ${theme.spacers.rems.micro}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderTop: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[5]}`,
  })
);

const baseNavSpinnerStyles = styles(css => () =>
  css({
    visibility: 'hidden',
    minWidth: STACKED_BOOKEND_WIDTH,
    display: 'flex',
    alignItems: 'center',
  })
);

const navSpinnerActiveStyles = styles<{ active: boolean }>(css => ({ active }) =>
  active &&
  css({
    visibility: 'visible',
  })
);

const baseNavLinkStyles = styles<{ isActive: boolean }>(css => ({ theme, isActive }) =>
  isActive &&
  css({
    label: 'stacked-layout--nav-link--active',
    background: `linear-gradient(${theme.colors.white} 61.8%, ${fade(theme.colors.primary[5], 0.382)})`,
  })
);

const navUserActionButtonStyles = styles(css => () =>
  css({
    minWidth: STACKED_BOOKEND_WIDTH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  })
);

const baseAlertsContainerStyles = styles(css => ({ theme }) =>
  css({
    label: 'stacked-layout--alerts',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[5]}`,
    borderBottom: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[5]}`,
  })
);

const basePageContainerStyles = styles(css => () =>
  css({
    label: 'stacked-layout--page',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })
);

const basePageContainerMenuStyles = styles(css => ({ theme }) =>
  css({
    label: 'stacked-layout--page-menu',
    height: '50px',
    borderBottom: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[5]}`,
  })
);

const basePageContainerLinkStyles = styles<{ isActive: boolean }>(css => ({ theme, isActive }) =>
  isActive &&
  css({
    label: 'stacked-layout--page-link--active',
    background: `linear-gradient(${theme.colors.white} 61.8%, ${fade(theme.colors.secondary[5], 0.382)})`,
  })
);

export default {
  header: [baseHeaderStyles],
  layout: [baseStyles],
  logo: [logoStyles],
  nav: {
    container: [baseNavContainerStyles],
    spinner: [baseNavSpinnerStyles, navSpinnerActiveStyles],
    link: [baseNavLinkStyles],
    userActionButton: [navUserActionButtonStyles],
  },
  alerts: [baseAlertsContainerStyles],
  page: {
    container: [basePageContainerStyles],
    menu: [basePageContainerMenuStyles],
    link: [basePageContainerLinkStyles],
  },
};
