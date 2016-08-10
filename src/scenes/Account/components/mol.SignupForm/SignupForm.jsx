import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'components/atm.FormComponents/TextField';
import validate from './validate';

const SignupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <CardText>
        <Field name="email" type="email" component={ TextField } floatingLabelText="Email address" />
        <Field name="password" type="password" component={ TextField } floatingLabelText="Password" />
        <Field name="firstName" type="text" component={ TextField } floatingLabelText="First name" />
        <Field name="lastName" type="text" component={ TextField } floatingLabelText="Last name" />
        <Field name="displayName" type="text" component={ TextField } floatingLabelText="Display name" />
      </CardText>
      <CardActions>
        <RaisedButton secondary type="submit" label="Create account" />
      </CardActions>

    </form>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'userSignupForm',
  validate
})(SignupForm);
