import React from 'react';

import { Recipe } from '../../store/recipes';

import { DataTable } from '../data_table';
import { Og } from '../svg';

interface Props {
  recipes: { [key: string]: Recipe };
  onRowClick?: (recipe: Recipe) => any;
}

const UsersList = ({ recipes, onRowClick = () => {} }: Props) => (
  <DataTable
    stretch
    columns={[
      { header: 'OG', accessor: 'isOg', render: ({ value }) => (value ? <Og /> : null) },
      { header: 'Category', accessor: 'category' },
      { header: 'Title', accessor: 'title' },
      { header: 'Description', accessor: () => '' },
    ]}
    data={Object.keys(recipes).map(recipe => recipes[recipe])}
    onRowClick={(recipe, e) => {
      e.preventDefault();
      onRowClick(recipe);
    }}
  />
);

export default UsersList;
