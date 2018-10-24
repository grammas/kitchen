import { fontSize, styles } from '../../styles';
import { Theme } from '../../themes';
import { resolveColor } from '../../themes/colors';
import { Size } from '../../themes/spacers';
import { Size as FontSize } from '../../themes/typography';
import { brighten, darken, fade } from '../../utils';

import { Color, Padding, Shape, Variant } from './types';

function buttonBorderRadius(theme: Theme, shape: Shape, radius: Size = 'femto') {
  switch (shape) {
    case 'square':
      return '0px';
    case 'circle':
      return '50%';
    case 'rounded':
      return theme.spacers.pixels[radius];
  }
}

function buttonPadding(theme: Theme, padding: Padding) {
  switch (padding) {
    case 'none':
      return 0;
    case 's':
      return `${theme.spacers.rems.femto} ${theme.spacers.rems.micro}`;
    case 'm':
      return `${theme.spacers.rems.centi} ${theme.spacers.rems.kilo}`;
    case 'l':
      return `${theme.spacers.rems.kilo} ${theme.spacers.rems.exa}`;
  }
}

const baseButtonStyles = styles(css => ({ theme }) =>
  css({
    label: 'button',
    outline: 'none',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    WebkitTapHighlightColor: 'transparent',
    margin: 0,
    padding: 0,
    border: 0,
    cursor: 'pointer',
    userSelect: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none',
    },
    '&[disabled], &:disabled': {
      label: 'button--disabled',
      pointerEvents: 'none',
      cursor: 'default',
      backgroundColor: fade(resolveColor(theme, 'dark'), 0.05),
    },
  })
);

const buttonSizeStyles = styles<{ size: FontSize; padding: Padding }>(css => ({ theme, size, padding }) =>
  css(
    {
      marginBottom: 0,
      padding: buttonPadding(theme, padding),
    },
    fontSize(theme, size)
  )
);

const standardButtonStyles = styles<{
  color: Color;
  inverted?: boolean;
  radius?: Size;
  shape: Shape;
  variant: Variant;
  width: Size;
}>(css => ({ theme, color: colorProp, inverted, radius, shape, variant, width }) => {
  const colorValue = resolveColor(
    theme,
    colorProp === 'default' ? 'neutral' : colorProp,
    colorProp === 'default' ? { shade: 7 } : {}
  );

  const color = inverted ? theme.body.backgroundColor : colorValue;
  const activeHoverColor = darken(color, 0.1);
  const hoverBackgroundColor = fade(color, 0.2);
  const activeBackgroundColor = brighten(hoverBackgroundColor, 0.12);

  return css({
    label: `button--${variant}-${shape}`,
    boxShadow: 'none',
    backgroundColor: inverted ? fade(colorValue, 0.84) : theme.body.backgroundColor,
    color,
    borderRadius: buttonBorderRadius(theme, shape, radius),
    ...(variant === 'text'
      ? {}
      : { borderColor: color, borderStyle: 'solid', borderWidth: theme.spacers.pixels[width] }),
    backgroundPosition: 'center',
    transition: 'background 0.8s',
    '&:active, &:hover': {
      color: activeHoverColor,
    },
    '&:hover': {
      backgroundColor: hoverBackgroundColor,
    },
    '&:active': {
      backgroundColor: activeBackgroundColor,
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  });
});

const textButtonStyles = styles<{ href?: string; to?: any; variant: Variant }>(css => ({ href, to, variant }) =>
  variant === 'text' &&
  css({
    textDecoration: !(href || to) ? 'none' : 'underline',
  })
);

const raisedButtonStyles = styles<{ variant: Variant }>(css => ({ variant }) =>
  variant === 'raised' &&
  css({
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    '&:active': {
      boxShadow:
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
    },
  })
);

const floatingButtonStyles = styles<{ variant: Variant }>(css => ({ variant }) =>
  variant === 'floating' &&
  css({
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    '&:active': {
      boxShadow:
        '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
    },
  })
);

const baseCloseButtonStyles = styles(css => ({ theme }) =>
  css({
    height: theme.spacers.pixels.kilo,
    width: theme.spacers.pixels.kilo,
  })
);

const baseSvgButtonStyles = styles(css => ({ theme }) =>
  css({
    label: 'svg-button',
    padding: 0,
    margin: 0,
    display: 'inline-block',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fill: theme.colors.dark,
    overflow: 'initial',
    '&:focus, &:active': {
      outline: 'none',
    },
    '> svg': {
      height: '100%',
      width: '100%',
    },
  })
);

export default {
  button: [
    baseButtonStyles,
    buttonSizeStyles,
    standardButtonStyles,
    textButtonStyles,
    raisedButtonStyles,
    floatingButtonStyles,
  ],
  close: [baseCloseButtonStyles],
  svg: [baseSvgButtonStyles],
};
