import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Card } from 'material-ui/Card';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import { Heading } from 'components/index';

import { doLogin } from 'core/state/auth';
import { LoginForm, SocialLogin } from '../../components';
import styles from '../../styles.css';

const cx = styles::classNames;

class Login extends Component {

  handleOnSubmit(values) {
    const { doLogin } = this.props;
    doLogin({ email: values.email, password: values.password });
  }
  renderHeader() {
    return (
      <div>
        <Heading size={ 1 }>Log in</Heading>
        <div>
          Not what you want?
          <Link to="/signup"> Register an Account</Link>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, message } = this.props.auth;

    return (
      <div style={{ backgroundColor: 'rgba(64, 64, 78, 1)', paddingTop: '50px'}}>
        <Helmet title="Login" />
        <section className={ cx('root') }>

          <Card className={ cx('auth-card') }>

            { this.renderHeader() }
            <div>
              <p>{ message }</p>
              <LoginForm onSubmit={ ::this.handleOnSubmit } />
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
Login.propTypes = {
  auth: PropTypes.object,
  doLogin: PropTypes.func,
  handleOnSubmit: PropTypes.func
};
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, { doLogin })(Login);
