import { Theme } from '../themes';

import styles from './styles';

const meyersStyles = styles(css => css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
`);

const boxSizingStyles = styles(
  css => css`
    html {
      box-sizing: border-box;
    }
    * {
      box-sizing: inherit;
    }
  `
);

const bodyStyles = (theme: Theme) =>
  styles(
    css => css`
      body {
        width: 100%;
        background-color: ${theme.body.backgroundColor};
        color: ${theme.body.color};
        font-size: 100%;
        line-height: 1.5;
      }
    `
  );

const fontStyles = (theme: Theme) =>
  styles(
    css => css`
      html, body, input, select, optgroup, textarea, button {
        font-weight: ${theme.typography.weights.normal};
        font-family: ${theme.typography.fonts.body};
        font-feature-settings: 'kern';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.typography.fonts.heading};
      }
      pre, code {
        font-family: ${theme.typography.fonts.monospace};
      }
    `
  );

export default (theme: Theme, custom?: any) => [
  meyersStyles,
  boxSizingStyles,
  bodyStyles(theme),
  fontStyles(theme),
  custom,
];
