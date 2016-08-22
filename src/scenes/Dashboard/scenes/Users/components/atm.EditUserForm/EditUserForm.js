import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import inlineStyles from '../../../../../../core/inlineStyles';
import TextField from '../../../../../../components/atm.FormComponents/TextField';
import SelectField from '../../../../../../components/atm.FormComponents/SelectField';

const EditUserForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="grid__row">

        <Field
          name="roleId"
          component={ SelectField }
          hintText="Role ID"
          floatingLabelText="Role ID"
        >
          <MenuItem value="1" primaryText="Pending" />
          <MenuItem value="2" primaryText="Member" />
          <MenuItem value="3" primaryText="Moderator" />
          <MenuItem value="4" primaryText="Staff" />
          <MenuItem value="5" primaryText="Admin" />
        </Field>

        </div>
    </form>
  );
};

EditUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'editUserForm'
})(EditUserForm);
