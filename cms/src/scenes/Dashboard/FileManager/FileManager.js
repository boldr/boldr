/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { S3Uploader, Row, Col } from 'components/index';
import { API_PREFIX, S3_SIGNING_URL } from 'core/config';
import { uploadFiles, fetchMedia, deleteMedia } from 'state/dux/attachment';
import FileView from 'components/FileView';

type Props = {
  handleFinish: () => void,
  attachments: Object,
  deleteMedia: () => void,
  uploadFiles: () => void
};

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchMedia())
})
class FileManager extends Component {
  constructor(props) {
    super(props);
    (this: any).handleRemoveMedia = this.handleRemoveMedia.bind(this);
    (this: any).handleFinish = this.handleFinish.bind(this);
  }
  props: Props;

  handleChange = (event, index, value) => this.setState({ value });

  handleFinish(signResult) {
    const signUrl = signResult.signedUrl;
    const splitUrl = signUrl.split('?');
    const fileUrl = splitUrl[0];
    const payload = {
      file_name: signResult.file_name,
      original_name: signResult.original_name,
      file_type: signResult.file_type,
      s3_key: signResult.s3_key,
      url: fileUrl
    };
    this.props.uploadFiles(payload);
  }

  handleRemoveMedia(mediaId) {
    this.props.deleteMedia(mediaId);
  }

  render() {
    return (
      <div style={ { paddingTop: '50px' } }>
       <Row>
         <Col xs={ 12 }>
            <S3Uploader
              signingUrl={ `${S3_SIGNING_URL}` }
              accept="image/*"
              onProgress={ S3Uploader.onUploadProgress }
              onError={ S3Uploader.onUploadError }
              onFinish={ this.handleFinish }

              uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
              contentDisposition="auto"
              server={ `${API_PREFIX}` }
            />
            <FileView files={ this.props.attachments.files } removeMedia={ this.handleRemoveMedia } />
         </Col>
       </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    attachments: state.attachments
  };
};

export default connect(mapStateToProps, { uploadFiles, deleteMedia })(FileManager);
