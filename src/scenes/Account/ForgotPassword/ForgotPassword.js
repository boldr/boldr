import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Heading, Grid, Col, Row } from 'components';
import { Card, CardText, CardActions } from 'components/md/Cards';
import TextField from 'components/md/TextFields';
import { RaisedButton } from 'components/md/Buttons';
import inlineStyles from 'theme/inlineStyles';
import { forgotPassword } from 'state/dux/auth';

class ForgotPassword extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    account: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event });
  }

  handleForgot(event, dispatch) {
    event.preventDefault();
    this.props.dispatch(forgotPassword(this.state.email));
  }
  render() {
    const renderHeader = (
      <div>
        <Heading size={ 1 } bottom="10px">Forgot your password?</Heading>
          Enter your email address below to reset it.
      </div>
    );
    return (
      <div style={ inlineStyles.headerOverflow }>
        <Grid fluid>
          <Row>
            <Col xs={ 12 }>
              <Row xsCenter>
                <Col xs={ 6 }>
                  <Card style={ { marginTop: '150px' } }>
                    <form onSubmit={ this.handleForgot }>
                      { renderHeader }
                      <CardText>
                      <Row>
                        <TextField
                          type="email"
                          name="email"
                          id="email"
                          label="Email address" style={ inlineStyles.underlineFocusStyle }
                          autoFocus value={ this.state.email } onChange={ this.handleChange }
                        />
                      </Row>
                      </CardText>
                      <CardActions>
                        <RaisedButton secondary type="submit" label="Reset Password" />
                      </CardActions>
                    </form>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ForgotPassword);
