import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField, { renderLabel } from 'components/FormComponents/TextField';
import { FlatButton, RaisedButton } from 'components/md/Buttons';
import { Row } from 'components/Layout';
import Divider from 'components/md/Dividers';

let NavigationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className="form__navigation" onSubmit={ handleSubmit }>
      <Field name="name" component={ renderTextField } type="text" label="Name" />
      <Field name="position" component={ renderTextField } type="text" label="Position" />
      <Field name="href" component={ renderTextField } type="text" label="Link" />
      <Field name="icon" component={ renderTextField } type="text" label="Icon" />
      <div className="form__footer">
      <RaisedButton type="submit" label="Save" disabled={ pristine || submitting } style={ { marginRight: '10px' } } />
      <FlatButton type="button" label="Cancel" onClick={ reset } disabled={ pristine || submitting } />
      </div>
    </form>
  );
};
NavigationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  pristine: PropTypes.bool
};
NavigationForm = reduxForm({
  form: 'navigationForm'
})(NavigationForm);

export default NavigationForm;
