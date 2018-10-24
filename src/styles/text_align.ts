import { Alignment } from '../themes/typography';

import css from './css';

export default css<[Alignment]>((_theme, align) => ({
  textAlign: align,
}));
