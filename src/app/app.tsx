import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import { AppState } from '../app';
import { StackedLogo, LongLogo } from '../components';
import { actions as adminActions, Alert } from '../store/admin';
import { actions as authActions } from '../store/auth';
import { User } from '../store/users';
import { styled } from '../styles';

import AppAlerts from './alerts';
import AppHeader from './header';
import AppRoutes from './routes';
import styles from './styles';

import AppUrls from './urls';

interface StateProps {
  alerts: Alert[];
  user?: User;
  working: number;
}

interface DispatchProps {
  ackAlert: () => void;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  register: (email: string, password: string) => Promise<void>;
  sendConfirmationEmail: (email: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  confirmEmail: (token: string, tokenId: string) => Promise<void>;
  resetPassword: (token: string, tokenId: string, password: string) => Promise<void>;
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const StyledLayout = styled.div<{}>(...styles.layout);

class App extends React.Component<Props> {
  render() {
    const {
      ackAlert,
      alerts,
      confirmEmail,
      location: { pathname: currentRoute },
      login,
      logout,
      register,
      resetPassword,
      sendConfirmationEmail,
      sendPasswordResetEmail,
      user,
      working,
    } = this.props;

    const nav: { [key: string]: string } = {};
    if (user && user.type === 'me') {
      nav['admin'] = AppUrls.admin;
    }
    nav['home'] = AppUrls.home;
    nav['recipes'] = AppUrls.recipes.list;
    nav['users'] = AppUrls.users.list;

    return (
      <StyledLayout>
        <AppHeader
          currentRoute={currentRoute}
          logo={{ to: AppUrls.home, img: largeDisplay => (largeDisplay ? <StackedLogo /> : <LongLogo />) }}
          logout={logout}
          nav={nav}
          urls={{ login: AppUrls.auth.login }}
          user={user}
          working={working}
        />
        <AppAlerts ackAlert={ackAlert} alerts={alerts} />
        <AppRoutes
          redirects={{ standard: AppUrls.auth.login, reverse: AppUrls.home }}
          user={user}
          login={login}
          register={register}
          sendConfirmationEmail={sendConfirmationEmail}
          sendPasswordResetEmail={sendPasswordResetEmail}
          confirmEmail={confirmEmail}
          resetPassword={resetPassword}
        />
      </StyledLayout>
    );
  }
}

const mapStateToProps = ({ admin, auth }: AppState) => ({
  alerts: admin.alerts,
  user: auth.user,
  working: admin.working,
});

const mapDispatchToProps = {
  ackAlert: adminActions.ackAlert.creator.action,
  login: authActions.login.creator.worker,
  logout: authActions.logout.creator.worker,
  register: authActions.register.creator.worker,
  sendConfirmationEmail: authActions.sendConfirmationEmail.creator.worker,
  sendPasswordResetEmail: authActions.sendPasswordResetEmail.creator.worker,
  confirmEmail: authActions.confirmEmail.creator.worker,
  resetPassword: authActions.resetPassword.creator.worker,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
