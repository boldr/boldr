import React from 'react';
import { reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';


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
