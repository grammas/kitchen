import React from 'react';

import { styled } from '../../styles';

import { SpinnerIcon, BaseballSpinner } from '../svg';

import styles from './styles';

const defaultProps = {
  baseball: false,
  dark: true,
  active: false,
  role: 'alertdialog',
  'aria-busy': undefined as boolean | 'false' | 'true' | undefined,
  'aria-live': undefined as 'assertive' | 'off' | 'polite' | undefined,
};

type Props = { scale?: number } & typeof defaultProps;

interface ContainerProps {
  active: boolean;
}

const Container = styled.div<ContainerProps>(...styles.container);

const Spinner = ({ active, baseball, dark, scale, ...rest }: Props) => (
  <Container {...{ active, ...rest }} aria-busy aria-live="assertive" role="alertDialog">
    {baseball ? <BaseballSpinner dark={dark} scale={scale} /> : <SpinnerIcon dark={dark} scale={scale} />}
  </Container>
);

Spinner.defaultProps = defaultProps;

export default Spinner;
