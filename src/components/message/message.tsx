import React from 'react';

import { styled } from '../../styles';

import styles from './styles';

interface Props {
  children: React.ReactNode;
  stretch?: boolean;
}

const StyledMessage = styled.div<Props>(...styles.message);

const Message = (props: Props) => <StyledMessage {...props} />;

export default Message;
