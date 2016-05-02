import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

@connect(selector)
class RegisterForm extends Component {
  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <TextField type="email" floatingLabelText="Email" { ...email } />
        </div>
        <div>
           <TextField type="password" floatingLabelText="Password" { ...password } />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const selector = (state) => ({ auth: state.auth });

RegisterForm = reduxForm({
  form: 'register',
  fields: ['email', 'password']
})(RegisterForm);

export default RegisterForm;