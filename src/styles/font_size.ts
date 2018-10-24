import { Size } from '../themes/typography';

import css from './css';

export default css<[Size]>((theme, fontSize) => ({
  fontSize: theme.typography.fontSizes[fontSize],
  lineHeight: theme.typography.lineHeights[fontSize],
}));
