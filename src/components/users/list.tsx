import React from 'react';

import { AppUrls } from '../../app';
import { User, getUserId } from '../../store/users';

import { DataTable } from '../data_table';

interface Props {
  user?: User;
  users: { [key: string]: User };
  goto: (path: string) => void;
}

const UsersList = ({ goto, user, users }: Props) => (
  <DataTable
    columns={[{ header: 'firstName' }, { header: 'lastName' }]}
    data={Object.keys(users).map(userId => users[userId])}
    onRowClick={(u, e) => {
      e.preventDefault();
      if (user && getUserId(u) === getUserId(user)) {
        goto(AppUrls.users.find(getUserId(u)));
      }
    }}
  />
);

export default UsersList;
