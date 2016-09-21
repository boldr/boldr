import React, { PropTypes } from 'react';
import TextField from '../md/TextFields';
import inlineStyles from 'theme/inlineStyles';

const renderLabel = (htmlFor, label) => <label style={ inlineStyles.textField } htmlFor={ htmlFor }>{label}</label>;

const renderTextField = ({ input, type, label }) => (
  <div className="form-group">
    { renderLabel(input.name, label) }
    <TextField
      { ...input }
      className="md-text-field"
      type={ type }
      floatingLabel
      lineDirection="right"
      label={ label }
    />
  </div>
);

renderTextField.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
export { renderLabel };
export default renderTextField;
