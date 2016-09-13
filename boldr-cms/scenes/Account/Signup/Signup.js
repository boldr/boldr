import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { Heading, Grid, Col, Row } from 'components';
import { Card, CardMedia, CardTitle, CardActions } from '../../../components/md/Cards';
import inlineStyles from '../../../theme/inlineStyles';
import { signup } from '../state/actions';
import SignupForm from './SignupForm';

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
          <Grid fluid>
            <Row>
              <Col xs={ 12 }>
                <Row xsCenter>
                  <Col xs={ 6 }>
                    <Card style={ { marginTop: '150px' } }>
                      { renderHeader }

                      <SignupForm onSubmit={ this.handleOnSubmit } />
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

Signup.propTypes = {
  signup: PropTypes.func,
  handleOnSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  auth: PropTypes.object
};
function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, { signup })(Signup);
