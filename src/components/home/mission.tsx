import React from 'react';

import { Button } from '../button';
import { ButtonGroup } from '../button_group';
import { Heading } from '../heading';
import { Spacing } from '../spacing';
import { Text } from '../text';

interface Props {
  viewChangelog: () => void;
  viewPortal: () => void;
}

const Mission = ({ viewChangelog, viewPortal }: Props) => (
  <>
    <Spacing top size="mega">
      <Heading>This is Gramma's Kitchen</Heading>
    </Spacing>
    <Text>A place to keep your family's favorite recipes.</Text>
    <Spacing top size="mega">
      <ButtonGroup align="center">
        <Button as="button" onClick={() => viewPortal()} size="hecto" color="primary" variant="ghost">
          Enter Portal
        </Button>
        <Button as="button" onClick={() => viewChangelog()} size="hecto" color="secondary" variant="text">
          View Changelog
        </Button>
      </ButtonGroup>
    </Spacing>
  </>
);

export default Mission;
