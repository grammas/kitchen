import React from 'react';

import { styled } from '../../styles';
import { Color, Coloring } from '../../themes/colors';
import { Alignment, Decoration, Font, Style, Tracking, Weight } from '../../themes/typography';

import { HtmlElement } from '../html_element';

import { Element, Size } from './types';
import styles from './styles';

const defaultProps = {
  as: 'h1' as Element,
  blacklist: [] as string[],
  color: 'natural' as Color,
  font: 'heading' as Font,
  noMargin: false,
  weight: 'bold' as Weight,
};

const naturalSize = (as: Element): Size => {
  switch (as) {
    case 'h1':
      return 'exa';
    case 'h2':
      return 'peta';
    case 'h3':
      return 'tera';
    case 'h4':
      return 'mega';
    case 'h5':
      return 'kilo';
    case 'h6':
      return 'hecto';
  }
};

interface StyledHeadingProps {
  align?: Alignment;
  color: Color;
  coloring?: Coloring;
  decoration?: Decoration;
  font: Font;
  noMargin: boolean;
  size?: Size;
  style?: Style;
  tracking?: Tracking;
  weight: Weight;
}

type Props = {
  align?: Alignment;
  children: string;
  className?: string;
  tracking?: Tracking;
} & StyledHeadingProps &
  typeof defaultProps;

const StyledHeading = styled(HtmlElement)<StyledHeadingProps>(...styles);

export const Heading = ({ as, blacklist, size, ...rest }: Props) => (
  <StyledHeading
    {...{ ...rest, as, size: size ? size : naturalSize(as) }}
    blacklist={['noMargin', 'size', ...blacklist]}
  />
);

Heading.defaultProps = defaultProps;

export default Heading;
