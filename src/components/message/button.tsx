import React from 'react';

import { styled } from '../../styles';

import styles from './styles';
import { Alignment } from './types';

const defaultProps = {
  align: 'center' as Alignment,
};

type Props = { children: React.ReactNode; stretch?: { bookendWidth?: string } } & typeof defaultProps;

const StyledMessageButton = styled('div', { shouldForwardProp: prop => prop !== 'inverted' })<Props>(...styles.button);

const MessageButton = (props: Props) => <StyledMessageButton {...props} />;

MessageButton.defaultProps = defaultProps;

export default MessageButton;
