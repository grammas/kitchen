import React from 'react';
import { Switch } from 'react-router';

import { User } from '../../store/users';

import { ErrorBoundary } from '../error';

interface ChildProps {
  user?: User;
  redirects?: { standard: string; reverse: string };
  omitErrorBoundary?: boolean;
}

interface Props extends ChildProps {
  children: React.ReactNode;
}

const AuthRoutes = ({ children, omitErrorBoundary, redirects, user }: Props) => {
  const routes = (
    <Switch>
      {React.Children.map(children, child => {
        if (React.isValidElement<ChildProps>(child)) {
          return React.cloneElement(child, { redirects, user });
        }
        return null;
      }).filter(child => !!child)}
    </Switch>
  );

  if (omitErrorBoundary) {
    return routes;
  }
  return <ErrorBoundary>{routes}</ErrorBoundary>;
};

export default AuthRoutes;
