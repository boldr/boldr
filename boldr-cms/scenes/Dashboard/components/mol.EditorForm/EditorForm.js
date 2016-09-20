import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Col, Row, BoldrEditor } from 'components';

import Radio from 'components/md/SelectionControls/Radio';
import { FlatButton, RaisedButton } from 'components/md/Buttons';
import Paper from 'components/md/Papers';
import RadioButtonGroup from 'components/atm.FormComponents/RadioButtonGroup';
import renderTextField from 'components/atm.FormComponents/TextField';

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

class EditorForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    const renderLabel = (htmlFor, label) => <label className="sr-only" htmlFor={ htmlFor }>{label}</label>;

    const renderError = (touched, error) => {
      if (touched && error) {
        return <span className="text-danger">{error}</span>;
      }

      return null;
    };

    const renderEditor = ({ input, label, meta: { touched, error } }) => (
      <div className="form-group">
        {renderLabel(input.name, label)}
        <BoldrEditor { ...input } label={ label } />
      </div>
    );
    return (
      <Row>
       <Col xs>
        <form onSubmit={ handleSubmit } style={ { marginTop: '25px' } }>
            <Paper zDepth={ 3 } style={ { padding: 40 } }>
              <Row>
                <Field name="title" type="text" component={ renderTextField } label="Post Title" />
              </Row>
              <Row>
                <Field name="tags" type="text"
                  helpText= "Separate using commas"
                  component={ renderTextField }
                  label="Tags"
                />
              </Row>
              <Row>
              <Field name="feature_image" type="text"
                helpText= "URL for your image"
                component={ renderTextField }
                label="Feature Image"
              />
              </Row>
              <Row>
                <Field name="excerpt" type="text"
                  component={ renderTextField } helpText= "A short summary or highlight" label="Excerpt"
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
              <Field name="content" component={ renderEditor } />
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
