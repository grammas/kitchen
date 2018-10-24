import React from 'react';

import { Card, CardHeader } from '../card';
import { Heading } from '../heading';
import { Spacing } from '../spacing';
import { Text } from '../text';

interface State {
  error?: Error;
}

class ErrorBoundary extends React.Component<{}, State> {
  readonly state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: any) {
    console.error('unexpected error occured', error);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (!error) {
      return children;
    }

    return (
      <>
        <Spacing top size="mega">
          <Heading>Ooops...something went wrong here</Heading>
        </Spacing>
        <Text>
          Try refreshing the page. If the problem persists, then we are actively working fixing the underlying issue at
          hand. Hang tight!
        </Text>
        <Card
          header={
            <CardHeader>
              <Heading as="h2">{error.name}</Heading>
            </CardHeader>
          }
        >
          <Text as="pre">
            {error.message}
          </Text>
        </Card>
      </>
    );
  }
}

export default ErrorBoundary;
