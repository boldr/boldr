/* @flow */

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-md/lib/Buttons';
import { TextField } from '../../../components/Form';

const style = {
  margin: 12,
};
type Props = {
  handleSubmit: Function
};
const ForgotPasswordForm = (props: Props) => {
  const { handleSubmit } = props;
  return (
      <form onSubmit={ handleSubmit } className="boldr-form__generic">
        <Field
          name="email"
          type="email"
          floatingLabelText="Email"
          component={ TextField }
        />
        <Button type="submit" label="Send reset link" style={ style } raised primary />
      </form>
  );
};

export default reduxForm({
  form: 'forgotPasswordForm',
})(ForgotPasswordForm);
