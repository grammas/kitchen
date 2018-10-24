import React from 'react';

import { styled } from '../../styles';
import { Color, Coloring } from '../../themes/colors';
import { Alignment, Decoration, Font, Style, Tracking, Weight } from '../../themes/typography';

import { HtmlElement } from '../html_element';

import { Element, Size } from './types';
import styles from './styles';

const defaultProps = {
  as: 'h2' as Element,
  blacklist: [] as string[],
  color: 'natural' as Color,
  font: 'heading' as Font,
  noMargin: false,
  weight: 'semiBold' as Weight,
};

const naturalSize = (as: Element): Size => {
  switch (as) {
    case 'h2':
      return 'mega';
    case 'h3':
      return 'kilo';
    case 'h4':
      return 'hecto';
    case 'h5':
      return 'deca';
    case 'h6':
      return 'base';
  }
};

interface StyledSubheadingProps {
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
  children: string;
  className?: string;
} & StyledSubheadingProps &
  typeof defaultProps;

const StyledSubheading = styled(HtmlElement)<StyledSubheadingProps>(...styles);

const Subheading = ({ as, blacklist, size, ...rest }: Props) => (
  <StyledSubheading {...{ ...rest, as, size: size ? size : naturalSize(as) }} blacklist={['noMargin', ...blacklist]} />
);

Subheading.defaultProps = defaultProps;

export default Subheading;
