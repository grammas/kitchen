import React from 'react';

import { styled } from '../../styles';
import { Status } from '../../themes';

import styles from './styles';
import { Size } from './types';

const defaultProps = {
  noMargin: false,
  size: 'm' as Size,
};

type Props = { children: string; status: Status } & typeof defaultProps;

const StyledInlineNotification = styled.p<Props>(...styles.inline);

const InlineNotification = (props: Props) => <StyledInlineNotification {...props} />;

InlineNotification.defaultProps = defaultProps;

export default InlineNotification;
