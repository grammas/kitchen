import { push } from 'connected-react-router';

import actionFactory from '../actions/factory';

import State from './state';

export const goto = actionFactory()
  .forNamespace<State>(State.NAMESPACE)
  .withType('goto')
  .asThunk((url: string) => dispatch => dispatch(push(url)));
