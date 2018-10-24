import React from 'react';

import { styled } from '../../styles';

import { HtmlElement } from '../html_element';
import { Spacing } from '../spacing';
import { Spinner } from '../spinner';
import { DangerHint, ValidHint, WarningHint, SearchIcon } from '../svg';
import { Text } from '../text';

import styles from './styles';
import { Element, AppStatus } from './types';

const defaultProps = {
  as: 'input' as Element,
  disabled: false,
  optional: false,
  type: 'text' as 'text' | 'email' | 'password',
  onBlur: (_e: React.ChangeEvent<any>) => {},
  onChange: (_e: React.ChangeEvent<any>) => {},
};

type Props = {
  id?: string;
  defaultValue?: any;
  placeholder?: string;
  value: any;
  loading?: boolean;
  search?: boolean;
  status?: AppStatus;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
} & typeof defaultProps;

interface InputContainerProps {
  disabled: boolean;
}

const InputContainer = styled.div<InputContainerProps>(...styles.input.container);

const StyledInputGroup = styled.div<{}>(...styles.input.group);

const StyledInputGroupAddon = styled.span<{ isPrefix?: boolean; isSuffix?: boolean; status?: AppStatus }>(
  ...styles.input.addon
);

interface InputControlProps {
  as: Element;
  optional: boolean;
  prefix: boolean;
  suffix: boolean;
  hasPrefix?: any;
  hasSuffix?: any;
}

const StyledInput = styled(HtmlElement)<InputControlProps>(...styles.input.control);

interface StatusProps {
  status?: AppStatus;
}

const StyledHint = styled(Text)<StatusProps>(...styles.input.hint);

const Input = ({ disabled, optional, prefix, suffix, loading, search, status, ...rest }: Props) => {
  const prefixSuffixProps = { hasPrefix: !!prefix || !!search, hasSuffix: !!loading || !!suffix || !!status };
  return (
    <>
      <InputContainer {...{ disabled }}>
        <StyledInputGroup>
          {prefix ? (
            <StyledInputGroupAddon isPrefix status={status} {...prefixSuffixProps}>
              {prefix}
            </StyledInputGroupAddon>
          ) : search ? (
            <StyledInputGroupAddon isPrefix {...prefixSuffixProps}>
              <SearchIcon />
            </StyledInputGroupAddon>
          ) : null}
          <StyledInput
            {...{ ...rest, optional, status, prefix: !!prefix, suffix: !!suffix }}
            {...prefixSuffixProps}
            blacklist={['disabled', 'status', 'optional', 'prefix', 'suffix', 'hasPrefix', 'hasSuffix']}
          />
          {loading ? (
            <StyledInputGroupAddon isSuffix status={status} {...prefixSuffixProps}>
              <Spinner active dark={false} scale={0.75} />
            </StyledInputGroupAddon>
          ) : suffix ? (
            <StyledInputGroupAddon isSuffix status={status} {...prefixSuffixProps}>
              {suffix}
            </StyledInputGroupAddon>
          ) : status ? (
            <StyledInputGroupAddon isSuffix status={status} {...prefixSuffixProps}>
              {status.type === 'success' ? (
                <ValidHint />
              ) : status.type === 'warning' ? (
                <WarningHint />
              ) : status.type === 'danger' ? (
                <DangerHint />
              ) : (
                <WarningHint status={status.type} />
              )}
            </StyledInputGroupAddon>
          ) : null}
        </StyledInputGroup>
        {status && status.hint && (
          <Spacing top size="pico">
            <StyledHint
              as="p"
              blacklist={['noMargin', 'faded', 'bold', 'italic', 'strikethrough', 'size']}
              color={status.type}
              font="body"
              size="centi"
              noMargin
              weight="bold"
            >
              {status.hint}
            </StyledHint>
          </Spacing>
        )}
      </InputContainer>
    </>
  );
};

Input.defaultProps = defaultProps;

export default Input;
