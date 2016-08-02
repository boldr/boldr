import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';

import S3Uploader from 'components/atm.s3Uploader';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }
  onOpenClick() {

  }
  render() {
    return (
       <div>
       <div>
        <Dropzone ref="dropzone" onDrop={ ::this.onDrop }>
            <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <button type="button" onClick={ ::this.onOpenClick }>
            Open Dropzone
        </button>
        { this.state.files.length > 0 ? <div>
        <h2>Uploading { this.state.files.length } files...</h2>
        <div>{ this.state.files.map((file) => <img src={ file.preview } />) }</div>
        </div> : null }
        </div>
         <S3Uploader
           signingUrl="/s3/sign"
           accept="image/*"
           onProgress={ S3Uploader.onUploadProgress }
           onError={ S3Uploader.onUploadError }
           onFinish={ S3Uploader.onUploadFinish }

           uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
           contentDisposition="auto"
           server="http://localhost:9121/api/v1"
         />
       </div>
    );
  }
}

export default Media;
