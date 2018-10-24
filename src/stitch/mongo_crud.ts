import { BSON, RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';

import { AppContext } from '../app';
import { ActionFactory } from '../store/actions';

export class BaseCrudState<T extends {}> {
  constructor(public db: { [key: string]: T } = {}) {}
}

export type DocumentId = string | BSON.ObjectId;
export type DeleteResult = { deletedCount: number };
export type InsertOneResult = { insertedId: DocumentId };
export type InsertManyResult = { insertedIds: { [key: number]: string } };
export type UpdateOptions = { upsert?: boolean };
export type UpdateResult = { matchedCount: number; modifiedCount: number; upsertedId: DocumentId };

export default <S extends BaseCrudState<T>, T extends {}>(
  actionBuilder: ActionFactory<S>,
  coll: (stitch: AppContext) => RemoteMongoCollection<T>,
  docId: (t: T | undefined) => string
) => {
  return {
    find: actionBuilder
      .withType('find')
      .asThunk<[object | undefined], T[]>((filter = {}) => (_dispatch, _getState, context) =>
        coll(context)
          .find(filter)
          .asArray()
      )
      .withReducer((state, action) => {
        if (action.status === 'success') {
          return {
            ...state,
            db: action.payload.reduce((acc, doc) => ({ ...acc, [docId(doc)]: doc }), state.db),
          };
        }
        return state;
      }),
    findOne: actionBuilder
      .withType('find one')
      .asThunk<[object | undefined], T | undefined>((filter = {}) => (_dispatch, _getState, context) =>
        coll(context)
          .findOne(filter)
          .then(user => (user ? user : void 0))
      )
      .withReducer((state, action) => {
        if (action.status === 'success') {
          return {
            ...state,
            db: { ...state.db, [docId(action.payload)]: action.payload },
          };
        }
        return state;
      }),
    insert: actionBuilder
      .withType('insert')
      .asThunk<T[], InsertManyResult>((...docs) => (_dispatch, _getState, context) => coll(context).insertMany(docs))
      .withReducer((state, action) => {
        if (action.status === 'success') {
          const _id = (idx: number) => action.payload.insertedIds[idx];
          return {
            ...state,
            db: action.meta.args.reduce((acc, doc, idx) => ({ ...acc, [_id(idx)]: { ...doc, _id: _id(idx) } })),
          };
        }
        return state;
      }),
    insertOne: actionBuilder
      .withType('insert one')
      .asThunk<[T], InsertOneResult>(doc => (_dispatch, _getState, context) => coll(context).insertOne(doc))
      .withReducer((state, action) => {
        if (action.status === 'success') {
          const _id = action.payload.insertedId;
          return {
            ...state,
            db: { ...state.db, [typeof _id === 'string' ? _id : _id.toHexString()]: { ...action.meta.args, _id } },
          };
        }
        return state;
      }),
    update: actionBuilder
      .withType('update')
      .asThunk<[object | undefined, object | undefined, UpdateOptions | undefined], UpdateResult>(
        (filter = {}, update = {}, options = {}) => (_dispatch, _getState, context) =>
          coll(context).updateMany(filter, update, options)
      ),
    updateOne: actionBuilder
      .withType('update one')
      .asThunk<[object | undefined, object | undefined, UpdateOptions | undefined], UpdateResult>(
        (filter = {}, update = {}, options = {}) => (_dispatch, _getState, context) =>
          coll(context).updateOne(filter, update, options)
      ),
    delete: actionBuilder
      .withType('delete')
      .asThunk<[object | undefined], DeleteResult>((filter = {}) => (_dispatch, _getState, context) =>
        coll(context).deleteMany(filter)
      ),
    deleteOne: actionBuilder
      .withType('delete one')
      .asThunk<[object | undefined], DeleteResult>((filter = {}) => (_dispatch, _getState, context) =>
        coll(context).deleteOne(filter)
      ),
  };
};
