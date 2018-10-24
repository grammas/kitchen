import React from 'react';

import { styled } from '../../styles';
import { Color, Coloring } from '../../themes/colors';
import { Alignment, Decoration, Font, Size, Style, Tracking, Weight } from '../../themes/typography';

import { HtmlElement } from '../html_element';

import { Element } from './types';
import styles from './styles';

const defaultProps = {
  as: 'p' as Element,
  blacklist: [] as string[],
  color: 'natural' as Color,
  font: 'body' as Font,
  noMargin: false,
  size: 'base' as Size,
  weight: 'normal' as Weight,
};

interface StyledTextProps {
  align?: Alignment;
  color: Color;
  coloring?: Coloring;
  decoration?: Decoration;
  font: Font;
  noMargin: boolean;
  size: Size;
  style?: Style;
  tracking?: Tracking;
  weight: Weight;
}

export type Props = {
  children: string;
  className?: string;
} & StyledTextProps &
  typeof defaultProps;

export const StyledText = styled(HtmlElement)<StyledTextProps>(...styles);

const Text = ({ blacklist, ...rest }: Props) => (
  <StyledText
    {...rest}
    blacklist={['bold', 'faded', 'font', 'italic', 'noMargin', 'size', 'strikethrough', ...blacklist]}
  />
);

Text.defaultProps = defaultProps;

export default Text;
