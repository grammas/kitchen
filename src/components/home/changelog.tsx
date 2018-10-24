import React from 'react';

import { Heading } from '../heading';
import { List } from '../list';
import { Spacing } from '../spacing';
import { Text } from '../text';

const Changelog = () => (
  <>
    <Spacing top size="mega">
      <Heading>Changelog</Heading>
    </Spacing>
    <Text>A place to keep track of the latest updates.</Text>
    <Spacing top size="mega">
      <Heading as="h2">Recent Changes</Heading>
    </Spacing>
    <List>
      <Text>2018-10-24: Creates grammas.kitchen</Text>
      <Text>2019-05-15: Publishes demo site</Text>
    </List>
    <Spacing top size="mega">
      <Heading as="h2">Still Todo</Heading>
    </Spacing>
    <List>
      <Text>this list</Text>
      <Text>this list's contents</Text>
    </List>
  </>
);

export default Changelog;
