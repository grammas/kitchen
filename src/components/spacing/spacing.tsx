import React from 'react';

import { styled } from '../../styles';
import { Size } from '../../themes/spacers/types';

import styles from './styles';

const defaultProps = {
  bottom: false,
  top: false,
  size: 'base' as Size,
};

type Props = { children: React.ReactNode } & typeof defaultProps;

const StyledSpacing = styled.div<{ bottom: boolean; top: boolean; size: Size }>(...styles);

const Spacing = ({ children, ...rest }: Props) => <StyledSpacing {...rest}>{children}</StyledSpacing>;

Spacing.defaultProps = defaultProps;

export default Spacing;
