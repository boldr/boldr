// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { Card, Header, Icon } from 'semantic-ui-react';
// $FlowFixMe
import { Grid, Col, Row } from 'components';
import inlineStyles from 'theme/inlineStyles';
import { signup } from 'state/dux/auth';
import SignupForm from './SignupForm';

type Props = {
  signup: () => void,
  handleOnSubmit: () => void,
  isLoading: Boolean,
  auth: Object
};

class Signup extends Component {
  constructor(props) {
    super(props);
    // $FlowFixMe
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  props: Props;

  handleOnSubmit(values: Object) {
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
    const renderHeader = (
        <Card.Header>
        <Header as="h1" textAlign="center">
          <Icon name="sign in" />
          <Header.Content>
            Signup
          </Header.Content>
        </Header>
        </Card.Header>
    );

    return (
        <div style={ inlineStyles.headerOverflow }>
          <Helmet title="Signup" />
          <Grid>
            <Row>
              <Col xs={ 12 }>
                <Row xsCenter>
                  <Col xs={ 6 }>
                    <Card style={ { width: '450px', marginTop: '150px' } }>
                      { renderHeader }
                      <Card.Content>
                      <SignupForm onSubmit={ this.handleOnSubmit } />
                      Already have an account?
                      <Link to="/account/login"> Login</Link>
                      </Card.Content>
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

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, { signup })(Signup);
