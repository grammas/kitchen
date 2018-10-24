import React from 'react';

import { styled } from '../../styles';
import { Color } from '../../themes/colors';

import styles from './styles';

interface Props {
  color?: Color;
}

const StyledSvg = styled('svg', { label: 'close-icon' })<{ color: Color }>(...styles.closeIconStyles);

const CloseIcon = ({ color = 'black' }: Props) => (
  <StyledSvg color={color} width="13" height="13" viewBox="0 0 13 13">
    <path d="M6.5,7.21L2.43,11.27a0.5,0.5,0,0,1-.71-0.71L5.79,6.5,1.73,2.43a0.5,0.5,0,0,1,.71-0.71L6.5,5.79l4.07-4.07a0.5,0.5,0,0,1,.71.71L7.21,6.5l4.07,4.07a0.5,0.5,0,0,1-.71.71Z" />
  </StyledSvg>
);

export default CloseIcon;
