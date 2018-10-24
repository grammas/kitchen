import React from 'react';

import { Heading } from '../heading';
import { List } from '../list';
import { Subheading } from '../subheading';
import { Text } from '../text';

interface Props {
  staples?: string[];
  ingredients?: (string | { name: string; amount?: any; notes?: any })[];
}

const ingredientDisplay = ({ name, amount, notes }: { name: string; amount?: any; notes?: string }) =>
  `${amount ? `${amount.name} ` : ''}${name}${notes ? ` (${notes})` : ''}`;

const Ingredients = ({ staples, ingredients }: Props) => (
  <>
    <Heading
      as="h2"
      align="center"
      color="secondary"
      coloring={{ transparency: 0.3 }}
      font="logo"
      tracking={4}
      noMargin
    >
      Ingredients
    </Heading>
    {ingredients && (
      <>
        <Subheading as="h5" color="neutral" coloring={{ shade: 7 }} noMargin>
          pantry
        </Subheading>
        <List>
          {ingredients.map(ingredient =>
            typeof ingredient === 'string' ? (
              <Text key={ingredient} noMargin>
                {ingredient}
              </Text>
            ) : (
              <Text key={ingredient.name} noMargin>
                {ingredientDisplay(ingredient)}
              </Text>
            )
          )}
        </List>
      </>
    )}
    {staples && (
      <>
        <Subheading as="h5" color="neutral" coloring={{ shade: 7 }} noMargin>
          staples
        </Subheading>
        <List>
          {staples.map(line => (
            <Text key={line} noMargin>
              {line}
            </Text>
          ))}
        </List>
      </>
    )}
  </>
);

export default Ingredients;
