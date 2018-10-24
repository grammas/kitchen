import { Tracking } from '../themes/typography';

import css from './css';

export default css<[Tracking]>((_theme, tracking) => ({
  letterSpacing: tracking,
}));
