import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Card, CardHeader } from 'material-ui/Card';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import { Heading } from 'components/index';
import { manualLogin } from 'state/modules/user';
import LoginForm from './components/atm.LoginForm';
import SocialLogin from './components/atm.SocialLogin';
import styles from './Auth.css';

const cx = styles::classNames;

class Login extends Component {

  handleOnSubmit(values) {
    const { manualLogin } = this.props;
    manualLogin({ email: values.email, password: values.password });
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
    const { isLoading, message } = this.props.user;

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
  user: PropTypes.object,
  manualLogin: PropTypes.func,
  handleOnSubmit: PropTypes.func
};
function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps, { manualLogin })(Login);
