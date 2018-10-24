import { keyframes } from '@emotion/core';

import { styles } from '../../styles';
import { Status } from '../../themes';
import { Color, Coloring, resolveColor } from '../../themes/colors';

const dangerIconStyles = styles<{ color: Color }>(css => ({ theme, color }) =>
  css({
    '& > g': {
      fill: resolveColor(theme, color),
    },
  })
);

const debugIconStyles = styles<{ color: Color }>(css => ({ theme, color }) =>
  css({
    '& > g': {
      fill: resolveColor(theme, color),
    },
  })
);

const infoIconStyles = styles<{ color: Color }>(css => ({ theme, color }) =>
  css({
    '& > g > g': {
      fill: resolveColor(theme, color),
    },
  })
);

const successIconStyles = styles<{ color: Color }>(css => ({ theme, color }) =>
  css({
    '& > g': {
      fill: resolveColor(theme, color),
    },
  })
);

const warningIconStyles = styles<{ color: Color }>(css => ({ theme, color }) =>
  css({
    '& > path': {
      fill: resolveColor(theme, color),
    },
  })
);

const closeIconStyles = styles<{ color: Color }>(css => ({ theme, color }) =>
  css({
    '& > path': {
      fill: resolveColor(theme, color),
    },
  })
);

const spin = keyframes({
  '0%': {
    transform: 'rotate3d(0, 0, 1, 0deg)',
  },
  '100%': {
    transform: 'rotate3d(0, 0, 1, 360deg)',
  },
});

const spinnerIconStyles = styles<{ coloring: Coloring; scale?: number }>(css => ({ theme, coloring, scale }) =>
  css({
    '& > path': {
      fill: resolveColor(theme, 'neutral', coloring),
    },
    path: {
      animation: `${spin} 1s infinite linear`,
      transformOrigin: '50% 50%',
    },
    transform: `scale(${scale})`,
  })
);

const baseHintStyles = styles<{ status?: Status }>(css => ({ theme, status }) =>
  css({
    display: 'block',
    verticalAlign: 'middle',
    '& > g': {
      fill: resolveColor(theme, status || 'dark')
    },
  })
);

const hintFlippedStyles = styles<{ flipped?: boolean }>(css => ({ flipped }) =>
  flipped &&
  css({
    transform: 'rotate(180deg)',
  })
);

export default {
  dangerIconStyles: [dangerIconStyles],
  debugIconStyles: [debugIconStyles],
  infoIconStyles: [infoIconStyles],
  successIconStyles: [successIconStyles],
  warningIconStyles: [warningIconStyles],
  closeIconStyles: [closeIconStyles],
  spinnerIconStyles: [spinnerIconStyles],
  hintStyles: [baseHintStyles, hintFlippedStyles]
};
