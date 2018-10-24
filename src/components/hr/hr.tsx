import React from 'react';

import { styled } from '../../styles';
import { Size } from '../../themes/spacers';

import styles from './styles';

interface Props {
  faded?: boolean;
  marginTop?: Size;
  width?: string;
}

const StyledHr = styled.hr<Props>(...styles);

const Hr = (props: Props) => <StyledHr {...props} />;

export default Hr;
