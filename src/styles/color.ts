import { Color, Coloring, resolveColor } from '../themes/colors';

import css from './css';

export default css<[Color, Coloring | undefined]>((theme, color, coloring = {}) => ({
  color: resolveColor(theme, color, coloring),
  ...(coloring.transparency ? { opacity: 1 - coloring.transparency } : {}),
}));
