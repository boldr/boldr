import React from 'react';
import { reduxForm } from 'redux-form';
import RenderField from 'components/atm.RenderField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';

export const fields = ['description', 'logo', 'favicon', 'analyticsId', 'allowRegistration'];

const SetupFormPage2 = (props) => {
  const { fields: {
    description, logo, favicon, analyticsId, allowRegistration },
    handleSubmit, previousPage } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <TextField
        floatingLabelText="Site description"
        { ...description }
      /><br />
      <TextField
        floatingLabelText="Site logo"
        hintText="This will be a file input eventually."
        { ...logo }
      /><br />
      <TextField
        floatingLabelText="Favicon"
        { ...favicon }
      /><br />
      <TextField
        floatingLabelText="Google Analytics ID"
        { ...analyticsId }
      /><br />
      <Toggle
        label="Allow user registration"
        defaultToggled
        { ...allowRegistration }
      />
      <div>
        <button type="button" className="previous" onClick={ previousPage }>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SetupForm',
  fields,
  destroyOnUnmount: false
})(SetupFormPage2);
