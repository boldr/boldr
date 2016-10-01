import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Radio from '../../../../components/md/SelectionControls/Radio';
import { RaisedButton } from '../../../../components/md/Buttons';
import RadioButtonGroup from '../../../../components/atm.FormComponents/RadioButtonGroup';
import TextField from '../../../../components/atm.FormComponents/TextField';

let GeneralTab = props => { // eslint-disable-line
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
     <div>
        <form onSubmit={ handleSubmit }>
          <div>
          <Field name="site_name" type="text" component={ TextField } label="Website name" />
          </div>
          <div>
          <Field name="site_url" type="text" component={ TextField } label="Website URL" />
          </div>
          <div>
          <Field name="site_description" type="text"
            component={ TextField } multiLine rows={ 3 }
            label="Website description"
          />
          </div>
          <div>
          <Field name="google_analytics" type="text" component={ TextField } label="Google Analytics ID" />
          </div>
          <div>
          <Field name="allow_registration" component={ RadioButtonGroup }>

            <Radio
              value="true"
              label="Yes"
            />
            <Radio
              value="false"
              label="No"
            />
          </Field>
          </div>
          <div>
          <RaisedButton type="submit" secondary label="Save" disabled={ pristine || submitting } />
          <RaisedButton label="Undo Changes" onClick={ reset } />
          </div>
        </form>
    </div>
  );
};
GeneralTab.propTypes = {
  settings: PropTypes.object,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func
};

GeneralTab = reduxForm({
  form: 'GeneralTabSettings'
})(GeneralTab);

GeneralTab = connect(
  state => ({
    initialValues: state.boldr
  })
)(GeneralTab);

export default GeneralTab;
