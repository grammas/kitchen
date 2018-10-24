import Fraction from 'fraction.js';
import { BSON } from 'mongodb-stitch-browser-sdk';

import { BaseCrudState } from '../../stitch';

export type RecipeCategory =
  | 'appetizer'
  | 'soup'
  | 'salad'
  | 'pasta'
  | 'seafood'
  | 'poultry'
  | 'meat'
  | 'vegetable'
  | 'dessert';

type IngredientAmount = number | Fraction;

type IngredientUnit = 'cup' | 'ounce' | 'pint' | 'pound' | 'teaspoon' | 'tablespoon';

export type Ingredient = string | { amount?: IngredientAmount; unit?: IngredientUnit; name: string; notes?: string };

interface Instructions {
  prep?: string[];
  cook?: string[];
}

export interface Recipe {
  _id: BSON.ObjectId;
  category: RecipeCategory;
  title: string;
  description?: string;
  isOg?: boolean;
  author?: string;
  staples?: string[];
  ingredients?: Ingredient[];
  instructions?: Instructions;
  prerecipes?: string[];
  subrecipes?: {
    name: string;
    ingredients?: Ingredient[];
    instructions?: Instructions;
  }[];
  ps?: string[];
}

export class State extends BaseCrudState<Recipe> {
  static NAMESPACE = 'recipes';

  constructor() {
    super();
  }
}
