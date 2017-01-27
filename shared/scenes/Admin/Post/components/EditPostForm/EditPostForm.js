import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';
import FontIcon from 'react-md/lib/FontIcons';
import Subheader from 'react-md/lib/Subheaders';
import TextField from '../../../../../components/Form/TextField';
import { TextEditor } from '../../../../../components/TextEditor';
import { Col, Row, Heading, S3Uploader } from '../../../../../components/index';
import { uploadPostImage } from '../../../../../state/modules/admin/attachments/actions';

const styled = require('styled-components').default;

type Props = {
  handleSubmit?: Function,
  editing?: boolean,
  reset?: Function,
  isEditing?: boolean,
  submitting?: boolean,
  fields?: Object,
  dispatch: Function,
  pristine?: boolean,
  input?: Object,
  label?: string,
};

@connect()
class EditPostForm extends Component {

  props: Props;

  onUploadFinish = (signResult) => {
    const signUrl = signResult.signedUrl;
    const splitUrl = signUrl.split('?');
    const fileUrl = splitUrl[0];

    const payload = {
      file_name: signResult.file_name,
      original_name: signResult.original_name,
      file_type: signResult.file_type,
      s3_key: signResult.s3_key,
      url: fileUrl,
    };
    this.props.dispatch(uploadPostImage(payload));
  }

  render() {
    const { handleSubmit } = this.props;
    /**
     * wraps the editor component for embedding into redux-form as an input component
     * @param  {object} input
     * @param  {string} label
     * @return {element} BoldrEditor
     */
    const renderEditor = ({ input, label }) => (<TextEditor { ...input } label={ label } />);

    return (
      <Row>
        <Col xs>

          <form onSubmit={ handleSubmit }>
            <Field
              name="title"
              type="text"
              component={ TextField }
              label="Post Title"
            />
            <Field name="feature_image" type="text"
              helpText="URL for your image"
              component={ TextField }
              label="Feature Image"
            />
            <Field name="excerpt"
              id="post-excerpt"
              type="text"
              component={ TextField }
              label="Excerpt"
              helpText="A brief overview or area from your post to highlight"
              rows={ 2 }
              maxRows={ 4 }
            />
            <Row>
              <Col xs={ 12 } md={ 6 }>
                <Heading size={ 4 }>Post Status:</Heading>
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <div>
                  <label>
                    <Field name="published" component="input" type="radio" value="false" /> Draft</label>{ ' ' }
                  <label>
                    <Field name="published" component="input" type="radio" value="true" /> Publish
                  </label>
                </div>
              </Col>
            </Row>

          <Field name="content" component={ renderEditor } />
          <Button raised primary type="submit" label="Save Post" />
        </form>

        </Col>
      </Row>
    );
  }
}

export default reduxForm({
  form: 'editPostForm',
})(EditPostForm);
