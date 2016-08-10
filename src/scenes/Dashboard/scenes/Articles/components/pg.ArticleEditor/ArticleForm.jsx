import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Editor, EditorState } from 'draft-js';
import classNames from 'classnames/bind';
import Paper from 'material-ui/Paper';
import TextEditor from 'components/org.Editor/Editor/Editor';

// import * as articleActionCreators from '../../state/article';
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

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = (value) => {
      this.setState({
        value
      });
    };

    this.getMarkup = (markup) => {
      this.setState({
        markup
      });
    };
    this.renderInnerMarkup = () => this._renderInnerMarkup();
    this.renderReturnedContent = (value) => this._renderReturnedContent(value);

    this.state = {
      tags: [],
      open: false,
      files: []
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSelectChange = (event, index, value) => this.setState({ value });
  handleChange(tags) {
    this.setState({
      tags
    });
  }
  render() {
    const { fields: { title, tags, excerpt, content, status, featureImage }, handleSubmit } = this.props;
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
                <TextField hintText= "Give it a name"
                  floatingLabelText="Title"
                  fullWidth
                  errorText = { title.touched && title.error }
                  { ...title }
                />
              </div>
              {
                this.props.editing ?
                null
              :
              <div className={ cx('row') }>
                <TextField hintText= "Separate using commas"
                  floatingLabelText="Tags"
                  fullWidth
                  errorText = { tags.touched && tags.error }
                  { ...tags }
                />
              </div>
            }
              <div className={ cx('row') }>
                <TextField hintText= "An image to go with your article"
                  floatingLabelText="Feature Image"
                  fullWidth
                  errorText = { featureImage.touched && featureImage.error }
                  { ...featureImage }
                />
              </div>
              <div className={ cx('row') }>
                <TextField hintText= "A short summary or highlight"
                  floatingLabelText="Excerpt"
                  fullWidth
                  multiLine
                  rows={ 2 }
                  errorText = { excerpt.touched && excerpt.error }
                  { ...excerpt }
                />
              </div>
                <div className={ cx('row') }>
                 <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" { ...status }>
                  <RadioButton
                    value="draft"
                    label="Draft"
                    style={ styles.radioButton }
                  />
                  <RadioButton
                    value="published"
                    label="Published"
                    style={ styles.radioButton }
                  />
                  <RadioButton
                    value="archived"
                    label="Archived"
                    style={ styles.radioButton }
                  />
                </RadioButtonGroup>
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
              <TextEditor { ...content }
                handleUpdate={ (value) => {
                  content.onChange(value);
                } }
              />
            </Paper>
          </div>
      </form>
      </section>
      );
  }
}

export default reduxForm({
  form: 'NewArticleForm',
  fields: ['title', 'tags', 'excerpt', 'content', 'featureImage', 'status']
})(NewArticleForm);

NewArticleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object,
  editing: PropTypes.bool
};
