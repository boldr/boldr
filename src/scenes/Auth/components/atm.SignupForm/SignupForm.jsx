import React from 'react';
import { reduxForm } from 'redux-form';
import { CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignupForm = (props) => {
  const { fields: { email, password, name, displayName }, handleSubmit, reset } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <CardText>
        <div>
          <TextField
            floatingLabelText="Email"
            { ...email }
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Password"
            type="password"
            { ...password }
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Name"
            { ...name }
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Display Name"
            { ...displayName }
          />
        </div>
      </CardText>
      <CardActions>
        <RaisedButton secondary type="submit" label="Create account" />
      </CardActions>
      <div>
        <a href="/api/v1/auth/google">Login with Google</a>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'userSignupForm',
  fields: ['email', 'password', 'name', 'displayName']
})(SignupForm);
