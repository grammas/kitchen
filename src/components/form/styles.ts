import { backgroundColor, color, fontSize, styles, visuallyDisabled, visuallyHidden } from '../../styles';
import { Status, Theme } from '../../themes';
import { resolveColor } from '../../themes/colors';

import { AppStatus, Element, Size } from './types';

function controlSize(size: Size) {
  switch (size) {
    case 'xs':
      return '60px';
    case 's':
      return '120px';
    case 'm':
      return '240px';
    case 'l':
      return '480px';
    case 'stretch':
      return '100%';
  }
}

function inputStatusStyles(theme: Theme, status?: Status) {
  const color = resolveColor(theme, status || 'dark');
  return {
    '&:not(:focus)': {
      borderColor: color,
      '&::placeholder': {
        color,
      },
    },
  };
}

const baseFormStyles = styles(css => ({ theme }) =>
  css({
    label: 'form',
    display: 'flex',
    minWidth: '360px',
    padding: theme.spacers.rems.micro,
    flexDirection: 'column',
    alignItems: 'stretch',
    border: `${theme.spacers.pixels.zepto} solid ${theme.colors.neutral[7]}`,
    borderRadius: theme.spacers.rems.femto,
  })
);

const baseGroupStyles = styles(css => () =>
  css({
    label: 'form-group',
    display: 'flex',
    flexDirection: 'column',
  })
);

const groupInlineStyles = styles<{ inline: boolean }>(css => ({ theme, inline }) =>
  inline &&
  css({
    flexDirection: 'row',
    alignItems: 'flex-end',
    '& > :not(:first-child)': {
      marginLeft: theme.spacers.rems.micro,
    },
  })
);

const baseControlStyles = styles<{ size: Size }>(css => ({ theme, size }) =>
  css({
    label: 'form-control',
    marginBottom: theme.spacers.rems.base,
    display: 'flex',
    flexDirection: 'column',
    width: controlSize(size),
  })
);

const baseLabelContainerStyles = styles(css => ({ theme }) =>
  css({
    label: 'form-label',
    display: 'block',
    marginBottom: theme.spacers.rems.femto,
  })
);

const labelVisuallyHiddenStyles = styles<{ visuallyHidden: boolean }>(css => ({ visuallyHidden: hidden }) =>
  hidden && css(visuallyHidden)
);

const baseInputContainerStyles = styles(css => ({ theme }) =>
  css({
    label: 'input-container',
    color: theme.colors.neutral[9],
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacers.rems.base,
  })
);

const inputContainerDisabledStyles = styles<{ disabled: boolean }>(css => ({ disabled }) =>
  disabled &&
  css(
    {
      label: 'input-container--disabled',
    },
    visuallyDisabled
  )
);

const baseInputControlStyles = styles<{ hasPrefix?: any; hasSuffix?: any }>(css => ({ theme, hasPrefix, hasSuffix }) =>
  css(
    {
      label: 'input',
      outline: 'none',
      position: 'relative',
      display: 'table-cell',
      float: 'left',
      backgroundColor: theme.colors.white,
      borderWidth: theme.spacers.pixels.yocto,
      borderStyle: 'solid',
      borderColor: theme.colors.neutral[3],
      borderRadius: hasPrefix
        ? hasSuffix
          ? '0'
          : `0 ${theme.spacers.pixels.micro} ${theme.spacers.pixels.micro} 0`
        : hasSuffix
        ? `${theme.spacers.pixels.micro} 0 0 ${theme.spacers.pixels.micro}`
        : theme.spacers.pixels.micro,
      ...(hasPrefix ? { borderLeft: 0 } : {}),
      ...(hasSuffix ? { borderRight: 0 } : {}),
      boxShadow: `inset 0 1px ${hasPrefix || hasSuffix ? 0 : '2px'} 0 rgba(102, 113, 123, 0.12)`,
      padding: `${theme.spacers.rems.micro} ${theme.spacers.rems.centi}`,
      transition: `border-color ${theme.transitions.default}, box-shadow ${theme.transitions.default}`,
      width: '100%',
      marginBottom: 0,
      '&:focus, &:active': {
        border: `${theme.spacers.pixels.yocto} solid ${theme.colors.primary[5]}`,
        boxShadow: `0 0 5px ${theme.colors.primary[5]}`,
      },
      '&::placeholder': {
        color: theme.colors.neutral[5],
        transition: `color ${theme.transitions.default}`,
      },
    },
    fontSize(theme, 'base')
  )
);

const inputControlTextareaStyles = styles<{ as: Element }>(css => ({ as }) =>
  as === 'textarea' &&
  css({
    label: 'textarea',
    overflow: 'auto',
    resize: 'vertical',
  })
);

const inputControlStatusStyles = styles<{ status?: AppStatus }>(css => ({ theme, status }) =>
  status &&
  css({
    label: `input--${status.type}`,
    ...inputStatusStyles(theme, status.type),
  })
);

const inputControlOptionalStyles = styles<{ optional: boolean }>(css => ({ theme, optional }) =>
  optional &&
  css({
    label: 'input--optional',
    backgroundColor: theme.colors.neutral[1],
    borderStyle: 'dashed',
    boxShadow: 'none',
  })
);

const baseInputHintStyles = styles(css =>
  css({
    label: 'input-hint',
    position: 'absolute',
  })
);

const baseInputGroupStyles = styles(css => () =>
  css({
    position: 'relative',
    display: 'table',
    borderCollapse: 'separate',
    width: '100%',
  })
);

const baseInputGroupAddonStyles = styles<{ isPrefix?: boolean; isSuffix?: boolean }>(
  css => ({ theme, isPrefix, isSuffix }) =>
    css(
      {
        display: 'table-cell',
        padding: `${theme.spacers.rems.micro} ${theme.spacers.rems.centi}`,
        border: `${theme.spacers.pixels.yocto} solid ${theme.colors.neutral[3]}`,
        width: '1%',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        textAlign: 'center',
        borderRadius: isPrefix
          ? `${theme.spacers.pixels.micro} 0 0 ${theme.spacers.pixels.micro}`
          : isSuffix
          ? `0 ${theme.spacers.pixels.micro} ${theme.spacers.pixels.micro} 0`
          : 0,
        ...(isPrefix ? { borderRight: 0 } : isSuffix ? { borderLeft: 0 } : {}),
      },
      backgroundColor(theme, 'white', undefined),
      color(theme, 'neutral', { shade: 7 }),
      fontSize(theme, 'base')
    )
);

const inputGroupAddonStatusStyles = styles<{ status?: AppStatus }>(css => ({ theme, status }) =>
  status &&
  css({
    label: `input-addon--${status.type}`,
    ...inputStatusStyles(theme, status.type),
  })
);

export default {
  form: [baseFormStyles],
  group: [baseGroupStyles, groupInlineStyles],
  control: [baseControlStyles],
  label: {
    container: [baseLabelContainerStyles],
    text: [labelVisuallyHiddenStyles],
  },
  input: {
    container: [baseInputContainerStyles, inputContainerDisabledStyles],
    group: [baseInputGroupStyles],
    control: [baseInputControlStyles, inputControlTextareaStyles, inputControlStatusStyles, inputControlOptionalStyles],
    addon: [baseInputGroupAddonStyles, inputGroupAddonStatusStyles],
    hint: [baseInputHintStyles],
  },
};
