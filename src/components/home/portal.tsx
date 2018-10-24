import React from 'react';

import { Button } from '../button';
import { ButtonGroup } from '../button_group';
import { Heading } from '../heading';
import { Hr } from '../hr';
import { Spacing } from '../spacing';
import { Text } from '../text';
import { Wrapping } from '../wrapping';

import { User } from '../../store/users';

interface Props {
  urls: {
    recipes: string;
    users: string;
  };
  user?: User;
}

const Portal = ({ urls, user }: Props) => {
  const name = user && user.firstName ? user.firstName : '';
  return (
    <>
      <Spacing top size="mega">
        <Text>A few of the common things to do around here:</Text>
      </Spacing>
      <ButtonGroup align="center">
        <Button as="Link" to={urls.recipes} size="hecto" color="primary" variant="ghost">
          Look at some recipes
        </Button>
        <Button as="Link" to={urls.users} size="hecto" color="secondary" variant="ghost">
          Check out who's here
        </Button>
      </ButtonGroup>
      <Hr marginTop="mega" width="84%" faded />
      <Heading as="h2">{`Welcome ${name}`}</Heading>
      <Text>This is Gramma's Kitchen.</Text>
      <Text>It's a great place to be.</Text>
      <Hr width="61.8%" faded />
      <Spacing top size="mega">
        <Heading as="h3" color="primary">
          What's this all about?
        </Heading>
      </Spacing>
      <Wrapping as="section" limit={50}>
        <Text>
          This site is for all the recipes we never write down. Quickly build up a list of personal recipes, share them
          with family and friends, and find new ones to enjoy. Show off all the photos you took while cooking to
          everybody.
        </Text>
        <Text>
          A few winters back, my Gramma wrote down many of the recipes she holds in her head on index cards at the
          request of her kids. I'd like to think everyone knows a best cook, and in our family it's Gramma. So it was a
          no-brainer to type these up and save them in a database. Who doesn't love a side project that's worth
          something??
        </Text>
        <Text>
          So obviously, a few of the features (read: all) may be missing at first. But for those who check back from
          time to time, who knows, this site may actually start doing things. At the very least, you know you can learn
          how to make Bean Soup and Chicken Parmigana...
        </Text>
      </Wrapping>
      <Hr width="61.8%" faded />
      <Spacing top size="mega">
        <Heading as="h3" color="primary">
          The finer details
        </Heading>
      </Spacing>
      <Wrapping as="section" limit={50}>
        <div>
          <Heading as="h4" color="secondary" noMargin>
            Recipes
          </Heading>
          <Text>
            Recipes are the basic units of information on this site. The one snag is that recipes can vary wildly in
            form. This site attempts to capture that unrestrictive feel some of the best recipes have. There are no
            rules as to how you create your recipes here. Hopefully this allows you to write the recipe and capture the
            voice of the original author. You might find you enjoy that more than the actual food.
          </Text>
          <Text>
            Besides the recipe name and category, there's a place for any thoughts you'd like to share before getting
            started. When specifying ingredients, you can just write them out, or provide calculated amounts, and any
            notes you might have. There is also the section for any kitchen staples someone would need lying around
            (salt, pepper, etc.). Does your recipe have any initial steps that need to be taken a night before? Or maybe
            some smaller recipe for a component of the entire dish? Got you covered. It's an intentionally flexible
            recipe data model.
          </Text>
          <Text weight="bold">Well, there's one rule: make it tasty</Text>
        </div>
        <div>
          <Heading as="h4" color="secondary" noMargin>
            Meals
          </Heading>
          <Text>
            A meal is just a grouping of recipes. You can name it and add any last thoughts about the orchestration of
            it all. Just don't keep using the same five each week!
          </Text>
        </div>
        <div>
          <Heading as="h4" color="secondary" noMargin>
            Families
          </Heading>
          <Text>
            A family is just a grouping of users. You can consider it a preset filter for seeing all the awesome things
            your family is cookin' up. Want to write down your Gramma's recipes too?
          </Text>
        </div>
      </Wrapping>
      <Hr width="61.8%" faded />
      <Spacing top size="mega">
        <Heading as="h3" color="primary">
          Powered by MongoDB
        </Heading>
      </Spacing>
      <Wrapping as="section" limit={50}>
        <Text>Shameless plug time...</Text>
        <Text coloring={{ transparency: 0.3 }} size="deci">
          Editor's note: It is not my requirement at this time to notify you that the author of this website is an
          employee of MongoDB and an engineer on the Stitch team.
        </Text>
        <Text>
          Thanks to MongoDB Atlas, this site has persistent data. Yup, we've got your recipes in the cloud...in a hosted
          MonogDB replica set database.
        </Text>
        <Spacing bottom size="base">
          <Button as="a" variant="text" href="https://docs.atlas.mongodb.com/" target="_blank" rel="noreferrer">
            You can learn more about Atlas here.
          </Button>
        </Spacing>
        <Text>
          Thanks to MongoDB Stitch, this site has live data. Stitch brings the backend right to your browser app,
          allowing you to control site authentication, execute serverless functions, and handle crud operations with
          MongoDB's awesome query language. That's really just a small portion of all you can do here too.
        </Text>
        <Spacing bottom size="base">
          <Button as="a" variant="text" href="https://docs.mongodb.com/stitch/" target="_blank" rel="noreferrer">
            You can learn more about Stitch here.
          </Button>
        </Spacing>
      </Wrapping>
    </>
  );
};

export default Portal;
