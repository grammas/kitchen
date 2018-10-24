import React from 'react';

import { styled } from '../../styles';
import { Size } from '../../themes/spacers';

import styles from './styles';

const defaultProps = {
  type: 'button' as 'button' | 'link',
  selected: false,
  size: 'm' as Size,
  onClick: (() => {}) as () => void,
};

interface BaseProps {
  type: 'button' | 'link';
  children: React.ReactNode;
  selected: boolean;
  size: Size;
  onClick: () => void;
}

interface ButtonProps extends BaseProps {
  type: 'button';
}

interface LinkProps extends BaseProps {
  type: 'link';
  href: string;
  target?: string;
  rel?: 'nofollow' | 'noreferer';
}

type Props = (ButtonProps | LinkProps) & typeof defaultProps;

interface StyledItemProps {
  selected: boolean;
  size: Size;
}

const StyledButton = styled.button<StyledItemProps>(...styles.item);
const StyledLink = styled.a<StyledItemProps>(...styles.item);

const MenuItem = (props: Props) =>
  props.type === 'button' ? <StyledButton tabIndex={0} {...props} /> : <StyledLink tabIndex={0} {...props} />;

MenuItem.defaultProps = defaultProps;

export default MenuItem;
