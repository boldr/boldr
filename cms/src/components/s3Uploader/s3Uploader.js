/* eslint-disable react/prefer-es6-class */
import React, { Component, PropTypes } from 'react';
import S3Upload from '../../core/services/s3Upload';
import FileUpload from '../md/FileInputs/FileUpload';

class S3Uploader extends Component {
  static propTypes = {
    signingUrl: PropTypes.string,
    preprocess: PropTypes.func,
    getSignedUrl: PropTypes.func,
    onProgress: PropTypes.func,
    onFinish: PropTypes.func,
    onError: PropTypes.func,
    signingUrlHeaders: PropTypes.object,
    signingUrlQueryParams: PropTypes.object,
    uploadRequestHeaders: PropTypes.object,
    contentDisposition: PropTypes.string,
    server: PropTypes.string
  };
  constructor(props) {
    super(props);

    this.uploadFile = this.uploadFile.bind(this);
    this.preprocess = this.preprocess.bind(this);
    this.onFinish = this.onFinish.bind(this);
  }
  onProgress(percent, message) {
    console.log(`Upload progress: ${percent} % ${message}`);
  }
  onFinish(signResult) {
    console.log(signResult);
    this.props.onFinish(signResult);
    this.setState({
      file: signResult.publicUrl
    });
  }
  onError(message) {
    console.log(`Upload error: ${message}`);
  }

  preprocess(file, next) {
    console.log(`Pre-process: ${file.name}`);
    next(file);
  }
  _setFile = (file) => {
    this.setState({ file });
  };
  uploadFile(event) {
    new S3Upload({ // eslint-disable-line
      fileElement: event,
      signingUrl: this.props.signingUrl || '/s3/sign',
      getSignedUrl: this.props.getSignedUrl,
      preprocess: this.preprocess,
      onProgress: this.onProgress,
      onFinishS3Put: this.onFinish,
      onError: this.props.onError,
      signingUrlHeaders: this.props.signingUrlHeaders,
      signingUrlQueryParams: this.props.signingUrlQueryParams,
      uploadRequestHeaders: this.props.uploadRequestHeaders,
      contentDisposition: this.props.contentDisposition,
      server: this.props.server
    });
  }
  // http://stackoverflow.com/a/24608023/194065
  clearInputFile(f) {
    if (f.value) {
      try {
        f.value = ''; // for IE11, latest Chrome/Firefox/Opera...
      } catch (err) { console.log(err);}
      if (f.value) { // for IE5 ~ IE10
        const form = document.createElement('form');
        const parentNode = f.parentNode;
        const ref = f.nextSibling;
        form.appendChild(f);
        form.reset();
        parentNode.insertBefore(f, ref);
      }
    }
  }
  clear(event) {
    this.clearInputFile(event.target);
  }

  render() {
    return (
      <FileUpload
        label="Select a file"
        onChange={ this.uploadFile }
        accept="image/*"
        primary
      />
    );
  }
}

export default S3Uploader;
