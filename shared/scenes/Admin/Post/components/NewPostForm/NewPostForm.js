import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import TextField from '../../../../../components/Form/TextField';
import { TextEditor } from '../../../../../components/TextEditor';
import { Col, Row, Heading, S3Uploader, FormGroup } from '../../../../../components/index';
import { uploadPostImage } from '../../../../../state/modules/admin/attachments/actions';

type Props = {
  handleSubmit?: Function,
  reset?: Function,
  submitting?: boolean,
  fields?: Object,
  dispatch: Function,
  pristine?: boolean,
  input?: Object,
  label?: string,
};

@connect()
class NewPostForm extends Component {

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
            <FormGroup>
            <Field
              id="post-title"
              name="title"
              type="text"
              component={ TextField }
              label="Post Title"
            />
          </FormGroup>
            <FormGroup>
            <Field name="tags" type="text"
              id="post-tags"
              helpText="Separate using commas"
              component={ TextField }
              label="Tags"
            />
          </FormGroup>
            <FormGroup>
            <Heading size={ 5 }>Upload a feature image</Heading>

            <S3Uploader
              signingUrl="/s3/sign"
              server="/api/v1"
              accept="image/*"
              onProgress={ S3Uploader.onUploadProgress }
              onError={ S3Uploader.onUploadError }
              onFinish={ this.onUploadFinish }

              uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
              contentDisposition="auto"
            />
            </FormGroup>

          <Field name="content" component={ renderEditor } />
          <FormGroup>
            <Field
              name="excerpt"
              id="post-excerpt"
              type="text"
              component={ TextField }
              label="Excerpt"

            />
          </FormGroup>
          <FormGroup>
            <Heading size={ 6 }>Post Status:</Heading>
            <label>
              <Field id="draft" name="published" component="input" type="radio" value="false" /> Draft</label>
            <label>
              <Field id="published" name="published" component="input" type="radio" value="true" /> Publish
            </label>
          </FormGroup>

        <Button raised primary type="submit" label="Save Post" />
        </form>

        </Col>
      </Row>
    );
  }
}

export default reduxForm({
  form: 'newPostForm',
})(NewPostForm);
