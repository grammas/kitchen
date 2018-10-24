import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { Stitch } from 'mongodb-stitch-browser-sdk';

import { cssResets } from './styles';
import { theme } from './themes';

import App, { AppContext, AppReducer, AppState } from './app';
import AppHarness from './harness';
import LocalStorageState, { KEY as LOCAL_STORAGE_KEY } from './local_storage';

import { actions as authActions } from './store/auth';
import { findOne, User } from './store/users';
import { debounce } from './utils';

const harness = new AppHarness(AppState(LocalStorageState.read(LOCAL_STORAGE_KEY)));

const history = harness.createHistory();
const store = harness.createStore(AppReducer(history), AppContext('kitchen-wgfhp'));

Stitch.defaultAppClient.auth.addAuthListener({
  onAuthEvent: auth =>
    auth.user
      ? store
          .dispatch<any>(findOne.creator.worker({ email: auth.user.profile.email }))
          .then((user: User | undefined) => store.dispatch(authActions.setUser.creator.action(user)))
      : store.dispatch(authActions.setUser.creator.action(undefined)),
});

store.subscribe(
  debounce(() => {
    LocalStorageState.write(LOCAL_STORAGE_KEY, store.getState().auth);
  }, 500)
);

const renderApp = (Component: React.ComponentType<any>) =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <ThemeProvider theme={theme}>
            <Global styles={cssResets(theme)} />
            <Component />
          </ThemeProvider>
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );

renderApp(App);

if ((module as any).hot) {
  (module as any).hot.accept('./app/app', () => {
    const appLayout = require('./app/app');
    renderApp(appLayout);
  });
}
