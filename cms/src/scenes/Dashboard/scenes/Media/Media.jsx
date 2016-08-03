import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import S3Uploader from 'components/atm.s3Uploader';
import { uploadFiles } from './state/media';

class Media extends Component {
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
  render() {
    return (
       <div>
       <S3Uploader
         signingUrl="/s3/sign"
         accept="image/*"
         onProgress={ S3Uploader.onUploadProgress }
         onError={ S3Uploader.onUploadError }
         onFinish={ ::this.handleFinish }

         uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
         contentDisposition="auto"
         server="http://localhost:9121/api/v1"
       />
       </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    media: state.media
  };
};

export default connect(mapStateToProps, { uploadFiles })(Media);
