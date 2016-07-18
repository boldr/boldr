import React from 'react';
import { reduxForm } from 'redux-form';
import RenderField from 'components/atm.RenderField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton';

import Heading from 'components/atm.Heading';

export const fields = ['siteName', 'siteUrl', 'description', 'logo', 'favicon', 'analyticsId', 'allowRegistration'];

const SetupFormPage3 = (props) => {
  const {
    handleSubmit,
    previousPage
    } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Heading size={ 1 }>Temporarily empty placeholder page. Click the button below to finish</Heading>
      <div>
        <RaisedButton
          label="Previous"
          onClick={ previousPage }
          style={ { marginTop: '1em', marginRight: '1em' } }
        />
        <RaisedButton
          primary
          label="Save Settings"
          type="submit"
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SetupForm',
  fields,
  destroyOnUnmount: false
})(SetupFormPage3);
