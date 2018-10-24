import React from 'react';
import { Redirect } from 'react-router';

import { styled } from '../../styles';
import { isFunction } from '../../utils';

import { Button } from '../button';
import { ButtonGroup } from '../button_group';

import styles from './styles';
import { FormState, FormStatuses, ValidationSchema } from './types';
import { isClean } from './utils';

const defaultProps = {
  redirects: {} as { [key: string]: string },
};

type RenderProps<T> = ReturnType<Form<T>['renderProps']>;
type SubmitProps<T> = ReturnType<Form<T>['submitProps']>;

type Props<T extends {}> = {
  header?: (props: RenderProps<T>) => React.ReactNode;
  children: (props: RenderProps<T>) => React.ReactNode;
  footer?:
    | ((props: RenderProps<T>) => React.ReactNode)
    | {
        align?: 'left' | 'center' | 'right';
        primary: { label?: string; variant?: 'floating' | 'raised' | 'ghost' };
        secondary?: { label?: string; variant?: 'ghost' | 'text' };
      };
  className?: string;
  initialForm: T;
  onSubmit?: (props: SubmitProps<T>) => any;
  validation?: ValidationSchema<T>;
} & typeof defaultProps;

interface State<T extends {}> {
  form: FormState<T>;
}

const newFormState = <T extends {}>(formData: T) => ({
  meta: { pristine: true, redirectTo: '', submitting: false },
  clean: { ...formData },
  data: { ...formData },
  statuses: {},
  dirty: {},
  errors: {}, // TODO: once status field is in play, this could be removed
  touched: {},
});

const StyledForm = styled.form<{}>(...styles.form);

class Form<T extends {}> extends React.Component<Props<T>, State<T>> {
  static defaultProps = defaultProps;
  readonly state: State<T> = { form: newFormState(this.props.initialForm) };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { onSubmit = () => {} } = this.props;

    this.setState(
      ({ form: prevForm }) => ({ form: { ...prevForm, meta: { ...prevForm.meta, submitting: true } } }),
      () =>
        Promise.resolve(onSubmit(this.submitProps())).then(res =>
          this.setState(({ form: prevForm }) => ({
            form: {
              ...prevForm,
              meta: {
                ...prevForm.meta,
                redirectTo: res && typeof res === 'string' ? res : undefined,
                submitting: false,
              },
            },
          }))
        )
    );
  };

  renderProps = () => {
    const { meta, data, statuses, dirty, errors, touched } = this.state.form;
    return {
      data,
      statuses,
      dirty,
      errors,
      touched,
      reset: this.reset,
      setFormField: this.setFormField,
      setFormData: this.setFormData,
      validate: this.validate,
      submittable: this.submittable(),
      submitting: meta.submitting,
    };
  };

  reset = (data: Partial<T> = {}, statuses: FormStatuses<T, keyof T> = {}) => {
    const newData = { ...this.state.form.clean, ...data };
    this.setState(() => ({ form: { ...newFormState(newData), statuses } }));
  };

  setFormField = <K extends keyof T>(key: K, value: T[K]) => {
    const { validation } = this.props;
    const { clean } = this.state.form;

    this.setState(({ form: prevForm }) => ({
      form: {
        ...prevForm,
        meta: { ...prevForm.meta, pristine: false },
        data: { ...prevForm.data, [key]: value },
        statuses: { ...prevForm.statuses },
        dirty: { ...prevForm.dirty, [key]: !isClean(key, value, clean, validation) },
        errors: { ...prevForm.errors, [key]: '' },
        touched: { ...prevForm.touched, [key]: true },
      },
    }));
  };

  setFormData = (data: Partial<T>, statuses: FormStatuses<T, keyof T> = {}) => {
    const { validation } = this.props;
    const { clean } = this.state.form;

    const dirty = Object.entries(data).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: !isClean(key as keyof T, value, clean, validation),
      }),
      { ...this.state.form.dirty }
    );

    const errors = Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: '' }), { ...this.state.form.errors });

    const touched = Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: true }), { ...this.state.form.touched });

    this.setState(({ form: prevForm }) => ({
      form: {
        ...prevForm,
        meta: { ...prevForm.meta, pristine: Object.values(dirty).every(d => !d) },
        data: { ...prevForm.data, ...data },
        statuses: { ...prevForm.statuses, ...statuses },
        dirty,
        errors,
        touched,
      },
    }));
  };

  setPristine = (pristine?: boolean) =>
    this.setState(state => ({
      ...state,
      form: { ...state.form, meta: { ...state.form.meta, pristine: !!pristine } },
    }));

  submitProps = () => ({
    data: this.state.form.data,
    reset: this.reset,
    setPristine: this.setPristine,
  });

  submittable = () => {
    const { meta, statuses } = this.state.form;
    return !meta.pristine && !Object.values(statuses).some(e => e && e.type === 'danger');
  };

  validate = (key: keyof T) => {
    const { validation } = this.props;
    const {
      form: { data },
    } = this.state;

    const validator = (validation as any)[key];
    if (validator && validator.isValid) {
      const answer = validator.isValid(data[key], data);
      Promise.resolve(answer).then(status =>
        this.setState(({ form: prevForm }) => ({
          form: { ...prevForm, statuses: { ...prevForm.statuses, [key]: status } },
        }))
      );
    }
  };

  render() {
    const { header, children, footer } = this.props;
    const { redirectTo } = this.state.form.meta;

    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }

    const renderProps = this.renderProps();

    return (
      <>
        {header && header(renderProps)}
        <StyledForm onSubmit={this.onSubmit}>
          {children(renderProps)}
          {footer &&
            (isFunction(footer) ? (
              footer(renderProps)
            ) : (
              <ButtonGroup align={footer.align}>
                {footer.secondary && (
                  <Button
                    as="button"
                    color="secondary"
                    variant={footer.secondary.variant || 'ghost'}
                    onClick={() => this.reset()}
                  >
                    {footer.secondary.label || 'Discard'}
                  </Button>
                )}
                <Button
                  as="button"
                  type="submit"
                  color="primary"
                  disabled={!this.submittable()}
                  variant={footer.primary.variant || 'raised'}
                >
                  {footer.primary.label || 'Submit'}
                </Button>
              </ButtonGroup>
            ))}
        </StyledForm>
      </>
    );
  }
}

export default Form;
