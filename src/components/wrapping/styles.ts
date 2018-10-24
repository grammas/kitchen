import { styles } from '../../styles';

const baseWrappingStyles = styles<{ limit: number; unit: string }>(css => ({ limit, unit }) =>
  css({
    label: 'wrapping',
    maxWidth: `${limit}${unit}`,
  })
);

const wrappingCenteredStyles = styles<{ centered: boolean }>(css => ({ centered }) =>
  centered &&
  css({
    label: 'wrapping--centered',
    marginLeft: 'auto',
    marginRight: 'auto',
  })
);

const wrappingMobileStyles = styles(css => ({ theme }) =>
  css(
    {
      label: 'wrapping--mobile',
    },
    theme.mediaQueries.atMostKilo({
      maxWidth: '100%',
      marginLeft: theme.spacers.rems.femto,
      marginRight: theme.spacers.rems.femto,
    })
  )
);

export default [baseWrappingStyles, wrappingCenteredStyles, wrappingMobileStyles];
