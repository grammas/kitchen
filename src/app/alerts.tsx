import React from 'react';

import { Button, Message, MessageButton, MessageIcon, NotificationBanner, Text } from '../components';
import { Alert } from '../store/admin';
import { styled } from '../styles';

import styles from './styles';

const noopAlert = Alert('debug', 'i am not an alert', {});

interface Props {
  alerts?: Alert[];
  ackAlert: () => void;
}

const StyledAlerts = styled.div<{}>(...styles.alerts);

const nextAlert = (alerts?: Alert[]) => {
  if (alerts && alerts.length > 0) {
    return alerts[0];
  }
  return;
};

class Alerts extends React.Component<Props> {
  private timeout: any = null;

  componentDidUpdate({ alerts: prevAlerts }: Props) {
    const { ackAlert, alerts } = this.props;

    const prevAlert = nextAlert(prevAlerts);
    const alert = nextAlert(alerts);

    if (alert && (!prevAlert || prevAlert.key !== alert.key)) {
      const { dismissable, displayForMillis = 3000 } = alert;

      if (!dismissable) {
        this.timeout = setTimeout(() => {
          ackAlert();
          this.timeout = null;
        }, displayForMillis);
      }
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { ackAlert, alerts } = this.props;

    const alert = nextAlert(alerts);
    const { dismissable } = alert || noopAlert;

    return (
      <StyledAlerts>
        <NotificationBanner padding="l" status={alert && alert.type}>
          <Message stretch>
            {alert && <MessageIcon status={alert.type} />}
            {alert && (
              <Text color="white" size="deci" noMargin blacklist={['alert', 'color', 'size', 'noMargin']}>
                {alert.message}
              </Text>
            )}
            {dismissable && (
              <MessageButton>
                <Button
                  as="button"
                  color={alert && alert.type}
                  inverted
                  size="centi"
                  padding="s"
                  onClick={() => ackAlert()}
                  variant="ghost"
                >
                  dismiss
                </Button>
              </MessageButton>
            )}
          </Message>
        </NotificationBanner>
      </StyledAlerts>
    );
  }
}

export default Alerts;
