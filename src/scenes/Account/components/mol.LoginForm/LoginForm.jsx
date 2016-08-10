import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'components/atm.FormComponents/TextField';

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <form onSubmit={ handleSubmit }>
        <CardText>
          <Field name="email" type="email" component={ TextField } floatingLabelText="Email address" />
          <Field name="password" type="password" component={ TextField } floatingLabelText="Password" />
        </CardText>
        <CardActions>
          <RaisedButton secondary type="submit" label="Login" />
          <FlatButton label="Clear values" disabled={ pristine || submitting } onClick={ reset } />
        </CardActions>
      </form>
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
