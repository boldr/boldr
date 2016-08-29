import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CardActions } from '../../../../components/md/Cards';
import TextField from '../../../../components/md/TextFields';
import { RaisedButton, FlatButton } from '../../../../components/md/Buttons';
import inlineStyles from '../../../../core/inlineStyles';

const renderField = ({ input, label, type, meta: { touched, error } }) => ( // eslint-disable-line
  <div>
  <TextField
    label={ label }
    className="md-title-text-field"
    size={ 10 }
    type={ type }
    { ...input }
  />
  </div>
);

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <form onSubmit={ handleSubmit } className="card__form">
          <div className="grid__row">
          <Field
            name="email"
            type="email"
            label="Email"
            component={ renderField }
          />
          </div>
          <div className="grid__row">
          <Field
            name="password"
            label="Password"
            type="password"
            component={ renderField }
          />
          </div>
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
