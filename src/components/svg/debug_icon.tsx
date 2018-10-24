import React from 'react';

import { styled } from '../../styles';
import { Color } from '../../themes/colors';

import styles from './styles';

interface Props {
  color?: Color;
}

const StyledSvg = styled('svg', { label: 'debug-icon' })<{ color: Color }>(...styles.debugIconStyles);

const DebugIcon = ({ color = 'white', ...rest }: Props) => (
  <StyledSvg {...rest} color={color} x="0px" y="0px" height="24px" width="24px" viewBox="0 0 500 500">
    <g>
      <path d="M72,367.8c30.7-31.3,61.4-62.7,92-94c4.4-4.5,8.8-9,13.2-13.5c5.7-5.8,5.7-15.4,0-21.2c-30.7-31.3-61.4-62.7-92-94     c-4.4-4.5-8.8-9-13.2-13.5c-5.7-5.8-15.5-5.7-21.2,0c-5.8,5.8-5.7,15.4,0,21.2c30.7,31.3,61.4,62.7,92,94     c4.4,4.5,8.8,9,13.2,13.5c0-7.1,0-14.1,0-21.2c-30.7,31.3-61.4,62.7-92,94c-4.4,4.5-8.8,9-13.2,13.5c-5.7,5.8-5.8,15.4,0,21.2     C56.5,373.5,66.3,373.6,72,367.8L72,367.8z" />
      <path d="M192.7,372.7c27.7,0,55.4,0,83.1,0c44.1,0,88.2,0,132.4,0c10.1,0,20.2,0,30.3,0c7.8,0,15.4-6.9,15-15     c-0.4-8.1-6.6-15-15-15c-27.7,0-55.4,0-83.1,0c-44.1,0-88.2,0-132.4,0c-10.1,0-20.2,0-30.3,0c-7.8,0-15.4,6.9-15,15     C178,365.8,184.2,372.7,192.7,372.7L192.7,372.7z" />
    </g>
  </StyledSvg>
);

export default DebugIcon;
