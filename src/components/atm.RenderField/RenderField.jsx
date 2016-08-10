import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const RenderField = ({ input, label, multiLine, fullWidth, hintText, type, meta: { touched, error } }) => (
  <div>
    <TextField
      { ...input }
      floatingLabelText={ label }
      type={ type }
      errorText={ error }
      fullWidth={ fullWidth }
      hintText={ hintText }
      multiLine={ multiLine }
    />
  </div>
);

RenderField.propTypes = {
  input: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  multiLine: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  meta: PropTypes.object
};
