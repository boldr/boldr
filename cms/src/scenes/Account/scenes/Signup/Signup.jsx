import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Card, CardHeader } from 'material-ui/Card';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import { Heading } from 'components/index';
import { createAccount } from '../../state/account';
import { SignupForm, SocialLogin } from '../../components';
import styles from '../../styles.css';

const cx = styles::classNames;
class Signup extends Component {

  handleOnSubmit(values) {
    const { createAccount } = this.props;
    createAccount({
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
        <Heading size={ 1 }>Register with Email</Heading>
          Already have an account?
          <Link to="/account/login"> Login</Link>
      </div>
    );
  }

  render() {
    const { isLoading } = this.props.account;
    return (
        <div style={ { backgroundColor: 'rgba(64, 64, 78, 1)', paddingTop: '50px' } }>
          <Helmet title="Signup" />
          <section className={ cx('root') }>
            <Card className={ cx('auth-card') }>

              { this.renderHeader() }

              <SignupForm onSubmit={ ::this.handleOnSubmit } />
            </Card>
          </section>
        </div>
    );
  }
}

Signup.propTypes = {
  account: PropTypes.object,
  createAccount: PropTypes.func,
  handleOnSubmit: PropTypes.func
};
function mapStateToProps({ account }) {
  return {
    account
  };
}

export default connect(mapStateToProps, { createAccount })(Signup);
