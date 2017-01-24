/* @flow */

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton } from 'material-ui/RadioButton';
import { RadioButtonGroup } from 'redux-form-material-ui';
import Button from 'react-md/lib/Buttons';
import SelectField from 'react-md/lib/SelectFields';
import TextField from '../../../../../components/Form/TextField';

const style = {
  margin: 12,
};
type Props = {
  handleSubmit?: Function,
  reset?: Function,
  submitting?: boolean,
  fields?: Object,
  pristine?: boolean,
};
const roles = [{ value: 1, label: 'Member' }, { value: 2, label: 'Staff' }, { value: 3, label: 'Admin' }];

const renderRoleSelector = ({ input }) => (
  <div>
    <SelectField
      { ...input }
      id="roles"
      label="Role"
      placeholder="Select a role"
      menuItems={ roles }
      itemLabel="label"
      itemValue="value"
      className="md-cell"
    />
  </div>
);
const EditMemberForm = (props: Props) => {
  const { handleSubmit, reset } = props;
  return (
      <form onSubmit={ handleSubmit } className="boldr-form__generic">
        <Field
          name="email"
          type="email"
          label="Email"
          component={ TextField }
        />
        <Field
          name="first_name"
          type="text"
          label="First name"
          component={ TextField }
        />
        <Field
          name="last_name"
          type="text"
          label="Last name"
          component={ TextField }
        />
        <Field
          name="last_name"
          type="text"
          label="Last name"
          component={ TextField }
        />
        <Field
          name="avatar_url"
          type="text"
          label="Avatar URL"
          component={ TextField }
        />
        <Field name="role" component={ renderRoleSelector } />
        <Button type="submit" label="Save" style={ style } raised primary />
        <Button label="Reset" onClick={ reset } style={ style } flat secondary />
      </form>
  );
};

export default reduxForm({
  form: 'editMemberForm',
})(EditMemberForm);
