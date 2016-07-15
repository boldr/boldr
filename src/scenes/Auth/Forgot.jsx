import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from 'state/modules/user';

class Forgot extends Component {

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
      <div className="container">
        <div className="panel">
          <div className="panel-body">
            <form onSubmit={ ::this.handleForgot }>
              <legend>Forgot Password</legend>
              <div className="form-group">
                <p>Enter your email address below and we'll send you password reset instructions.</p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="form-control"
                  autoFocus value={ this.state.email } onChange={ ::this.handleChange }
                />
              </div>
              <button type="submit" className="btn btn-success">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Forgot.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Forgot);
