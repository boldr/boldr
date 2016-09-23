import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import inlineStyles from '../../../../theme/inlineStyles';
import { RaisedButton } from '../../../../components/md/Buttons';
import TextField from '../../../../components/atm.FormComponents/TextField';
import SelectField from '../../../../components/atm.FormComponents/SelectField';

const EditMemberForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="grid__row">

        <Field
          name="roleId"
          component={ SelectField }
          label="Role ID"
          position="below"
          menuItems={ [1, 2, 3, 4, 5] }
        />

        </div>
    </form>
  );
};

EditMemberForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'editMemberForm'
})(EditMemberForm);
