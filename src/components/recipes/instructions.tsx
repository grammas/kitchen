import React from 'react';

import { Heading } from '../heading';
import { List } from '../list';
import { Subheading } from '../subheading';
import { Text } from '../text';

interface Props {
  instructions?: { prep?: string[]; cook?: string[] };
  ps?: string[];
}

const Instructions = ({ instructions = {}, ps }: Props) => (
  <>
    <Heading
      as="h2"
      align="center"
      color="secondary"
      coloring={{ transparency: 0.3 }}
      font="logo"
      tracking={2}
      noMargin
    >
      Instructions
    </Heading>
    {instructions.prep && (
      <>
        <Subheading as="h4" color="neutral" coloring={{ shade: 7 }} noMargin>
          prep
        </Subheading>
        <List>
          {instructions.prep.map(line => (
            <Text key={line} noMargin>
              {line}
            </Text>
          ))}
        </List>
      </>
    )}
    {instructions.cook && (
      <>
        <Subheading as="h4" color="neutral" coloring={{ shade: 7 }} noMargin>
          cook
        </Subheading>
        <List>
          {instructions.cook.map(line => (
            <Text key={line} noMargin>
              {line}
            </Text>
          ))}
        </List>
      </>
    )}
    {ps && (
      <>
        <Subheading as="h4" color="neutral" coloring={{ shade: 7 }} noMargin>
          ps
        </Subheading>
        <List>
          {ps.map(line => (
            <Text key={line} noMargin>
              {line}
            </Text>
          ))}
        </List>
      </>
    )}
  </>
);

export default Instructions;
