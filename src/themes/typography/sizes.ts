import { Size, SizeMap } from './types';

const rawFontSizes: { [key in Size]: number } = {
  micro: 8,
  milli: 10,
  centi: 12,
  deci: 14,
  base: 16,
  deca: 18,
  hecto: 20,
  kilo: 24,
  mega: 28,
  tera: 36,
  peta: 42,
  exa: 48,
};

const fontSizes = Object.entries(rawFontSizes).reduce(
  (acc, [key, value]) => ({ ...acc, [key]: `${value / 16}rem` }),
  {} as { [key in Size]: string }
);

const lineHeights: SizeMap = {
  micro: '1.84',
  milli: '1.84',
  centi: '1.84',
  deci: '1.62',
  base: '1.62',
  deca: '1.62',
  hecto: '1.62',
  kilo: '1.48',
  mega: '1.48',
  tera: '1.48',
  peta: '1.48',
  exa: '1.48',
};

export { fontSizes, lineHeights };
