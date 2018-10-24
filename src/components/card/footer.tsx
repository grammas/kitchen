import React from 'react';

import { styled } from '../../styles';

import styles from './styles';
import { FooterAlignment } from './types';

const defaultProps = { align: 'right' as FooterAlignment };

type Props = {
  children?: React.ReactNode;
} & typeof defaultProps;

const CardFooter = styled.footer<Props>(...styles.footer);

CardFooter.defaultProps = defaultProps;

export default CardFooter;
