import { Decoration } from '../themes/typography';

import css from './css';

export default css<[Decoration]>((_theme, textDecoration) =>
  typeof textDecoration === 'string'
    ? {
        textDecoration,
      }
    : {
        textDecorationLine:
          typeof textDecoration.line === 'string' ? textDecoration.line : textDecoration.line.join(' '),
        ...(textDecoration.style ? { textDecorationStyle: textDecoration.style } : {}),
      }
);
