import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField, { renderLabel } from 'components/atm.FormComponents/TextField';
import { FlatButton, RaisedButton } from 'components/md/Buttons';
import { Row } from 'components/org.Layout';
import Divider from 'components/md/Dividers';

let NavigationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Row>
          <Field name="name" component={ renderTextField } type="text" label="Name" />
      </Row>
      <Row>
          <Field name="position" component={ renderTextField } type="text" label="Position" />
      </Row>
      <Row>
          <Field name="href" component={ renderTextField } type="text" label="Link" />
      </Row>
      <Row>
      <Divider />
      <RaisedButton type="submit" secondary label="Save" disabled={ pristine || submitting } />
      <FlatButton type="button" label="Cancel" onClick={ reset } disabled={ pristine || submitting } />
      </Row>
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
