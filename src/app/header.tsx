import React from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import { User } from '../store/users';
import { styled } from '../styles';
import { mediaBreakpoints } from '../themes/media_queries';

import styles from './styles';

import LargeNav from './nav_large';
import MobileNav from './nav_mobile';

interface Props {
  currentRoute: string;
  logo: {
    to: string;
    img: (largeDisplay: boolean) => React.ReactElement;
  };
  logout: () => Promise<void>;
  nav: { [key: string]: string };
  urls: { login: string };
  user?: User;
  working: number;
}

const StyledHeader = styled.div<{}>(...styles.header);

const StyledLogo = styled(Link)<{}>(...styles.logo);

const Header = ({ currentRoute, logo, logout, nav, urls, user, working }: Props) => (
  <Media query={mediaBreakpoints.atLeastMega}>
    {matches => (
      <StyledHeader>
        <StyledLogo to={logo.to}>{logo.img(matches)}</StyledLogo>
        {matches ? (
          <LargeNav {...{ currentRoute, logout, nav, urls, user, working }} />
        ) : (
          <MobileNav {...{ logout, nav, urls, user }} />
        )}
      </StyledHeader>
    )}
  </Media>
);

export default Header;
