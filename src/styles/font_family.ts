import { Font } from '../themes/typography';

import css from './css';

export default css<[Font]>((theme, font) => ({
  fontFamily: theme.typography.fonts[font],
}));
