import React from 'react';

import { Button, ButtonProps, ButtonGroup, Spinner } from '../components';
import { User } from '../store/users';
import { styled } from '../styles';

import styles from './styles';

interface Props {
  currentRoute: string;
  logout: () => Promise<void>;
  nav: { [key: string]: string };
  urls: { login: string };
  user?: User;
  working: number;
}

const StyledNav = styled.div<{ working: number }>(...styles.nav.container);

const StyledSpinnerContainer = styled.div<{ active: boolean }>(...styles.nav.spinner);

const StyledButton = styled(Button as any)<{ isActive: boolean } & ButtonProps>(...styles.nav.link);

const StyledUserActionButtonContainer = styled.div<{}>(...styles.nav.userActionButton);

const LargeNav = ({ currentRoute, logout, nav, urls, user, working }: Props) => (
  <StyledNav working={working}>
    <StyledSpinnerContainer active={working > 0}>
      <Spinner active={working > 0} baseball scale={1.4} />
    </StyledSpinnerContainer>
    <ButtonGroup align="center" fill flex>
      {Object.keys(nav).map(link => (
        <StyledButton
          as="Link"
          to={nav[link]}
          isActive={currentRoute === nav[link] ? true : currentRoute.indexOf(`${nav[link]}/`) >= 0}
          color="neutral"
          coloring={{ shade: 7 }}
          padding="s"
          shape="square"
          size="deci"
          variant="text"
          width="yocto"
          key={link}
          tabIndex="0"
        >
          {link}
        </StyledButton>
      ))}
    </ButtonGroup>
    <StyledUserActionButtonContainer>
      {user ? (
        <Button as="button" onClick={() => logout()} size="centi" padding="s" variant="ghost">
          logout
        </Button>
      ) : (
        <Button as="Link" to={urls.login} size="centi" padding="s" variant="ghost">
          login
        </Button>
      )}
    </StyledUserActionButtonContainer>
  </StyledNav>
);

export default LargeNav;
