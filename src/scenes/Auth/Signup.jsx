import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { signUp } from 'state/modules/user';
import SignupForm from './components/atm.SignupForm';

class Signup extends Component {

  handleOnSubmit(values) {
    const { signUp } = this.props;
    signUp({
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      displayName: values.displayName
    });
  }

  renderHeader() {
    return (
      <div>
        <h1>Register with Email</h1>
        <div>
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, message } = this.props.user;

    return (
        <div>
          { this.renderHeader() }
          <p>{ message }</p>
        <div>
          <SignupForm onSubmit={ ::this.handleOnSubmit } />
        </div>
        </div>
    );
  }
}

Signup.propTypes = {
  user: PropTypes.object,
  signUp: PropTypes.func.isRequired
};
Signup.propTypes = {
  user: PropTypes.object,
  signUp: PropTypes.func,
  handleOnSubmit: PropTypes.func
};
function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps, { signUp })(Signup);
