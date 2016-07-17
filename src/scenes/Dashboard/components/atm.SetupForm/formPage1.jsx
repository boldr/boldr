import React from 'react';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RenderField from 'components/atm.RenderField';
import Heading from 'components/atm.Heading';
import BoldrLogo from 'components/atm.BoldrLogo';

export const fields = ['siteName', 'siteUrl'];

const SetupFormPage1 = (props) => {
  const { fields: { siteName, siteUrl }, handleSubmit } = props;
  return (
    <div>

        <Heading size={ 1 }>Welcome to <BoldrLogo width="150" /> Boldr</Heading>

        <Heading size={ 2 }>Please answer a few questions in order to setup your site.</Heading>
        <form onSubmit={ handleSubmit }>
          <TextField
            floatingLabelText="Site Name"
            { ...siteName }
          /><br />
          <TextField
            floatingLabelText="Website URL"
            { ...siteUrl }
          />

          <div>
            <RaisedButton
              label="Next"
              type="submit"
            />
          </div>
        </form>

    </div>
      );
};

export default reduxForm({
  form: 'SetupForm',
  fields,
  destroyOnUnmount: false
})(SetupFormPage1);
