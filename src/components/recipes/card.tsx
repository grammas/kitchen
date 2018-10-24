import React from 'react';
import { Location } from 'history';

import { Recipe } from '../../store/recipes';

import { Heading } from '../heading';
import { Subheading } from '../subheading';
import { Wrapping } from '../wrapping';

import Ingredients from './ingredients';
import Instructions from './instructions';

const PATH_PREFIX = '/recipes/';

interface Props {
  location: Location;
  recipes: { [key: string]: Recipe };
}

const RecipeCard = ({ location, recipes }: Props) => {
  const recipe = recipes[location.pathname.substring(PATH_PREFIX.length)];
  if (!recipe) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div>
        <Heading color="primary" coloring={{ transparency: 0.3 }} font="logo" tracking={4} noMargin>
          {recipe.title}
        </Heading>
        <Subheading as="h5" color="neutral" coloring={{ shade: 7 }}>
          {recipe.category}
        </Subheading>
      </div>
      <Wrapping limit={50}>
        {recipe.ingredients && <Ingredients staples={recipe.staples} ingredients={recipe.ingredients} />}
        {recipe.instructions && (recipe.instructions.prep || recipe.instructions.cook) && (
          <Instructions instructions={recipe.instructions} ps={recipe.ps} />
        )}
      </Wrapping>
    </>
  );
};

export default RecipeCard;
