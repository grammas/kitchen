import React from 'react';

import { styled } from '../../styles';
import { Status } from '../../themes';

import styles from './styles';

import { DangerIcon, DebugIcon, InfoIcon, SuccessIcon, WarningIcon } from '../svg';

interface Props {
  children?: React.ReactNode;
  status?: Status;
  stretch?: { bookendWidth?: string };
}

const Container = styled.div<{ stretch?: { bookendWidth?: string } }>(...styles.icon);

const MessageIcon = ({ children, status, stretch }: Props) => (
  <Container stretch={stretch}>
    {!status && children}
    {status === 'success' && <SuccessIcon />}
    {status === 'warning' && <WarningIcon />}
    {status === 'danger' && <DangerIcon />}
    {status === 'info' && <InfoIcon />}
    {status === 'debug' && <DebugIcon />}
  </Container>
);

export default MessageIcon;
