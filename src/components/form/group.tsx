import React from 'react';

import { styled } from '../../styles';

import styles from './styles';

const defaultProps = {
  inline: false,
};

type Props = { children: React.ReactNode } & typeof defaultProps;

interface StyledFormGroupProps {
  inline: boolean;
}

const StyledFormGroup = styled.div<StyledFormGroupProps>(...styles.group);

const FormGroup = ({ children, inline }: Props) => <StyledFormGroup inline={inline}>{children}</StyledFormGroup>;

FormGroup.defaultProps = defaultProps;

export default FormGroup;
