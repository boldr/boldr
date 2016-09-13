import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { Grid, Col, Row } from 'components';
import Radio from '../../../../components/md/SelectionControls/Radio';
import { FlatButton, RaisedButton } from '../../../../components/md/Buttons';
import Paper from '../../../../components/md/Papers';
import { RichTextInput } from '../../../../components/atm.FormComponents/RichText';
import RadioButtonGroup from '../../../../components/atm.FormComponents/RadioButtonGroup';
import TextField from '../../../../components/atm.FormComponents/TextField';

const style = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  margin: 12,
  radioButton: {
    marginBottom: 16
  }
};
const radioStyle = {
  display: 'inline',
  marginTop: '20px',
  float: 'right'
};


export const renderRichText = (field) =>
  <RichTextInput key={ field.name } name={ field.name } label={ field.name } />;

class EditorForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = (value) => {
      this.setState({
        value
      });
    };


    this.renderReturnedContent = (value) => this._renderReturnedContent(value);

    this.state = {
      tags: [],
      open: false,
      files: []
    };
  }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const { editorState } = this.state;
    return (
      <Row>
       <Col xs>
      <form onSubmit={ handleSubmit } style={ { marginTop: '25px' } }>

            <Paper
              zDepth={ 3 }
              style={ {
                padding: 40
              } }
            >

              <Row>
                <Field name="title" type="text" component={ TextField } label="Post Title" />
              </Row>
              {
                this.props.editing ?
                null
              :
              <Row>
                <Field name="tags" type="text"
                  helpText= "Separate using commas"
                  component={ TextField }
                  label="Tags"
                />
              </Row>
            }
              <Row>
              <Field name="feature_image" type="text"
                helpText= "URL for your image"
                component={ TextField }
                label="Feature Image"
              />
              </Row>
              <Row>
                <Field name="excerpt" type="text"
                  component={ TextField } helpText= "A short summary or highlight" label="Excerpt"
                  fullWidth
                  multiLine
                />
              </Row>
                <Row>
                <Field name="status" component={ RadioButtonGroup }>

                  <Radio
                    value="draft"
                    label="Draft"
                    style={ radioStyle }
                  />
                  <Radio
                    value="published"
                    label="Published"
                    style={ radioStyle }
                  />
                  <Radio
                    value="archived"
                    label="Archived"
                    style={ radioStyle }
                  />
                </Field>
              </Row>
              <Field name="content" component={ renderRichText } />
              <div style={ { marginTop: '1em' } }>
                <RaisedButton type="submit" secondary label="Publish" style={ style } />
              </div>
            </Paper>
      </form>
       </Col>
      </Row>
      );
  }
}

export default reduxForm({
  form: 'EditorForm'
})(EditorForm);

EditorForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editing: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  pristine: PropTypes.bool
};
