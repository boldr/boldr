import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames/bind';
import { forgotPassword } from '../../state';

import styles from '../../styles.css';

const cx = styles::classNames;
class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForgot(event) {
    event.preventDefault();
    this.props.dispatch(forgotPassword(this.state.email));
  }

  render() {
    return (
      <div style={ { backgroundColor: 'rgba(64, 64, 78, 1)', paddingTop: '50px' } }>
      <section className={ cx('root') }>

          <Card className={ cx('auth-card') }>
            <form onSubmit={ ::this.handleForgot }>
              <legend>Forgot Password</legend>
              <div className="form-group">
                <p>Enter your email address below and we'll send you password reset instructions.</p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="form-control"
                  autoFocus value={ this.state.email } onChange={ ::this.handleChange }
                />
              </div>
              <RaisedButton secondary type="submit" label="Reset Password" />
            </form>
          </Card>
        </section>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ForgotPassword);
