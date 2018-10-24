import { styles } from '../../styles';

import { Alignment } from './types';

function dropdownAlignment(align: Alignment) {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
  }
}

const baseContainerStyles = styles<{ align: Alignment }>(css => ({ align }) =>
  css({
    label: 'dropdown',
    display: 'flex',
    flexDirection: 'column',
    alignItems: dropdownAlignment(align),
  })
);

const baseMenuStyles = styles<{ active: boolean }>(css => ({ theme, active }) =>
  css({
    label: `dropdown-menu${active ? '--active' : ''}`,
    position: 'absolute',
    marginTop: `calc(${theme.spacers.pixels.giga} + ${theme.spacers.pixels.yocto})`,
    whiteSpace: 'nowrap',
    visibility: active ? 'visible' : 'hidden',
    zIndex: 1,
  })
);

export default {
  dropdown: [baseContainerStyles],
  menu: [baseMenuStyles],
};
