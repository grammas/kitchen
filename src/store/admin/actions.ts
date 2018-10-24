import { actionFactory } from '../actions';

import State from './state';
import { AlertParams, Alert } from './types';

const actionBuilder = actionFactory().forNamespace<State>(State.NAMESPACE);

export const startWork = actionBuilder
  .withType('start work')
  .withoutPayload()
  .withReducer(state => ({ ...state, working: state.working + 1 }));

export const endWork = actionBuilder
  .withType('end work')
  .withoutPayload()
  .withReducer(state => ({ ...state, working: state.working > 0 ? state.working - 1 : 0 }));

export const addAlert = actionBuilder
  .withType('add alert')
  .withArgs<AlertParams, Alert>((type, message, options) => Alert(type, message, options))
  .withReducer((state, { payload }) => ({ ...state, alerts: state.alerts.concat(payload) }));

export const ackAlert = actionBuilder
  .withType('ack alert')
  .withoutPayload()
  .withReducer(state => ({ ...state, alerts: state.alerts.slice(1) }));
