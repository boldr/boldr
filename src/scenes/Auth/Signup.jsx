import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Card, CardHeader } from 'material-ui/Card';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import { signUp } from 'state/modules/user';
import { Heading } from 'components/index';
import SignupForm from './components/atm.SignupForm';
import SocialLogin from './components/atm.SocialLogin';
import styles from './Auth.css';

const cx = styles::classNames;
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
        <div style={ { backgroundColor: 'rgba(64, 64, 78, 1)', paddingTop: '50px' } }>
        <Helmet title="Login" />
        <section className={ cx('root') }>

          <Card className={ cx('auth-card') }>

          { this.renderHeader() }
          <p>{ message }</p>
        <div>
          <SignupForm onSubmit={ ::this.handleOnSubmit } />
          <div className={ cx('auth-card__footer') }>
            <SocialLogin />
          </div>
        </div>
      </Card>
        </section>
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
