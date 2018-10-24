import body, { Body } from './body';
import colors, { Colors } from './colors';
import mediaQueries, { MediaQueries } from './media_queries';
import spacers, { Spacers } from './spacers';
import transitions, { Transitions } from './transitions';
import typography, { Typography } from './typography';

export interface Theme {
  body: Body;
  colors: Colors;
  mediaQueries: MediaQueries;
  spacers: Spacers;
  transitions: Transitions;
  typography: Typography;
}

const theme: Theme = {
  body,
  colors,
  mediaQueries,
  spacers,
  transitions,
  typography,
};

export default theme;
