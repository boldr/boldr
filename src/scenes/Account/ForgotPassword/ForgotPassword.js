import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Form, Input, Message } from 'stardust';
import { Heading, Grid, Col, Row } from 'components';
import { CardText, CardActions } from 'components/md/Cards';
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
      <Card.Header>
      <Heading size={ 1 } bottom="10px">Forgot your password?</Heading>
      </Card.Header>
    );
    return (
      <div style={ inlineStyles.headerOverflow }>
        <Grid>
          <Row>
            <Col xs={ 12 }>
              <Row xsCenter>
                <Col xs={ 6 }>
                  <Card style={ { width: '450px', marginTop: '150px' } }>
                    <Form onSubmit={ this.handleForgot } className="card__form">
                    <Card.Content>
                      { renderHeader }
                      <Card.Meta>
                        Enter your email address below to reset it.
                      </Card.Meta>

                      <Form.Input
                        label="Email address"
                        value={ this.state.email }
                        onChange={ this.handleChange }
                        placeholder="Enter your email"
                      />

                      <Button primary type="submit">Reset Password</Button>
                      </Card.Content>
                    </Form>
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
