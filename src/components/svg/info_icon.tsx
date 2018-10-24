import React from 'react';

import { styled } from '../../styles';
import { Color } from '../../themes/colors';

import styles from './styles';

interface Props {
  color?: Color;
}

const StyledSvg = styled('svg', { label: 'info-icon' })<{ color: Color }>(...styles.infoIconStyles);

const InfoIcon = ({ color = 'white', ...rest }: Props) => (
  <StyledSvg {...rest} color={color} x="0px" y="0px" height="24px" width="24px" viewBox="0 0 22 22">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g>
        <path d="M11,0 C4.92492,0 0,4.92492 0,11 C0,17.07508 4.92492,22 11,22 C17.07508,22 22,17.07508 22,11 C22,4.92492 17.07508,0 11,0 Z M11,1.5 C5.75334,1.5 1.5,5.75334 1.5,11 C1.5,16.24666 5.75334,20.5 11,20.5 C16.24666,20.5 20.5,16.24666 20.5,11 C20.5,5.75334 16.24666,1.5 11,1.5 Z" />
        <rect x="10.25" y="9" width="1.5" height="6" rx="0.75" />
        <circle cx="11" cy="7" r="1" />
      </g>
    </g>
  </StyledSvg>
);

export default InfoIcon;
