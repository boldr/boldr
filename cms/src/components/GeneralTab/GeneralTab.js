import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import renderTextField from 'components/FormComponents/TextField';


const GeneralTab = props => { // eslint-disable-line
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
     <div>
        <Form onSubmit={ handleSubmit }>
          <div>
          <Field name="siteName" type="text" component={ renderTextField } label="Website name" />
          </div>
          <div>
          <Field name="siteUrl" type="text" component={ renderTextField } label="Website URL" />
          <Field name="siteLogo" type="text" component={ renderTextField } label="Website Logo" />
          {/* <Field name="favicon" type="text" component={ renderTextField } label="Favicon" /> */}
          </div>

          <div>
          <Field name="googleAnalytics" type="text" component={ renderTextField } label="Google Analytics ID" />
          </div>
          <Button type="submit" primary style={ { marginTop: '20px' } }>Save Settings</Button>
        </Form>
    </div>
  );
};
GeneralTab.propTypes = {
  settings: PropTypes.object,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  reset: PropTypes.func
};

export default reduxForm({
  form: 'GeneralTabSettings'
})(GeneralTab);
