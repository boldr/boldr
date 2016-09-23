import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'components/md/TextFields';

class NavigationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target });
  }
  render() {
    return (
      <form>

      </form>
    )
  }
}

export default NavigationForm;
