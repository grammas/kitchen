import { Color, Coloring, resolveColor } from '../themes/colors';

import css from './css';

export interface Props {
  color: Color;
  coloring?: Coloring;
}

export default css<[Color, Coloring | undefined]>((theme, color, coloring = {}) => ({
  backgroundColor: resolveColor(theme, color, coloring),
  ...(coloring.transparency ? { opacity: 1 - coloring.transparency } : {}),
}));
