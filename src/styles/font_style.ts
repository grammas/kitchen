import { Style } from '../themes/typography';

import css from './css';

export default css<[Style]>((_theme, fontStyle) => ({
  fontStyle: typeof fontStyle === 'string' ? fontStyle : `oblique ${fontStyle.angle}deg`,
}));
