import { State as AdminState } from '../store/admin';
import { State as AuthState } from '../store/auth';
import { State as UsersState } from '../store/users';
import { State as RecipesState } from '../store/recipes';
import { State as RouterState } from '../store/router';

const AppState = (localStorageState?: any) => ({
  admin: new AdminState(),
  auth: new AuthState(localStorageState),
  recipes: new RecipesState(),
  users: new UsersState(),
  router: new RouterState(window.location),
});
interface AppState extends ReturnType<typeof AppState> {}

export default AppState;
