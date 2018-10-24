import { styles } from '../../styles';
import { Size } from '../../themes/spacers';

const baseHrStyles = styles<{ width?: string }>(css => ({ theme, width = '100%' }) =>
  css({
    label: 'hr',
    width,
    color: theme.colors.neutral[7],
  })
);

const hrMarginStyles = styles<{ marginTop?: Size }>(css => ({ theme, marginTop }) =>
  marginTop &&
  css({
    marginTop: theme.spacers.pixels[marginTop],
  })
);

const hrFadedStyles = styles<{ faded?: boolean }>(css => ({ faded }) =>
  faded &&
  css({
    opacity: 0.7,
  })
);

export default [baseHrStyles, hrMarginStyles, hrFadedStyles];
