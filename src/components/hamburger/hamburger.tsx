import React from 'react';

import { styled } from '../../styles';

import styles from './styles';

const defaultProps = {
  active: false,
  labelActive: 'Close menu',
  labelInactive: 'Open menu',
  light: false,
  onClick: () => {},
};

type Props = { className?: string } & typeof defaultProps;

interface HamburgerButtonProps {
  light: boolean;
}

interface HamburgerLayersProps {
  active: boolean;
  light: boolean;
}

const HamburgerButton = styled.button<HamburgerButtonProps>(...styles.button);

const HamburgerLayers = styled.span<HamburgerLayersProps>(...styles.layers);

const HamburgerLabel = styled.span<{}>(...styles.label);

const Hamburger = ({ active, light, labelActive, labelInactive, ...rest }: Props) => (
  <HamburgerButton {...rest} light={light}>
    <HamburgerLayers active={active} light={light} />
    <HamburgerLabel>{active ? labelActive : labelInactive}</HamburgerLabel>
  </HamburgerButton>
);

Hamburger.defaultProps = defaultProps;

export default Hamburger;
