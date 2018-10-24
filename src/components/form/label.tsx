import React from 'react';

import { Text } from '../../components/text';
import { styled } from '../../styles';

import styles from './styles';

const defaultProps = {
  visuallyHidden: false,
};

type Props = {
  children: React.ReactNode;
  htmlFor?: string;
} & typeof defaultProps;

interface StyledLabelContainerProps {}

interface StyledLabelProps {
  visuallyHidden: boolean;
}

const StyledLabelContainer = styled.div<StyledLabelContainerProps>(...styles.label.container);

const StyledLabel = styled.label<StyledLabelProps>(...styles.label.text);

const Label = ({ children, ...rest }: Props) => (
  <StyledLabelContainer>
    {React.Children.map(children, (child, idx) => {
      if (idx === 0) {
        let effChild = child;
        if (typeof child === 'string') {
          effChild = (
            <Text font="heading" size="base" weight="bold" noMargin>
              {child}
            </Text>
          );
        }
        return <StyledLabel {...rest}>{effChild}</StyledLabel>;
      }

      if (idx === 1 && typeof child === 'string') {
        return (
          <Text coloring={{ transparency: 0.3 }} size="deci" noMargin>
            {child}
          </Text>
        );
      }

      return child;
    })}
  </StyledLabelContainer>
);

Label.defaultProps = defaultProps;

export default Label;
