import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Col, Row, BoldrEditor } from 'components';
import inlineStyles from 'theme/inlineStyles';
import Radio from 'components/md/SelectionControls/Radio';
import { FlatButton, RaisedButton } from 'components/md/Buttons';
import Paper from 'components/md/Papers';
import RadioButtonGroup from 'components/atm.FormComponents/RadioButtonGroup';
import renderTextField, { renderLabel } from 'components/atm.FormComponents/TextField';

const EditorForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  /**
   * wraps the editor component for embedding into redux-form as an input component
   * @param  {object} input
   * @param  {string} label
   * @return {element} BoldrEditor
   */
  const renderEditor = ({ input, label }) => (
    <div>
      { renderLabel(input.name, label) }
      <BoldrEditor { ...input } label={ label } />
    </div>
  );

  return (
    <Row>
      <Col xs>
        <form onSubmit={ handleSubmit }>
          <Paper zDepth={ 3 } style={ { padding: '1em' } }>
            <Field name="title" type="text" component={ renderTextField } label="Post Title" />
            <Row>
              <Col xs={ 12 } md={ 6 }>
                <Field name="tags" type="text"
                  helpText= "Separate using commas"
                  component={ renderTextField }
                  label="Tags"
                />
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <Field name="feature_image" type="text"
                  helpText= "URL for your image"
                  component={ renderTextField }
                  label="Feature Image"
                />
              </Col>
            </Row>
            <Field name="excerpt" type="text"
              component={ renderTextField } helpText= "A short summary or highlight" label="Excerpt"
            />
            <div style={ { marginTop: '50px' } }>
              <Field name="content" component={ renderEditor } />
            </div>
            <Row>
              <Col xs={ 12 } md={ 6 }>
                <RaisedButton type="submit" secondary label="Publish" style={ { marginTop: '20px' } } />
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <Field name="status" component={ RadioButtonGroup }>
                  <Radio
                    value="draft"
                    label="Draft"
                    style={ inlineStyles.radio }
                  />
                  <Radio
                    value="published"
                    label="Published"
                    style={ inlineStyles.radio }
                  />
                  <Radio
                    value="archived"
                    label="Archived"
                    style={ inlineStyles.radio }
                  />
                </Field>
              </Col>
            </Row>
          </Paper>
        </form>
      </Col>
    </Row>
  );
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
