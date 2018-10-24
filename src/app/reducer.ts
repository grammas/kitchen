import { combineReducers } from 'redux';
import { History } from 'history';

import adminReducer from '../store/admin';
import authReducer from '../store/auth';
import usersReducer from '../store/users';
import recipesReducer from '../store/recipes';
import routerReducer from '../store/router';

export default (history: History) =>
  combineReducers({
    admin: adminReducer,
    auth: authReducer,
    users: usersReducer,
    recipes: recipesReducer,
    router: routerReducer(history),
  });
