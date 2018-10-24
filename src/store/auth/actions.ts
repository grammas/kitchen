import { UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

import { actionFactory } from '../../store/actions';
import { User } from '../../store/users';

import State from './state';

const actionBuilder = actionFactory().forNamespace<State>(State.NAMESPACE);

const setUser = actionBuilder
  .withType('set user')
  .withPayload<User | undefined>()
  .withReducer((state, { payload: user }) => ({ ...state, user }));

const login = actionBuilder
  .withType('login')
  .asThunk(
    (email: string, password: string) => (_dispatch, _getState, stitch) =>
      stitch.auth.loginWithCredential(new UserPasswordCredential(email, password)),
    ({ args: [email] }) => `Welcome back, ${email}`
  );

const logout = actionBuilder
  .withType('logout')
  .asThunk(
    () => (_dispatch, _getState, stitch) => stitch.auth.logout(),
    'You have successfully logged out. We hope to see you soon!'
  );

const register = actionBuilder
  .withType('register')
  .asThunk(
    (email: string, password: string) => (_dispatch, _getState, stitch) =>
      stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory).registerWithEmail(email, password),
    ({ args: [email] }) =>
      `An email has been sent to your inbox (${email}) containing a link to confirm your email address.`
  );

const sendConfirmationEmail = actionBuilder
  .withType('send confirmation email')
  .asThunk(
    (email: string) => (_dispatch, _getState, stitch) =>
      stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory).resendConfirmationEmail(email),
    ({ args: [email] }) =>
      `An email has been sent to your inbox (${email}) containing a link to confirm your email address.`
  );

const sendPasswordResetEmail = actionBuilder
  .withType('send password reset email')
  .asThunk(
    (email: string) => (_dispatch, _getState, stitch) =>
      stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory).sendResetPasswordEmail(email),
    ({ args: [email] }) => `An email has been sent to your inbox (${email}) containing a link to reset your password.`
  );

const confirmEmail = actionBuilder
  .withType('confirm email')
  .asThunk(
    (token: string, tokenId: string) => (_dispatch, _getState, stitch) =>
      stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory).confirmUser(token, tokenId),
    `Thank you for confirming your email address. Welcome to Gramma's Kitchen!`
  );

const resetPassword = actionBuilder
  .withType('reset password')
  .asThunk(
    (token: string, tokenId: string, password: string) => (_dispatch, _getState, stitch) =>
      stitch.auth.getProviderClient(UserPasswordAuthProviderClient.factory).resetPassword(token, tokenId, password),
    'You have successfully changed your password.'
  );

export { setUser, login, logout, register, sendConfirmationEmail, sendPasswordResetEmail, confirmEmail, resetPassword };
