import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Editor, EditorState } from 'draft-js';

import Paper from 'material-ui/Paper';
// import BoldrEditor from 'components/org.BoldrEditor';
import TextEditor from 'components/org.Editor/Editor/Editor';

const style = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  margin: 12
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
      tags: []
    };
  }
  handleChange(tags) {
    this.setState({
      tags
    });
  }
  render() {
    const { fields: { title, tags, content, status }, handleSubmit } = this.props;
    const { editorState } = this.state;
    return (
      <form onSubmit={ handleSubmit }>
        <div className="row">
          <div className="col-md-3">
            <Paper
              zDepth={ 3 }
              style={ {
                padding: 40
              } }
            >

              <div className="row">
                <TextField hintText= "Give it a name"
                  floatingLabelText="Title"
                  fullWidth
                  errorText = { title.touched && title.error }
                  { ...title }
                />
              </div>
              <div className="row">
                <TextField hintText= "Tag your post"
                  floatingLabelText="Tags"
                  fullWidth
                  errorText = { tags.touched && tags.error }
                  { ...tags }
                />
              </div>

              <div className="row">
                <label>
                  <input type="radio" { ...status } value="draft" checked={ status.value === 'draft' } /> Draft
                </label>
                <label>
                  <input type="radio" { ...status } value="published" checked={ status.value === 'published' } /> Published
                </label>
              </div>
              <div>
                <RaisedButton type="submit" secondary label="Publish" style={ style } />
              </div>
            </Paper>
          </div>
          <div className="col-md-9">
            <Paper
              zDepth={ 3 }
            >
              <TextEditor placeholder="Tell your story" { ...content }
                handleUpdate={ (value) => {
                  content.onChange(value);
                } }
              />
            </Paper>
          </div>
        </div>
      </form>
      );
  }
}

export default reduxForm({
  form: 'NewArticleForm',
  fields: ['title', 'tags', 'content', 'status']
})(NewArticleForm);

NewArticleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
