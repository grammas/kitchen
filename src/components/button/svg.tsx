import React from 'react';

import { styled } from '../../styles';

import styles from './styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => {};
}

const StyledSvgButton = styled.button<Props>(...styles.svg);

const SvgButton = (props: Props) => <StyledSvgButton type="button" {...props} />;

export default SvgButton;
