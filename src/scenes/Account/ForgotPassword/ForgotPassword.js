import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { Card, CardText, CardActions } from '../../../components/md/Cards';
import TextField from '../../../components/md/TextFields';
import { RaisedButton } from '../../../components/md/Buttons';
import Heading from '../../../components/atm.Heading';
import inlineStyles from '../../../core/inlineStyles';
import { forgotPassword } from '../state';


import styles from '../styles.css';

const cx = styles::classNames;
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
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForgot(event) {
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
      <section className={ cx('root') }>

          <Card className={ cx('auth-card') }>
            <form onSubmit={ this.handleForgot }>
              { renderHeader }
              <CardText>
              <div className="grid__row">
                <TextField
                  type="email"
                  name="email"
                  id="email"
                  floatingLabelText="Email address" style={ inlineStyles.underlineFocusStyle }
                  autoFocus value={ this.state.email } onChange={ this.handleChange }
                />
              </div>
              </CardText>
              <CardActions>
                <RaisedButton secondary type="submit" label="Reset Password" />
              </CardActions>
            </form>
          </Card>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  };
};

export default connect(mapStateToProps)(ForgotPassword);
