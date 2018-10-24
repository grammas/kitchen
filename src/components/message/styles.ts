import { styles } from '../../styles';

import { Alignment } from './types';

function buttonAlignments(align: Alignment) {
  switch (align) {
    case 'top':
      return 'flex-start';
    case 'center':
      return 'center';
  }
}

const baseMessageStyles = styles<{ stretch?: boolean }>(css => ({ stretch }) =>
  css({
    label: 'message',
    display: 'flex',
    alignItems: 'center',
    ...(stretch ? { width: '100%' } : {}),
  })
);

const baseButtonStyles = styles(css => () =>
  css({
    label: 'message-button',
    display: 'block',
    marginLeft: 'auto',
    flexGrow: 0,
    flexShrink: 0,
  })
);

const buttonAlignmentStyles = styles<{ align: Alignment }>(css => ({ align }) =>
  css({
    label: `message-button--${align}`,
    alignSelf: buttonAlignments(align),
  })
);

const baseIconContainerStyles = styles(css => ({ theme }) =>
  css({
    label: 'message-icon',
    display: 'block',
    marginRight: theme.spacers.rems.base,
    flexGrow: 0,
    flexShrink: 0,
    lineHeight: 0,
  })
);

export default {
  message: [baseMessageStyles],
  button: [baseButtonStyles, buttonAlignmentStyles],
  icon: [baseIconContainerStyles],
};
