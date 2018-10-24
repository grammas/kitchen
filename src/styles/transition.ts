import { Theme } from '../themes';

import css from './css';

const transition = css<[string | ((theme: Theme) => string)]>((theme, transitions) => ({
  transition: typeof transitions === 'string' ? transitions : transitions(theme),
}));

export default transition;
