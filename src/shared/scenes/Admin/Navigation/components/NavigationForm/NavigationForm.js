import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons';
import { TextField } from 'redux-form-material-ui';

export type Props = {
  handleSubmit?: Function,
  reset?: Function,
  submitting?: boolean,
  fields?: Object,
  pristine?: boolean,
};

const style = {
  margin: 12,
};

let NavigationForm = (props: Props) => { // eslint-disable-line
  const { handleSubmit, reset } = props;
  return (
    <form className="form__navigation" onSubmit={ handleSubmit }>
      <Field name="name" component={ TextField } type="text" floatingLabelText="Name" />
      <Field name="position" component={ TextField } type="text" floatingLabelText="Position" />
      <Field name="link" component={ TextField } type="text" floatingLabelText="Link" />
      <Field name="icon" component={ TextField } type="text" floatingLabelText="Icon" />
      <div className="form__footer">
        <Button type="submit" label="Save" style={ style } raised primary />
        <Button label="Reset" onClick={ reset } style={ style } raised secondary />
      </div>
    </form>
  );
};
NavigationForm = reduxForm({
  form: 'navigationForm',
})(NavigationForm);

export default NavigationForm;
