import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'TextEditor-controls-button';
    if (this.props.active) {
      className += ' TextEditor-controls-active';
    }

    return (
      <FlatButton
        className={ className }
        onMouseDown={ this.onToggle }
        active={ this.props.active }
      >
        { this.props.label }
      </FlatButton>
      );
  }
}
// 
// StyleButton.propTypes = {
//   onToggle: React.PropTypes.function,
//   style: React.PropTypes.boolean,
//   active: React.PropTypes.boolean,
//   label: React.PropTypes.string
// };
