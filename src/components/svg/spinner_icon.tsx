import React from 'react';

import { styled } from '../../styles';
import { Coloring } from '../../themes/colors';

import styles from './styles';

interface Props {
  dark?: boolean;
  height?: string;
  width?: string;
  scale?: number;
}

const StyledSvg = styled('svg', { label: 'baseball-spinner' })<{ coloring: Coloring; scale?: number }>(
  ...styles.spinnerIconStyles
);

const Spinner = ({ dark = false, scale, height = '24', width = '24' }: Props) => (
  <StyledSvg
    coloring={dark ? { shade: 8 } : { shade: 1 }}
    scale={scale}
    width={`${width}px`}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
  >
    <path
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fillRule="evenodd"
      fillOpacity="0.4"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12H24C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 10.9641 0.131259 9.95886 0.378052 9C1.71018 3.82432 6.40848 0 12 0V2C7.34314 2 3.42514 5.18502 2.31493 9.49852C2.1097 10.2959 2 11.1337 2 12C2 17.5228 6.47715 22 12 22Z"
      transform="translate(0 24) rotate(-90)"
    />
  </StyledSvg>
);

export default Spinner;
