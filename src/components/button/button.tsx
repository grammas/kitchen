import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../../styles';
import { Coloring } from '../../themes/colors';
import { Size } from '../../themes/spacers';
import { Size as FontSize } from '../../themes/typography';

import styles from './styles';
import { ButtonType, Color, Element, Padding, Shape, Variant } from './types';

const defaultProps = {
  color: 'default' as Color,
  padding: 'm' as Padding,
  shape: 'square',
  size: 'base' as FontSize,
  tabIndex: 0 as number | string,
  variant: 'raised' as Variant,
  width: 'zepto' as Size,
};

// interface BaseProps<AS extends Element> {
interface BaseProps {
  // as: AS;
  children: React.ReactNode;
  className?: string;
  color: Color;
  coloring?: Coloring;
  inverted?: boolean;
  padding: Padding;
  radius?: Size;
  role?: string;
  shape: Shape;
  size: FontSize;
  tabIndex: number | string;
  variant: Variant;
  width: Size;
}

// interface AnchorProps extends BaseProps<'a'> {
interface AnchorProps extends BaseProps {
  as: 'a';
  href?: string;
  target?: string;
  rel?: 'nofollow' | 'noreferrer';
}

// interface ButtonProps extends BaseProps<'button'> {
interface ButtonProps extends BaseProps {
  as: 'button';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  type?: ButtonType;
}

// interface LinkProps extends BaseProps<'Link'> {
interface LinkProps extends BaseProps {
  as: 'Link';
  to: string | { pathname: string; search?: string; state?: any; hash?: string; key?: string };
  replace?: boolean;
  innerRef?: React.Ref<HTMLAnchorElement>;
  onClick?: () => any;
}

export type Props = AnchorProps | ButtonProps | LinkProps;

interface StyleButtonProps {
  as: Element;
  color: Color;
  size: FontSize;
  inverted?: boolean;
  padding: Padding;
  radius?: Size;
  shape: Shape;
  variant: Variant;
  width: Size;
}

const StyledButton = styled('button', { shouldForwardProp: prop => prop !== 'isActive' })<StyleButtonProps>(
  ...styles.button
);

const StyledAnchor = StyledButton.withComponent('a');

const StyledLink = StyledButton.withComponent(Link);

const Button = (props: Props) => {
  const { children, tabIndex: tabIndexProp, ...rest } = props;
  const tabIndex = typeof tabIndexProp === 'string' ? parseInt(tabIndexProp) : tabIndexProp;
  switch (rest.as) {
    case 'a':
      return (
        <StyledAnchor {...rest} tabIndex={tabIndex}>
          {children}
        </StyledAnchor>
      );
    case 'button':
      return (
        <StyledButton {...rest} tabIndex={tabIndex}>
          {children}
        </StyledButton>
      );
    case 'Link':
      return (
        <StyledLink {...rest} tabIndex={tabIndex} innerRef={undefined}>
          {children}
        </StyledLink>
      );
  }
};

Button.defaultProps = defaultProps;

export default Button;
