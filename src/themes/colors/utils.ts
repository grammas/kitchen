import { Theme } from '../theme';
import { Color, Coloring } from './types';

export const resolveColor = (theme: Theme, color: Color, coloring: Coloring = {}) => {
  if (color === 'natural') {
    return theme.body.color;
  }
  if (color === 'white' || color === 'black' || color === 'shadow' || color === 'dark' || color === 'light') {
    return theme.colors[color];
  }
  const { shade = 5 } = coloring;
  return theme.colors[color][shade];
};
