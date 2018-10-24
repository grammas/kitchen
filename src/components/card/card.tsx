import React from 'react';

import { styled } from '../../styles';

import { Padding, Shadow } from './types';
import styles from './styles';

const defaultProps = {
  padding: 'normal' as Padding,
  shadow: 'single' as Shadow,
};

type Props = {
  header?: React.ReactElement;
  children: React.ReactNode;
  footer?: React.ReactElement;
} & typeof defaultProps;

const StyledCard = styled.div<{ padding: Padding; shadow: Shadow }>(...styles.card);

const Card = ({ header, children, footer, ...rest }: Props) => (
  <StyledCard {...rest}>
    {header}
    {children}
    {footer}
  </StyledCard>
);

Card.defaultProps = defaultProps;

export default Card;
