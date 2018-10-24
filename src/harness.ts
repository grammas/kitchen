import { applyMiddleware, compose, createStore, Middleware, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory, History } from 'history';

export default class<STATE extends {} = {}> {
  private middlewares = [] as Middleware[];

  constructor(private initialState: STATE) {}

  createHistory(
    historySupplier = (present =>
      present ? createBrowserHistory({ basename: process.env.PUBLIC_URL }) : createMemoryHistory()) as (
      windowPresent: boolean
    ) => History
  ) {
    const history = historySupplier(typeof window !== 'undefined');
    this.middlewares.push(routerMiddleware(history));
    return history;
  }

  createStore<ARG extends {}>(rootReducer: Reducer, extraArg?: ARG) {
    if (!extraArg) {
      this.middlewares.push(thunk);
    } else {
      this.middlewares.push(thunk.withExtraArgument(extraArg));
    }

    return createStore(rootReducer, this.initialState, this.composeEnhancers()(applyMiddleware(...this.middlewares)));
  }

  private composeEnhancers() {
    if (process.env.NODE_ENV === 'production') {
      return compose;
    } else {
      this.setupLoggerMiddleware();
      return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
  }

  private setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}
