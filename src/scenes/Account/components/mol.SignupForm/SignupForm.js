import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardActions } from '../../../../components/md/Cards';
import TextField from '../../../../components/md/TextFields';
import { RaisedButton, FlatButton } from '../../../../components/md/Buttons';

import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => ( // eslint-disable-line
  <div>
  <TextField
    label={ label }
    className="md-text-field"
    type={ type }
    { ...input }
  />
  </div>
);

const SignupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
    <div className="grid__row">
      <div className="grid__half">
        <Field name="email"
          type="email"
          component={ renderField }
          label="Email address"
        />
      </div>
      <div className="grid__half">
        <Field name="password"
          type="password"
          component={ renderField }
          label="Password"
        />
      </div>
    </div>
    <div className="grid__row">
      <div className="grid__half">
        <Field name="firstName"
          type="text"
          component={ renderField }
          label="First name"
        />
      </div>
      <div className="grid__half">
        <Field name="lastName"
          type="text"
          component={ renderField }
          label="Last name"
        />
      </div>
      </div>
      <div className="grid__row">
        <Field name="displayName"
          type="text"
          component={ renderField }
          label="Display name"
        />
      </div>
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
