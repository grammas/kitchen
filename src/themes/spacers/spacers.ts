import { Size, SizeMap } from './types';

const ratios: { [key in Size]: number } = {
  yocto: 1,
  zepto: 2,
  atto: 3,
  femto: 4,
  pico: 5,
  nano: 6,
  micro: 8,
  milli: 10,
  centi: 12,
  deci: 14,
  base: 16,
  deca: 18,
  hecto: 20,
  kilo: 24,
  mega: 28,
  giga: 32,
  tera: 36,
  peta: 42,
  exa: 48,
  zetta: 56,
  yotta: 64,
};

const buildMap = (valueMapper: (value: number) => string) =>
  Object.entries(ratios).reduce((acc, [key, value]) => ({ ...acc, [key]: valueMapper(value) }), {} as SizeMap);

const ems: SizeMap = buildMap(value => `${value / 16}em`);
const pixels: SizeMap = buildMap(value => `${value}px`);
const rems: SizeMap = buildMap(value => `${value / 16}rem`);

export interface Spacers {
  ems: SizeMap;
  pixels: SizeMap;
  rems: SizeMap;
}

const spacers = {
  ems,
  pixels,
  rems,
};

export default spacers;
