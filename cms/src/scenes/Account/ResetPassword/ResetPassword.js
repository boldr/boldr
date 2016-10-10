/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Heading, Grid, Col, Row } from 'components/index';
import { Card, CardText, CardActions } from 'components/md/Cards';
import TextField from 'components/md/TextFields';
import { RaisedButton } from 'components/md/Buttons';
import inlineStyles from 'theme/inlineStyles';
import { resetPassword } from 'state/dux/auth';

export type Props = {
  dispatch: () => void,
  params: Object
};

export type State = {
  password: string,
  confirm: string
}

class ResetPassword extends Component {
  constructor(props: Props) {
    super(props);
    this.state = { password: '', confirm: '' };

    (this:any).handleChange = this.handleChange.bind(this);
    (this:any).handleConfirmChange = this.handleConfirmChange.bind(this);
    (this:any).handleReset = this.handleReset.bind(this);
  }
  state: State;
  props: Props;

  handleChange(event) {
    this.setState({ password: event });
  }
  handleConfirmChange(event) {
    this.setState({ confirm: event });
  }
  handleReset(event, props): void {
    event.preventDefault();
    this.props.dispatch(resetPassword(this.state.password, this.props.params.token));
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
                  <form onSubmit={ this.handleReset }>
                    { renderHeader }
                    <CardText>
                      <Row>
                        <TextField
                          type="password"
                          name="password"
                          id="password"
                          floatingLabelText="New password" style={ inlineStyles.underlineFocusStyle }
                          autoFocus value={ this.state.password } onChange={ this.handleChange }
                        />
                      </Row>
                      <Row>
                        <TextField
                          type="password"
                          name="password"
                          id="password"
                          floatingLabelText="Confirm password" style={ inlineStyles.underlineFocusStyle }
                          value={ this.state.confirm } onChange={ this.handleConfirmChange }
                        />
                      </Row>
                    </CardText>
                    <CardActions>
                      <RaisedButton secondary type="submit" label="Change Password" />
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
  return state;
};

export default connect(mapStateToProps)(ResetPassword);
