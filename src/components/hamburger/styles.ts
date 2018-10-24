import { styles, visuallyHidden } from '../../styles';

const HAMBURGUER_WIDTH = '12px';
const LAYER_HEIGHT = '1px';

const baseButtonStyles = styles(css => ({ theme }) =>
  css({
    label: 'hamburger-button',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: theme.spacers.pixels.giga,
    width: theme.spacers.pixels.giga,
    background: 'none',
    border: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[3]}`,
    borderRadius: '50%',
    outline: 'none',
  })
);

const buttonLightStyles = styles<{ light: boolean }>(css => ({ theme, light }) =>
  light &&
  css({
    label: 'hamburger-button--light',
    border: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[7]}`,
  })
);

const baseLabelStyles = styles(css => () =>
  css(
    {
      label: 'hamburger-label',
    },
    visuallyHidden
  )
);

const baseLayersStyles = styles(css => ({ theme }) =>
  css({
    label: 'hamburger-layers',
    top: '50%',
    width: HAMBURGUER_WIDTH,
    '&, &::after, &::before': {
      backgroundColor: theme.colors.neutral[9],
      borderRadius: theme.spacers.pixels.micro,
      display: 'block',
      height: LAYER_HEIGHT,
      position: 'absolute',
      transition: theme.transitions.hamburger.base,
    },
    '&::before, &::after': {
      top: 0,
      content: '""',
    },
    '&::before': {
      transform: `translateY(-${theme.spacers.pixels.femto})`,
      width: HAMBURGUER_WIDTH,
    },
    '&::after': {
      transform: `translateY(${theme.spacers.pixels.femto})`,
      width: HAMBURGUER_WIDTH,
    },
  })
);

const layersLightStyles = styles<{ light: boolean }>(css => ({ theme, light }) =>
  light &&
  css({
    label: 'hamburger-layers--light',
    '&, &::after, &::before': {
      backgroundColor: theme.colors.neutral[1],
    },
  })
);

const layersActiveStyles = styles<{ active: boolean }>(css => ({ theme, active }) =>
  active &&
  css({
    label: 'hamburger-layers--active',
    transform: 'rotate(225deg)',
    '&, &::after, &::before': {
      width: HAMBURGUER_WIDTH,
      transition: theme.transitions.hamburger.active,
    },
    '&::before': {
      opacity: 0,
      transform: 'translateY(0)',
    },
    '&::after': {
      transform: 'translateY(0) rotate(-90deg)',
    },
  })
);

export default {
  button: [baseButtonStyles, buttonLightStyles],
  label: [baseLabelStyles],
  layers: [baseLayersStyles, layersLightStyles, layersActiveStyles],
};
