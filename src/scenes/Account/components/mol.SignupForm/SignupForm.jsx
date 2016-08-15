import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import inlineStyles from '../../../../core/inlineStyles';
import TextField from '../../../../components/atm.FormComponents/TextField';
import validate from './validate';


const SignupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <CardText>
      <div className="grid__row">
        <Field name="email"
          type="email"
          component={ TextField }
          floatingLabelText="Email address"
          className="grid__half"
          underlineFocusStyle={ inlineStyles.underlineFocusStyle }
        />
        <Field name="password"
          type="password"
          component={ TextField }
          floatingLabelText="Password"
          className="grid__half"
          underlineFocusStyle={ inlineStyles.underlineFocusStyle }
        />
        </div>
        <div className="grid__row">
        <Field name="firstName"
          type="text"
          component={ TextField }
          floatingLabelText="First name"
          className="grid__half"
          underlineFocusStyle={ inlineStyles.underlineFocusStyle }
        />
        <Field name="lastName"
          type="text"
          component={ TextField }
          floatingLabelText="Last name"
          className="grid__half"
          underlineFocusStyle={ inlineStyles.underlineFocusStyle }
        />
        </div>
        <div className="grid__row">
        <Field name="displayName"
          type="text"
          component={ TextField }
          floatingLabelText="Display name"
          underlineFocusStyle={ inlineStyles.underlineFocusStyle }
        />
        </div>
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
