export type Alignment = 'left' | 'center' | 'right';

export type DecorationLine = 'underline' | 'overline' | 'line-through';

export type DecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';

export type Decoration =
  | DecorationLine
  | {
      line: DecorationLine | DecorationLine[];
      style?: DecorationStyle;
    };

export type Font = 'logo' | 'heading' | 'body' | 'monospace';

export type FontMap = { [key in Font]: string };

export type Fonts = { [key in Font]: string };

export type Size =
  | 'micro'
  | 'milli'
  | 'centi'
  | 'deci'
  | 'base'
  | 'deca'
  | 'hecto'
  | 'kilo'
  | 'mega'
  | 'tera'
  | 'peta'
  | 'exa';

export type SizeMap = { [key in Size]: string };

/**
 *  Specifies the css font-style property. Valid values for `angle` are [-90, 90].
 */
export type Style = 'normal' | 'italic' | 'oblique' | { angle: number };

/**
 *  Specifies the css letter-spacing property. Number values are intrepted as pixel units.
 */
export type Tracking = 'normal' | 'initial' | 'inherit' | number;

export type Transform = 'none' | 'initial' | 'inherit' | 'lowercase' | 'uppercase' | 'capitalize' | 'unset' | 'revert';

export type Weight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'heavy';

export type WeightMap = { [key in Weight]: number };

type SizeMap = { [key in Size]: string };

export interface Typography {
  fonts: Fonts;
  fontSizes: SizeMap;
  lineHeights: SizeMap;
  weights: WeightMap;
}
