import { styles } from '../../styles';
import { Size } from '../../themes/spacers';

const baseBottomMarginStyles = styles<{ bottom: boolean; size: Size }>(css => ({ theme, bottom, size }) =>
  bottom &&
  css({
    label: 'spacing--bottom',
    marginBottom: theme.spacers.pixels[size],
  })
);

const baseTopMarginStyles = styles<{ top: boolean; size: Size }>(css => ({ theme, top, size }) =>
  top &&
  css({
    label: 'spacing--top',
    marginTop: theme.spacers.pixels[size],
  })
);

export default [baseBottomMarginStyles, baseTopMarginStyles];
