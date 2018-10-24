import { Theme } from '../themes';

import css from './css';

export default css<[string | ((theme: Theme) => string)]>((theme, shadows) => ({
  boxShadow: typeof shadows === 'string' ? shadows : shadows(theme),
}));
