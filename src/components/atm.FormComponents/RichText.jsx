import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import { Field } from 'redux-form';

const FORMAT = 'html';

// inner control needed to map from the editor to reduxForm
class WrapRte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorValue: RichTextEditor.createEmptyValue(),
      htmlValue: ''
    };
  }

  // load
  componentWillMount() {
    this.setStateFromProps(null, this.props);
  }

  componentWillReceiveProps(newProps) {
    this.setStateFromProps(this.props, newProps);
  }

  setStateFromProps(oldProps, newProps) { // eslint-disable-line
    if (oldProps !== null && oldProps.value === newProps.value) {
      return;
    }

    if (this.state.htmlValue === newProps.value) {
      return;
    }

    this.setState({
      editorValue: this.state.editorValue.setContentFromString(newProps.value, FORMAT)
    });
  }

  // onChange
  onEditorChange(editorValue) {
    const htmlValue = editorValue.toString(FORMAT);

    this.setState({ editorValue, htmlValue });
    setTimeout(() => this.props.onChange(htmlValue), 1);
  }

  // render
  render() {
    const otherProps = _.omit(this.props, ['value', 'onChange']);
    return (
      <RichTextEditor
        { ...otherProps }
        value={ ::this.state.editorValue }
        onChange={ ::this.onEditorChange }
      />
    );
  }
}

WrapRte.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

// bring it together
const renderControl = ({ input }) =>
(

    <WrapRte
      value={ input.value }
      onChange={ input.onChange }
      className="rte"
    />

);

renderControl.propTypes = {
  input: PropTypes.object.isRequired
};

// ReduxForm control
export const RichTextInput = ({ name, label }) => // eslint-disable-line
(
  <Field
    name={ name }
    label={ label }
    component={ renderControl }
  />
);

RichTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
