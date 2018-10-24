import { Breakpoint } from './types';

const kilo = 480;
const mega = 768;
const giga = 960;
const tera = 1280;

export const breakpoints = {
  atLeastKilo: `(min-width: ${kilo}px)`,
  atLeastMega: `(min-width: ${mega}px)`,
  atLeastGiga: `(min-width: ${giga}px)`,
  atLeastTera: `(min-width: ${tera}px)`,

  atMostKilo: `(max-width: ${kilo - 1}px)`,
  atMostMega: `(max-width: ${mega - 1}px)`,
  atMostGiga: `(max-width: ${giga - 1}px)`,
  atMostTera: `(max-width: ${tera - 1}px)`,

  kiloToMega: `(min-width: ${kilo}px) and (max-width: ${mega - 1}px)`,
  megaToGiga: `(min-width: ${mega}px) and (max-width: ${giga - 1}px)`,
  gigaToTera: `(min-width: ${giga}px) and (max-width: ${tera - 1}px)`,
};

export type MediaQueries = { [key in Breakpoint]: (...args: any[]) => any };

export default Object.keys(breakpoints).reduce(
  (acc, key) => ({
    ...acc,
    [key]: (css: object) => ({ [`@media ${(breakpoints as any)[key]}`]: css }),
  }),
  {} as MediaQueries
);
