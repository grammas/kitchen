import neutral from './neutral';
import red from './red';
import orange from './orange';
import yellow from './yellow';
import green from './green';
import blue from './blue';
import purple from './purple';

import { Shade } from './types';

export const black = '#000000';
export const white = '#ffffff';

const light = '#fafbfc'; // ¯\_(ツ)_/¯
const dark = '#0f131a'; // ¯\_(ツ)_/¯
const shadow = '#0c0f14'; // ¯\_(ツ)_/¯

type ColorMap = { [key in Shade]: string };

export type Colors = {
  white: string;
  light: string;
  dark: string;
  shadow: string;
  black: string;
  neutral: ColorMap;
  red: ColorMap;
  orange: ColorMap;
  yellow: ColorMap;
  green: ColorMap;
  blue: ColorMap;
  purple: ColorMap;
  primary: ColorMap;
  secondary: ColorMap;
  success: ColorMap;
  warning: ColorMap;
  danger: ColorMap;
  info: ColorMap;
  debug: ColorMap;
};

const colors: Colors = {
  white,
  light,
  dark,
  shadow,
  black,
  neutral,
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  primary: blue,
  secondary: green,
  success: green,
  warning: orange,
  danger: red,
  info: blue,
  debug: neutral,
};

export default colors;
