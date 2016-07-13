import React from 'react';
import { reduxForm } from 'redux-form';
import RenderField from 'components/atm.RenderField';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';

import { Col, Row, Container } from 'components/index';

export const fields = ['description', 'logo', 'favicon', 'analyticsId', 'allowRegistration'];

const SetupFormPage2 = (props) => {
  const { fields: {
    description, logo, favicon, analyticsId, allowRegistration },
    handleSubmit, previousPage } = props;
  return (
    <form onSubmit={ handleSubmit }>

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
