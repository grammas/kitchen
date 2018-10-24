import React from 'react';

import { styled, visuallyHidden } from '../../styles';

import { CloseIcon } from '../svg';

import styles from './styles';
import SvgButton from './svg';

interface Props {
  label?: string;
  onClick?: () => {};
}

const ButtonLabel = styled.span(visuallyHidden);

const StyledSvgButton = styled(SvgButton)<{}>(...styles.close);

const CloseButton = ({ label, ...rest }: Props) => (
  <StyledSvgButton {...rest}>
    <CloseIcon />
    <ButtonLabel>{label}</ButtonLabel>
  </StyledSvgButton>
);

export default CloseButton;
