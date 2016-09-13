import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Heading, Grid, Col, Row } from 'components';
import { Card, CardText, CardActions } from '../../../components/md/Cards';
import TextField from '../../../components/md/TextFields';
import { RaisedButton } from '../../../components/md/Buttons';
import inlineStyles from '../../../theme/inlineStyles';
import { resetPassword } from '../state/actions';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', confirm: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleReset(event) {
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
                      <Row>>
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
                          value={ this.state.confirm } onChange={ this.handleChange }
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
ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ResetPassword);
