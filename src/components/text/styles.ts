import {
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  styles,
  textAlign,
  textDecoration,
} from '../../styles';
import { Color, Coloring } from '../../themes/colors';
import { Alignment, Decoration, Font, Size, Style, Tracking, Weight } from '../../themes/typography';

const baseStyles = styles<{ font: Font; size: Size; weight: Weight }>(css => ({ theme, font, size, weight }) =>
  css(
    {
      label: `text--${size}`,
      marginBottom: theme.spacers.rems.base,
    },
    fontFamily(theme, font),
    fontSize(theme, size),
    fontWeight(theme, weight)
  )
);

const noMarginStyles = styles<{ noMargin: boolean }>(css => ({ noMargin }) =>
  noMargin &&
  css({
    label: 'text--no-margin',
    marginBottom: 0,
  })
);

const colorStyles = styles<{ color: Color; coloring?: Coloring }>(css => ({ theme, color: colorProp, coloring }) =>
  css(
    {
      label: `text--${colorProp}`,
    },
    color(theme, colorProp, coloring)
  )
);

const styleStyles = styles<{ style?: Style }>(css => ({ theme, style }) =>
  style &&
  css(
    {
      label: `text--${typeof style === 'string' ? style : `oblique-${style.angle}deg`}`,
    },
    fontStyle(theme, style)
  )
);

const decoratedStyles = styles<{ decoration?: Decoration }>(css => ({ theme, decoration }) =>
  decoration &&
  css(
    {
      label: `text--decorated`,
    },
    textDecoration(theme, decoration)
  )
);

const trackingStyles = styles<{ tracking?: Tracking }>(css => ({ theme, tracking }) =>
  tracking &&
  css(
    {
      label: `text--tracking`,
    },
    letterSpacing(theme, tracking)
  )
);

const textAlignStyles = styles<{ align?: Alignment }>(css => ({ theme, align }) =>
  align &&
  css(
    {
      label: 'text--align',
    },
    textAlign(theme, align)
  )
);

export default [baseStyles, noMarginStyles, colorStyles, styleStyles, decoratedStyles, trackingStyles, textAlignStyles];
