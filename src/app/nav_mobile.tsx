import React from 'react';

import { Dropdown, MenuItem } from '../components';
import { User } from '../store/users';

interface Props {
  nav: { [key: string]: string };
  urls: { login: string };
  user?: User;
}

const MobileNav = ({ nav, user }: Props) => (
  <Dropdown align="right">
    {toggle => (
      <>
        {Object.keys(nav).map(link => (
          <MenuItem key={link} type="link" href={nav[link]} onClick={toggle}>
            {link}
          </MenuItem>
        ))}
        <MenuItem>{user ? 'logout' : 'login'}</MenuItem>
      </>
    )}
  </Dropdown>
);

export default MobileNav;
