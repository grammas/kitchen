import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

import { mongoCrud } from '../../stitch';

import { actionFactory } from '../actions';

import { State, Recipe } from './types';

const factory = actionFactory().forNamespace<State>(State.NAMESPACE);

const { find, findOne, insert, insertOne, update, updateOne, delete: deleteFn, deleteOne } = mongoCrud<State, Recipe>(
  factory,
  stitch =>
    stitch
      .getServiceClient(RemoteMongoClient.factory, 'mongo')
      .db('recipes')
      .collection<Recipe>('recipes'),
  recipe => (recipe ? recipe._id.toHexString() : '')
);

const clearDb = factory
  .withType('clear db')
  .withoutPayload()
  .withReducer(state => ({ ...state, db: {} }));

export { clearDb, find, findOne, insert, insertOne, update, updateOne, deleteFn as delete, deleteOne };
