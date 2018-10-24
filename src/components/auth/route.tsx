import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

import { User } from '../../store/users';

interface Props extends RouteProps {
  user?: User;
  open?: boolean;
  permit?: (props: ReturnType<typeof permitProps>) => boolean;
  redirects?: { standard: string; reverse: string };
  redirectTo?: string;
  reverse?: boolean;
  type?: string;
}

const userTypes = { user: 0, admin: 1, me: 2 } as { [key: string]: number };
const isUserQualified = (targetType: string, userType = '') => {
  const targetScore = userTypes[targetType] || 0;
  const userScore = userTypes[userType] || -1;
  return userScore >= targetScore;
};

const permitProps = (user?: User) => ({
  user,
  hasRole: (type: string) => (user ? isUserQualified(type, user.type) : false),
});

const AuthRoute = ({
  open,
  permit,
  redirectTo,
  redirects,
  reverse = false,
  type,
  user,
  component: Component,
  render,
  ...rest
}: Props) => {
  let answer = (user && !reverse) || (!user && reverse);

  if (type && user) {
    answer = isUserQualified(type, user.type);
  }

  if (permit) {
    answer = permit(permitProps(user));
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (open || answer) {
          if (Component) {
            return <Component {...props} />;
          }
          if (render) {
            return render(props);
          }
        }
        return <Redirect to={redirectTo || (redirects ? (reverse ? redirects.reverse : redirects.standard) : '')} />;
      }}
    />
  );
};

export default AuthRoute;
