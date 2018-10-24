import React from 'react';

import { styled } from '../../styles';

import { HtmlElement } from '../html_element';

import styles from './styles';
import { Size } from './types';

const defaultProps = {
  blacklist: [] as string[],
  size: 'm' as Size,
  ordered: false,
  noMargin: false,
};

type Props = { children: React.ReactNode } & typeof defaultProps;

interface StyledListProps {
  noMargin: boolean;
  size: Size;
}

const StyledList = styled(HtmlElement)<StyledListProps>(...styles);

const List = ({ blacklist, children, ordered, ...rest }: Props) => (
  <StyledList as={ordered ? 'ol' : 'ul'} blacklist={['noMargin', 'ordered', 'size', ...blacklist]} {...rest}>
    {React.Children.map(children, child => (
      <li>{child}</li>
    ))}
  </StyledList>
);

List.defaultProps = defaultProps;

export default List;
