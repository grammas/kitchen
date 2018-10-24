import { styles } from '../../styles';

const baseContainerStyles = styles(css => ({ theme }) =>
  css({
    position: 'relative',
    height: '24px',
    maxWidth: 'fit-content',
    opacity: 0,
    transition: theme.transitions.spinner,
  })
);

const containerActiveStyles = styles<{ active: boolean }>(css => ({ active }) =>
  active &&
  css({
    opacity: 1,
  })
);

export default {
  container: [baseContainerStyles, containerActiveStyles],
};
