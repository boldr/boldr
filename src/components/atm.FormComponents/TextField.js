import React, { PropTypes } from 'react';
import { Form, Input } from 'stardust';
import inlineStyles from 'theme/inlineStyles';

const renderLabel = (htmlFor, label) => <label style={ inlineStyles.textField } htmlFor={ htmlFor }>{label}</label>;

const renderTextField = ({ input, type, label }) => (
    <Form.Input { ...input } type={ type } placeholder={ label } />
);

renderTextField.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
export { renderLabel };
export default renderTextField;
