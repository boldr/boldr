import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import { Flex, Box } from 'reflexbox';

import { Card, CardMedia, CardTitle, CardActions } from '../../../components/md/Cards';
import { Heading } from '../../../components/index';
import inlineStyles from '../../../core/inlineStyles';
import { login } from '../state/actions';
import styles from '../styles.css';
import LoginForm from './LoginForm';

const cx = styles::classNames;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnSubmit(values) {
    const { login } = this.props;
    const loginData = { email: values.email, password: values.password };
    const redir = this.props.redirect;
    login(loginData, redir);
  }

  render() {
    const renderHeader = (
      <div>
        <Heading size={ 1 } bottom="10px">Login</Heading>
        <p>
          <Link to="/account/forgot-password">Forgot your password?</Link>
          <Link to="/account/signup">Create an account</Link>
        </p>
      </div>
    );
    const { isLoading } = this.props.auth;

    return (
      <div style={ inlineStyles.headerOverflow }>
        <Helmet title="Login" />
        <section className={ cx('root') }>
          <Flex
            align="center"
            justify="center"
            style={ { margin: '0 auto' } }
          >
            <Box px={ 3 }>
          <Card style={ { width: '450px' } }>
            { renderHeader }

            <LoginForm onSubmit={ this.handleOnSubmit } />
          </Card>
              </Box>
            </Flex>
        </section>
      </div>
    );
  }
}
Login.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func,
  redirect: PropTypes.string,
  handleOnSubmit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    redirect: ownProps.location.query.redirect
  };
};

export default connect(mapStateToProps, { login })(Login);
