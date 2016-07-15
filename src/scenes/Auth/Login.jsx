import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Card, CardHeader } from 'material-ui/Card';
import { Link } from 'react-router';
import { manualLogin } from 'state/modules/user';
import { Col, Row, Container } from 'components/index';
import LoginForm from './components/atm.LoginForm';

class Login extends Component {

  handleOnSubmit(values) {
    const { manualLogin } = this.props;
    manualLogin({ email: values.email, password: values.password });
  }
  renderHeader() {
    return (
      <div>
        <CardHeader
          title="Log in"
          actAsExpander={ false }
          showExpandableButton={ false }
        />
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
        <Container fluid>
          <Helmet title="Login" />
          <Row>

            <Card className="auth-login__card">
              <Col sm="12" md={ { size: 4, offset: 4 } }>
                { this.renderHeader() }
                <div>
                  <p>{ message }</p>
                  <LoginForm onSubmit={ ::this.handleOnSubmit } />

                  <a href="http://localhost:8000/api/v1/auth/facebook">Login with Facebook</a>
                </div>
              </Col>
              </Card>

          </Row>
        </Container>
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
