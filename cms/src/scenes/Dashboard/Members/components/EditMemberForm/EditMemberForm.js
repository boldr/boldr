import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import SelectField from 'components/FormComponents/SelectField';

const EditMemberForm = (props) => {
  const renderField = ({ input, label, type, meta: { touched, error } }) => ( // eslint-disable-line
    <Form.Input
      label={ label }
      className="form__auth"
      type={ type }
      { ...input }
    />
  );
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <Form onSubmit={ handleSubmit } className="modal__form">

        <Field
          name="roleId"
          component={ SelectField }
          label="Role ID"
          position="below"
          menuItems={ [1, 2, 3, 4, 5] }
        />

            <Field
              name="email"
              type="email"
              label="Email"
              component={ renderField }
            />

            <Field
              name="password"
              label="Password"
              type="password"
              component={ renderField }
              style={ { marginBottom: '50px' } }
            />
             <Button primary type="submit">Login</Button>
             <Button disabled={ pristine || submitting } onClick={ reset }>Clear</Button>

        </Form>
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
