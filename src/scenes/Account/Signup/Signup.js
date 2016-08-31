import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { Link } from 'react-router';
import classNames from 'classnames/bind';
import { Card, CardMedia, CardTitle, CardActions } from '../../../components/md/Cards';
import { Heading } from '../../../components/index';
import inlineStyles from '../../../core/inlineStyles';
import { createAccount } from '../state/account';
import { SignupForm } from '../components';
import styles from '../styles.css';


const cx = styles::classNames;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
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

  render() {
    const { isLoading } = this.props.account;

    const renderHeader = (
      <div>
        <Heading size={ 1 } bottom="10px">Create your identity</Heading>
          Already have an account?
          <Link to="/account/login"> Login</Link>
      </div>
    );

    return (
        <div style={ inlineStyles.headerOverflow }>
          <Helmet title="Signup" />
          <section className={ cx('root') }>
            <Card>

              { renderHeader }

              <SignupForm onSubmit={ this.handleOnSubmit } />
            </Card>
          </section>
        </div>
    );
  }
}

Signup.propTypes = {
  users: PropTypes.object,
  createAccount: PropTypes.func,
  handleOnSubmit: PropTypes.func
};
function mapStateToProps({ account }) {
  return {
    account
  };
}

export default connect(mapStateToProps, { createAccount })(Signup);
