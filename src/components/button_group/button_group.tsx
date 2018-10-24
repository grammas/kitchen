import React from 'react';

import { styled } from '../../styles';

import styles from './styles';
import { Alignment } from './types';

const defaultProps = {
  align: 'right' as Alignment,
  fill: false,
  flex: false,
  mobile: false,
};

type Props = { children: React.ReactNode } & typeof defaultProps;

interface StyledButtonGroupProps {
  align: Alignment;
  fill: boolean;
  mobile: boolean;
}

const StyledButtonGroup = styled('ul', {
  shouldForwardProp: prop => !['fill', 'mobile'].some(p => p === prop),
})<StyledButtonGroupProps>(...styles.group);

const StyledLi = styled.li<{ flex: boolean }>(...styles.item);

const ButtonGroup = ({ children, flex, ...rest }: Props) => (
  <StyledButtonGroup {...rest}>
    {React.Children.map(children, child => (child ? <StyledLi flex={flex}>{child}</StyledLi> : null))}
  </StyledButtonGroup>
);

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
