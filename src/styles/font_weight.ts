import { Weight } from '../themes/typography';

import css from './css';

export default css<[Weight]>((theme, fontWeight) => ({
  fontWeight: theme.typography.weights[fontWeight],
}));
