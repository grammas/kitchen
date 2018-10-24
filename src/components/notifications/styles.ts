import { boxShadow, shadows, styles } from '../../styles';
import { Status, Theme } from '../../themes';
import { fade } from '../../utils';

import { Padding, Size } from './types';

function inlineNotificationBorderRadius(theme: Theme, size: Size) {
  switch (size) {
    case 'm':
      return theme.spacers.pixels.micro;
    case 'l':
      return theme.spacers.pixels.giga;
  }
}

function inlineNotificationBackgroundColor(theme: Theme, status: Status) {
  switch (status) {
    case 'success':
      return theme.colors.success[5];
    case 'warning':
      return theme.colors.warning[5];
    case 'danger':
      return theme.colors.danger[5];
    case 'info':
      return theme.colors.info[5];
    case 'debug':
      return theme.colors.debug[5];
  }
}

function inlineNotificationColor(theme: Theme, status: Status) {
  switch (status) {
    case 'danger':
      return theme.colors.red[5];
    default:
      return theme.colors.dark;
  }
}

function inlineNotificationLeftPlacement(theme: Theme, size: Size) {
  switch (size) {
    case 'm':
      return theme.spacers.rems.base;
    case 'l':
      return theme.spacers.rems.kilo;
  }
}

function inlineNotificationLeftBorderStyles(theme: Theme, status: Status, size: Size) {
  return {
    label: `inline-notification--${status}`,
    position: 'relative' as 'relative',
    marginBottom: theme.spacers.rems.base,
    color: inlineNotificationColor(theme, status),
    '&:before': {
      display: 'inline-block',
      position: 'absolute' as 'absolute',
      content: '""',
      top: 0,
      left: `1${inlineNotificationLeftPlacement(theme, size)}`,
      height: '100%',
      width: '3px',
      borderTopRightRadius: inlineNotificationBorderRadius(theme, size),
      borderBottomRightRadius: inlineNotificationBorderRadius(theme, size),
      backgroundColor: inlineNotificationBackgroundColor(theme, status),
    },
  };
}

function notificationBannerBackgroundColor(theme: Theme, status: Status) {
  switch (status) {
    case 'success':
      return theme.colors.success[5];
    case 'warning':
      return theme.colors.warning[5];
    case 'danger':
      return theme.colors.danger[5];
    case 'info':
      return theme.colors.info[5];
    case 'debug':
      return theme.colors.debug[5];
  }
}

function notificationBannerPadding(theme: Theme, padding: Padding) {
  switch (padding) {
    case 'xs':
      return theme.spacers.rems.yocto;
    case 's':
      return theme.spacers.rems.zepto;
    case 'm':
      return theme.spacers.rems.femto;
    case 'l':
      return theme.spacers.rems.micro;
    case 'xl':
      return theme.spacers.rems.base;
  }
}

function notificationBannerPaddings(theme: Theme, padding: Padding | Padding[]) {
  if (typeof padding === 'string') {
    const allPadding = notificationBannerPadding(theme, padding);
    return `${allPadding} ${allPadding}`;
  }
  const topBottomPadding = notificationBannerPadding(theme, padding[0]);
  const leftRightPadding = notificationBannerPadding(theme, padding[1]);
  return `${topBottomPadding} ${leftRightPadding}`;
}

const baseInlineNotificationStyles = styles(css => () =>
  css({
    label: 'inline-notification',
  })
);

const inlineNotificationMarginStyles = styles<{ noMargin: boolean }>(css => ({ noMargin }) =>
  noMargin &&
  css({
    label: 'inline-notification--no-margin',
    marginBottom: 0,
  })
);

const inlineNotificationSuccessStyles = styles<{ status: Status; size: Size }>(css => ({ theme, status, size }) =>
  status === 'success' && css(inlineNotificationLeftBorderStyles(theme, status, size))
);

const inlineNotificationWarningStyles = styles<{ status: Status; size: Size }>(css => ({ theme, status, size }) =>
  status === 'warning' && css(inlineNotificationLeftBorderStyles(theme, status, size))
);

const inlineNotificationErrorStyles = styles<{ status: Status; size: Size }>(css => ({ theme, status, size }) =>
  status === 'danger' && css(inlineNotificationLeftBorderStyles(theme, status, size))
);

const baseNotificationBannerStyles = styles<{ status?: Status }>(css => ({ theme, status }) =>
  css({
    label: 'notification-banner',
    height: '100%',
    width: '100%',
    transition: theme.transitions.alert,
    backgroundColor: status ? fade(notificationBannerBackgroundColor(theme, status), 0.84) : theme.colors.white,
  })
);

const notificationBannerBorderStyles = styles<{ shadow: boolean }>(css => ({ theme, shadow }) =>
  shadow && css(boxShadow(theme, shadows.single(theme)))
);

const notificationBannerInnerStyles = styles<{ padding?: Padding | Padding[] }>(css => ({ theme, padding }) =>
  padding &&
  css({
    label: 'notification-banner--inner',
    height: '100%',
    padding: notificationBannerPaddings(theme, padding),
    display: 'flex',
    alignItems: 'center',
  })
);

const baseNotificationListStyles = styles(css => ({ theme }) =>
  css({
    label: 'notification-label',
    width: '400px',
    maxWidth: ['90vw', `calc(100vw - (2 * ${theme.spacers.rems.kilo}))`],
    display: 'flex',
    flexDirection: 'column',
    '> *': {
      marginTop: theme.spacers.rems.base,
    },
    '> *:first-child': {
      marginTop: 0,
    },
    ...theme.mediaQueries.atMostMega(
      css({
        width: '100%',
        maxWidth: 'none',
      })
    ),
  })
);

export default {
  inline: [
    baseInlineNotificationStyles,
    inlineNotificationErrorStyles,
    inlineNotificationSuccessStyles,
    inlineNotificationWarningStyles,
    inlineNotificationMarginStyles,
  ],
  banner: {
    element: [baseNotificationBannerStyles, notificationBannerBorderStyles],
    inner: [notificationBannerInnerStyles],
  },
  list: [baseNotificationListStyles],
};
