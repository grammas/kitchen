import React from 'react';

import { styled } from '../../styles';

import { CloseButton } from '../button';

import styles from './styles';

const defaultProps = { closeButtonLabel: '' };

type Props = {
  children?: React.ReactNode;
  onClose?: () => {};
} & typeof defaultProps;

const Container = styled.header<Props>(...styles.header);

const CardHeader = ({ children, closeButtonLabel, onClose }: Props) => (
  <Container closeButtonLabel={closeButtonLabel}>
    {children}
    {onClose && <CloseButton onClick={onClose} label={closeButtonLabel} />}
  </Container>
);

CardHeader.defaultProps = defaultProps;

export default CardHeader;
