import React from 'react';

import { styled } from '../../styles';

import styles from './styles';
import { Size } from './types';

const defaultProps = {
  inline: false,
  size: 'stretch' as Size,
};

type Props = { children: React.ReactNode } & typeof defaultProps;

interface StyledFormGroupProps {
  inline: boolean;
  size: Size;
}

const StyledFormGroup = styled.div<StyledFormGroupProps>(...styles.control);

const FormControl = ({ children, inline, size }: Props) => (
  <StyledFormGroup {...{ inline, size }}>{children}</StyledFormGroup>
);

FormControl.defaultProps = defaultProps;

export default FormControl;
