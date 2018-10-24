import { combineReducers } from 'redux';
import { History } from 'history';

import AdminReducer from '../admin/reducer';
import RouterReducer from '../router/reducer';

export default <REDUCERS extends {} = {}>(reducers: REDUCERS) => (history: History) =>
  combineReducers({
    admin: AdminReducer,
    router: RouterReducer(history),
    ...reducers,
  });
