import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { Card, CardMedia, CardTitle, CardActions } from '../../../components/md/Cards';
import { Heading, Grid, Col, Row } from '../../../components/index';
import inlineStyles from '../../../theme/inlineStyles';
import { login } from '../state/actions';
import LoginForm from './LoginForm';

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
          <Grid fluid>
            <Row>
              <Col xs={ 12 }>
                <Row xsCenter>
                  <Col xs={ 6 }>
                    <Card style={ { width: '450px', marginTop: '150px' } }>
                      { renderHeader }

                      <LoginForm onSubmit={ this.handleOnSubmit } />
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
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
