import { css, SerializedStyles } from '@emotion/core';

import { Theme } from '../themes';

export interface ThemeProps {
  theme: Theme;
}

type Css = typeof css;

type Style = SerializedStyles | undefined | false | '' | 0 | null;

type DynamicStyle<P extends {} = {}> = (c: Css) => (props: P & ThemeProps) => Style;

type StaticStyle = (c: Css) => Style;

export default <P extends {} = {}>(makeStyle: DynamicStyle<P> | StaticStyle) => makeStyle(css);
