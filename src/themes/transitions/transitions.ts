const defaultTransition = '200ms ease-in-out';

export interface Transitions {
  default: string;
  alert: string;
  hamburger: {
    base: string;
    active: string;
  };
  spinner: string;
  table: {
    cell: string;
    header: string;
    sortArrow: string;
  };
  tooltip: string;
}

const transitions: Transitions = {
  default: defaultTransition,
  alert: `background-color 500ms ease-in-out`,
  hamburger: {
    base: 'width 0.2s ease-out 0.15s, opacity 0.1s ease-in, transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    active:
      'width 0.2s ease-out, opacity 0.1s ease-out 0.15s, transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.15s',
  },
  spinner: `opacity ${defaultTransition}`,
  table: {
    cell: `background-color ${defaultTransition}`,
    header: `background-color ${defaultTransition}, color ${defaultTransition}`,
    sortArrow: `opacity ${defaultTransition}`,
  },
  tooltip: '300ms',
};

export default transitions;
