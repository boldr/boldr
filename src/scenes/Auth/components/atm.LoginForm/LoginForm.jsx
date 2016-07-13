import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const LoginForm = props => {
  const { fields: { email, password }, handleSubmit, reset } = props;
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
        </CardText>
        <CardActions>
          <RaisedButton secondary type="submit" label="Login" />
          <FlatButton label="Reset" onTouchStart={ reset } />
        </CardActions>
      </form>
    );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object
};

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password']
})(LoginForm);
