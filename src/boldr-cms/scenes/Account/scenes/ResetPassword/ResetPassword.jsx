import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames/bind';
import { Link } from 'react-router/es6';
import Heading from '../../../../components/atm.Heading';
import inlineStyles from '../../../../core/inlineStyles';


import styles from '../../styles.css';
import { resetPassword } from '../../state';

const cx = styles::classNames;
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
        <section className={ cx('root') }>
          <Card className={ cx('auth-card') }>
            <form onSubmit={ this.handleReset }>
              { renderHeader }

              <CardText>
              <div className="grid__row">
                <TextField
                  type="password"
                  name="password"
                  id="password"
                  floatingLabelText="New password" style={ inlineStyles.underlineFocusStyle }
                  autoFocus value={ this.state.password } onChange={ this.handleChange }
                />
              </div>
              <div className="grid__row">
                <TextField
                  type="password"
                  name="password"
                  id="password"
                  floatingLabelText="Confirm password" style={ inlineStyles.underlineFocusStyle }
                  value={ this.state.confirm } onChange={ this.handleChange }
                />
              </div>
              </CardText>
              <CardActions>
                <RaisedButton secondary type="submit" label="Change Password" />
              </CardActions>
            </form>
          </Card>
        </section>
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
