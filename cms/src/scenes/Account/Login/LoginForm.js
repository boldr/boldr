import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Input, Message } from 'stardust';

const renderField = ({ input, label, type, meta: { touched, error } }) => ( // eslint-disable-line
  <Form.Input
    label={ label }
    className="form__auth"
    type={ type }
    { ...input }
  />
);

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <Form onSubmit={ handleSubmit } className="card__form">
          <Field
            name="email"
            type="email"
            label="Email"
            component={ renderField }
          />

          <Field
            name="password"
            label="Password"
            type="password"
            component={ renderField }
            style={ { marginBottom: '50px' } }
          />
           <Button primary type="submit">Login</Button>
           <Button disabled={ pristine || submitting } onClick={ reset }>Clear</Button>

      </Form>
    );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);
