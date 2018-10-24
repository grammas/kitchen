import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Location } from 'history';
import { AppPage, AppState, AppUrls } from '../app';
import { Cookbook, Recipe as RecipeIcon, RecipesPageList, RecipesPageCard } from '../components';
import { find as findRecipes, Recipe } from '../store/recipes';
import { actions as routerActions } from '../store/router'

const PATH_PREFIX = '/recipes/';

interface Props {
  location: Location;
  recipes: { [key: string]: Recipe };
  goto: (path: string) => void;
  listRecipes: () => Promise<Recipe[]>;
}

type View = 'list' | 'single';

const initialState = {
  view: 'list' as View,
};
type State = typeof initialState;

class RecipesPage extends React.Component<Props, State> {
  readonly state = initialState;

  componentDidMount() {
    this.props.listRecipes();
  }

  setView = (view: View = 'list', callback = () => {}) => this.setState(() => ({ view }), callback);

  render() {
    const { goto, location, recipes } = this.props;
    const { view } = this.state;
    const viewRecipe = location.pathname.indexOf(PATH_PREFIX) >= 0;
    return (
      <AppPage
        menu={[
          { type: 'link', view: 'list', to: AppUrls.recipes.list, display: <Cookbook /> },
          {
            type: 'link',
            view: 'single',
            to: AppUrls.recipes.find(Object.keys(recipes)[Math.floor(Math.random() * Object.keys(recipes).length)]),
            display: <RecipeIcon />,
          },
        ]}
        activeView={view}
        setView={this.setView}
      >
        {!viewRecipe && (
          <RecipesPageList
            recipes={recipes}
            onRowClick={recipe => this.setView('single', () => goto(AppUrls.recipes.find(recipe._id.toHexString())))}
          />
        )}
        {viewRecipe && <RecipesPageCard location={location} recipes={recipes} />}
      </AppPage>
    );
  }
}

const mapStateToProps = ({ auth, recipes, router }: AppState) => ({
  location: router.location,
  user: auth.user,
  recipes: recipes.db,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  goto: (path: string) => dispatch(routerActions.goto.creator.worker(path)),
  listRecipes: () => dispatch(findRecipes.creator.worker({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPage);
