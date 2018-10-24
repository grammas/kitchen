import React from 'react';

import { styled } from '../../styles';

import styles from './styles';
import { Element } from './types';

const defaultProps = {
  as: 'div' as Element,
  limit: 100,
  unit: '%',
  centered: false,
};

type Props = { children: React.ReactNode } & typeof defaultProps;

const StyledWrapping = styled.div<{ limit: number; unit: string; centered: boolean }>(...styles);

const Wrapping = ({ children, ...rest }: Props) => <StyledWrapping {...rest}>{children}</StyledWrapping>;

Wrapping.defaultProps = defaultProps;

export default Wrapping;
