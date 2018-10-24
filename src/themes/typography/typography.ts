import { FontMap, SizeMap, WeightMap } from './types';
import { default as fonts } from './fonts';
import { fontSizes, lineHeights } from './sizes';
import { default as weights } from './weights';

export interface Typography {
  fonts: FontMap;
  fontSizes: SizeMap;
  lineHeights: SizeMap;
  weights: WeightMap;
}

const typography: Typography = {
  fonts,
  fontSizes,
  lineHeights,
  weights,
};

export default typography;
