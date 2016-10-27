import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    this.setState({ isVisible: true }); // eslint-disable-line
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isVisible) this.setState({ isVisible: false });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isVisible !== nextProps.isVisible ||
      this.state.isVisible !== nextProps.isVisible;
  }

  getStyle() {
    const opacity = this.state.isVisible & 1; // bitwise and; converts bool to 0 or 1
    return Object.assign({}, defaults.styles.overlay, { opacity });
  }
  render() {
    return <div style={ this.getStyle() } />;
  }
}

Overlay.propTypes = {
  isVisible: bool.isRequired
};
export default Overlay;
