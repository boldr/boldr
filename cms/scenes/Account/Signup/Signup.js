import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { Link } from 'react-router';
import classNames from 'classnames/bind';
import { Card, CardMedia, CardTitle, CardActions } from '../../../components/md/Cards';
import { Heading } from '../../../components/index';
import inlineStyles from '../../../core/inlineStyles';
import { signup } from '../state/actions';
import styles from '../styles.css';
import SignupForm from './SignupForm';

const cx = styles::classNames;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnSubmit(values) {
    const { signup } = this.props;
    signup({
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      display_name: values.display_name
    });
  }

  render() {
    const { isLoading } = this.props.auth;

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
  signup: PropTypes.func,
  handleOnSubmit: PropTypes.func
};
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, { signup })(Signup);
