import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

import { mongoCrud } from '../../stitch';

import { actionFactory } from '../actions';

import { State, User } from './types';

const actionBuilder = actionFactory().forNamespace<State>(State.NAMESPACE);

const { find, findOne, insert, insertOne, update, updateOne, delete: deleteFn, deleteOne } = mongoCrud<State, User>(
  actionBuilder,
  stitch =>
    stitch
      .getServiceClient(RemoteMongoClient.factory, 'mongo')
      .db('auth')
      .collection<User>('users'),
  user => (user ? user._id : '')
);

const clearDb = actionBuilder
  .withType('clear db')
  .withoutPayload()
  .withReducer(state => ({ ...state, db: {} }));

export { clearDb, find, findOne, insert, insertOne, update, updateOne, deleteFn as delete, deleteOne };
