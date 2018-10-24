import React from 'react';

import { styled } from '../../styles';

import { Card, Padding, Shadow } from '../card';

import styles from './styles';

const defaultProps = {
  padding: 'normal' as Padding,
  shadow: 'single' as Shadow,
};

type Props = {
  children: React.ReactNode;
  className?: string;
} & typeof defaultProps;

const Menu = styled(Card)<Props>(...styles.menu);

Menu.defaultProps = defaultProps;

export default Menu;
