import { Theme } from '../themes';
import { fade } from '../utils';

const left = (theme: Theme, left: number, opacity: number) => `0 0 0 ${left}px ${fade(theme.colors.shadow, opacity)}`;

const rightBottom = (theme: Theme, right: number, bottom: number, opacity: number) =>
  `0 ${bottom}px ${right}px 0 ${fade(theme.colors.shadow, opacity)}`;

export interface Shadows {
  single: (theme: Theme) => string;
  double: (theme: Theme) => string;
  triple: (theme: Theme) => string;
}

export default {
  single: (theme: Theme) =>
    `${left(theme, 1, 0.97)}, ${rightBottom(theme, 1, 0, 0.94)}, ${rightBottom(theme, 2, 2, 0.94)}`,
  double: (theme: Theme) =>
    `${left(theme, 1, 0.98)}, ${rightBottom(theme, 2, 2, 0.94)}, ${rightBottom(theme, 4, 4, 0.94)}`,
  triple: (theme: Theme) =>
    `${left(theme, 1, 0.98)}, ${rightBottom(theme, 4, 4, 0.94)}, ${rightBottom(theme, 8, 8, 0.94)}`,
}
