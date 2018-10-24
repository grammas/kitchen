import React from 'react';

import { styled } from '../../styles';
import { Status } from '../../themes';

import styles from './styles';

interface Props {
  flipped?: boolean;
  role?: string;
  status?: Status;
}

const StyledSvg = styled.svg<{ flipped?: boolean; status?: Status }>(...styles.hintStyles);

const WarningHint = ({ flipped, status = 'warning', ...rest }: Props) => (
  <StyledSvg {...rest} flipped={flipped} status={status} width="18px" height="18px" viewBox="0 0 18 18">
    <g transform="translate(-985.000000, -775.000000)" fill="#ffab44">
      <g transform="translate(986.000000, 776.000000)">
        <path
          d="M8,17 C3.02943725,17 -1,12.9705627 -1,8 C-1,3.02943725 3.02943725,-1 8,-1 C12.9705627,-1 17,3.02943725 17,8 C17,12.9705627 12.9705627,17 8,17 Z M8,15 C11.8659932,15 15,11.8659932 15,8 C15,4.13400675 11.8659932,1 8,1 C4.13400675,1 1,4.13400675 1,8 C1,11.8659932 4.13400675,15 8,15 Z"
          fillRule="nonzero"
        />
        <circle cx="8" cy="11" r="1" />
        <path
          d="M7,4.8 C7,4.24771525 7.44771525,3.8 8,3.8 C8.55228475,3.8 9,4.24771525 9,4.8 L9,8 C9,8.55228475 8.55228475,9 8,9 C7.44771525,9 7,8.55228475 7,8 L7,4.8 Z"
          fillRule="nonzero"
        />
      </g>
    </g>
  </StyledSvg>
);

export default WarningHint;
