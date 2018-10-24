import React from 'react';

import { styled } from '../../styles';
import { Color } from '../../themes/colors';

import styles from './styles';

interface Props {
  color?: Color;
}

const StyledSvg = styled('svg', { label: 'warning-icon' })<{ color: Color }>(...styles.warningIconStyles);

const WarningIcon = ({ color = 'white', ...rest }: Props) => (
  <StyledSvg {...rest} color={color} x="0px" y="0px" height="24px" width="24px" viewBox="0 0 24 24">
    <path d="M11.4,13.097v-5.75c0-0.332,0.269-0.6,0.6-0.6s0.6,0.269,0.6,0.6v5.75c0,0.331-0.269,0.6-0.6,0.6S11.4,13.428,11.4,13.097z   M12,15.05c-0.442,0-0.8,0.359-0.8,0.801s0.358,0.801,0.8,0.801s0.8-0.359,0.8-0.801S12.442,15.05,12,15.05z M22.6,12  c0,5.845-4.755,10.6-10.6,10.6S1.4,17.845,1.4,12S6.155,1.4,12,1.4S22.6,6.155,22.6,12z M21.4,12c0-5.183-4.217-9.4-9.4-9.4  S2.6,6.817,2.6,12c0,5.184,4.217,9.4,9.4,9.4S21.4,17.184,21.4,12z" />
  </StyledSvg>
);

export default WarningIcon;
