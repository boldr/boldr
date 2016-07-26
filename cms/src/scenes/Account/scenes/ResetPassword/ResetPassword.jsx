import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames/bind';

import styles from '../../styles.css';
import { resetPassword } from '../../state';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', confirm: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleReset(event) {
    event.preventDefault();
    this.props.dispatch(resetPassword(this.state.password, this.props.params.token));
  }

  render() {
    return (
      <div style={ { backgroundColor: 'rgba(64, 64, 78, 1)', paddingTop: '50px' } }>
        <section className={ cx('root') }>
          <Card className={ cx('auth-card') }>
            <form onSubmit={ ::this.handleReset }>
              <legend>Reset Password</legend>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password" placeholder="New password"
                  className="form-control" autoFocus value={ this.state.password } onChange={ ::this.handleChange }
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="confirm" placeholder="Confirm password"
                  className="form-control" value={ this.state.confirm } onChange={ ::this.handleChange }
                />
              </div>
              <div className="form-group">
               <RaisedButton secondary type="submit" label="Change Password" />
              </div>
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
