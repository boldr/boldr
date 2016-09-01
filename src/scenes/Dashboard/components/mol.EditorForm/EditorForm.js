import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames/bind';

import Radio from '../../../../components/md/SelectionControls/Radio';
import { FlatButton, RaisedButton } from '../../../../components/md/Buttons';
import Paper from '../../../../components/md/Papers';
import { RichTextInput } from '../../../../components/atm.FormComponents/RichText';
import RadioButtonGroup from '../../../../components/atm.FormComponents/RadioButtonGroup';
import TextField from '../../../../components/atm.FormComponents/TextField';

import styles from './style.css';

const cx = styles::classNames;
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
      <section>
      <form onSubmit={ handleSubmit }>
          <div className={ cx('articleEditor__left') }>
            <Paper
              zDepth={ 3 }
              style={ {
                padding: 40
              } }
            >

              <div className={ cx('row') }>
                <Field name="title" type="text" component={ TextField } floatingLabelText="Post Title" />
              </div>
              {
                this.props.editing ?
                null
              :
              <div className={ cx('row') }>
                <Field name="tags" type="text"
                  hintText= "Separate using commas"
                  component={ TextField }
                  floatingLabelText="Tags"
                />
              </div>
            }
              <div className={ cx('row') }>
              <Field name="featureImage" type="text"
                hintText= "URL for your image"
                component={ TextField }
                floatingLabelText="Feature Image"
              />
              </div>
              <div className={ cx('row') }>
                <Field name="excerpt" type="text"
                  component={ TextField } hintText= "A short summary or highlight" floatingLabelText="Excerpt"
                  fullWidth
                  multiLine
                />
              </div>
                <div className={ cx('row') }>
                <Field name="status" component={ RadioButtonGroup }>

                  <Radio
                    value="draft"
                    label="Draft"
                    style={ styles.radioButton }
                  />
                  <Radio
                    value="published"
                    label="Published"
                    style={ styles.radioButton }
                  />
                  <Radio
                    value="archived"
                    label="Archived"
                    style={ styles.radioButton }
                  />
                </Field>
              </div>
              <div style={ { marginTop: '1em' } }>
                <RaisedButton type="submit" secondary label="Publish" style={ style } />
              </div>
            </Paper>
          </div>
          <div className={ cx('articleEditor__right') }>
            <Paper
              zDepth={ 3 }
            >
            <Field name="content" component={ renderRichText } />
            </Paper>
          </div>
      </form>
      </section>
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
