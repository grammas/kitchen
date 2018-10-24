import React from 'react';

import { styled } from '../../styles';
import { Status } from '../../themes';

import styles from './styles';
import { Padding } from './types';

interface Props {
  children: React.ReactElement;
  padding?: Padding | Padding[];
  shadow?: boolean;
  status?: Status;
}

interface StyledNotificationBannerProps {
  'aria-live': 'off' | 'assertive' | 'polite';
  shadow: boolean;
  region: string;
  status?: Status;
}

const StyledNotificationBanner = styled.div<StyledNotificationBannerProps>(...styles.banner.element);

const Inner = styled.div<{ padding?: Padding | Padding[] }>(...styles.banner.inner);

const NotificationBanner = ({ children, padding, shadow, ...rest }: Props) => (
  <StyledNotificationBanner {...rest} shadow={!!shadow} aria-live="polite" region="status">
    <Inner padding={padding}>{children}</Inner>
  </StyledNotificationBanner>
);

export default NotificationBanner;
