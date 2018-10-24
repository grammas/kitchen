import React from 'react';

import { styled } from '../../styles';

import { Padding, Shadow } from '../card';
import { Hamburger } from '../hamburger';
import { Menu } from '../menu';

import styles from './styles';
import { Alignment } from './types';

const defaultProps = {
  align: 'left' as Alignment,
  padding: 'normal' as Padding,
  shadow: 'single' as Shadow,
};

type Props = {
  children: (toggleActive: () => void) => React.ReactNode;
} & typeof defaultProps;

interface StyledDropdownProps {
  align: Alignment;
}

const StyledDropdown = styled.div<StyledDropdownProps>(...styles.dropdown);

interface StyledMenuProps {
  active: boolean;
}

const StyledMenu = styled(Menu)<StyledMenuProps>(...styles.menu);

const Dropdown = ({ align, children, ...rest }: Props) => {
  const [active, setActive] = React.useState(false);
  const toggleActive = () => setActive(!active);
  return (
    <StyledDropdown align={align}>
      <Hamburger active={active} onClick={toggleActive} />
      {
        <StyledMenu active={active} {...rest}>
          {children(toggleActive)}
        </StyledMenu>
      }
    </StyledDropdown>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
