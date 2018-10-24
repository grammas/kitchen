import React from 'react';

export interface AnyProps {
  [key: string]: any;
}

const defaultProps = {
  as: 'div' as string | React.ComponentType,
  blacklist: [] as string[],
};

export type Props = { children?: React.ReactNode } & typeof defaultProps & AnyProps;

const toMap = (blacklist: string[]): AnyProps => blacklist.reduce((acc, key) => ({ ...acc, [key]: true }), {});

const filterProps = (blacklist: string[], props: any) => {
  const blacklistMap = toMap(blacklist);
  return Object.entries(props).reduce((acc, [key, prop]) => {
    if (blacklistMap[key]) {
      return acc;
    }
    return { ...acc, [key]: prop };
  }, {});
};

const HtmlElement = ({ as: Element, blacklist, children, ...rest }: Props) => {
  return <Element {...filterProps(blacklist, rest)}>{children}</Element>;
};

HtmlElement.defaultProps = defaultProps;

export default HtmlElement;
