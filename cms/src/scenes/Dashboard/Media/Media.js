/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { S3Uploader, Grid, Row, Col } from 'components';
import { API_BASE, S3_SIGNING_URL } from 'core/api/helpers';
import { uploadFiles, fetchMedia, deleteMedia } from 'state/dux/media';
import FileView from 'components/FileView';

type Props = {
  handleFinish: () => void,
  media: Object,
  deleteMedia: () => void,
  uploadFiles: () => void
}

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchMedia())
})
class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    };
    this.handleRemoveMedia = this.handleRemoveMedia.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }
  props: Props;

  handleChange = (event, index, value) => this.setState({ value });

  handleFinish(signResult) {
    const signUrl = signResult.signedUrl;
    const splitUrl = signUrl.split('?');
    const url = splitUrl[0];
    const payload = {
      filename: signResult.filename,
      s3url: url
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
              server={ `${API_BASE}` }
            />
            <FileView files={ this.props.media.files } removeMedia={ this.handleRemoveMedia } />
         </Col>
       </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    media: state.media,
    isLoading: state.media.isLoading
  };
};

export default connect(mapStateToProps, { uploadFiles, deleteMedia })(Media);
