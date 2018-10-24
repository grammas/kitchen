import { Transform } from '../themes/typography';

import css from './css';

export default css<[Transform]>((_theme, textTransform) => ({
  textTransform,
}));
