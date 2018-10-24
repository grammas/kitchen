import React from 'react';

import { styled } from '../../styles';
import { Color } from '../../themes/colors';

import styles from './styles';

interface Props {
  color?: Color;
}

const StyledSvg = styled('svg', { label: 'success-icon' })<{ color: Color }>(...styles.successIconStyles);

const SuccessIcon = ({ color = 'white', ...rest }: Props) => (
  <StyledSvg {...rest} color={color} x="0px" y="0px" height="24px" width="24px" viewBox="0 0 22 22">
    <g transform="translate(0,-1028.3622)">
      <path d="m 12,1030.3613 c -5.5169381,0 -10.0000183,4.4831 -10,10 -1.83e-5,5.517 4.4830619,10 10,10 5.516938,0 10.000018,-4.483 10,-10 1.8e-5,-5.5169 -4.483062,-10 -10,-10 z m 0,1 c 4.976462,0 9.000017,4.0236 9,9 1.7e-5,4.9765 -4.023538,9 -9,9 -4.9764621,0 -9.0000165,-4.0235 -9,-9 -1.65e-5,-4.9764 4.0235379,-9 9,-9 z" />
      <path d="m 16.152344,1036.9531 -5.111328,5.4043 -2.6015629,-2.4609 -0.6875,0.7265 3.3281249,3.1485 5.798828,-6.1309 -0.726562,-0.6875 z" />
    </g>
  </StyledSvg>
);

export default SuccessIcon;
