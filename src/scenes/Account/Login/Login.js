import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Card } from 'material-ui/Card';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

import { Heading } from '../../../components/index';
import inlineStyles from '../../../core/inlineStyles';
import { doLogin } from '../state/auth';
import { LoginForm } from '../components';
import styles from '../styles.css';

const cx = styles::classNames;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnSubmit(values) {
    const { doLogin } = this.props;
    const loginData = { email: values.email, password: values.password };
    const redir = this.props.redirect;
    doLogin(loginData, redir);
  }

  render() {
    const renderHeader = (
      <div>
        <Heading size={ 1 } bottom="10px">Forgot your password?</Heading>
          Enter your email address below to reset it.
      </div>
    );
    const { isLoading } = this.props.auth;

    return (
      <div style={ inlineStyles.headerOverflow }>
        <Helmet title="Login" />
        <section className={ cx('root') }>
          <Card className={ cx('auth-card') }>
            { renderHeader }

            <LoginForm onSubmit={ this.handleOnSubmit } />
            <div className={ cx('auth-card__footer') }>
              <p><Link to="/account/forgot-password">Forgot your password?</Link></p>
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
  redirect: PropTypes.string,
  handleOnSubmit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    redirect: ownProps.location.query.redirect
  };
};

export default connect(mapStateToProps, { doLogin })(Login);
