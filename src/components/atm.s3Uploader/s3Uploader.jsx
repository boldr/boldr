/* eslint-disable react/prefer-es6-class */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import S3Upload from '../../config/api/s3Upload';

const S3Uploader = React.createClass({
  propTypes: {
    signingUrl: React.PropTypes.string,
    getSignedUrl: React.PropTypes.func,
    onProgress: React.PropTypes.func,
    onFinish: React.PropTypes.func,
    onError: React.PropTypes.func,
    signingUrlHeaders: React.PropTypes.object,
    signingUrlQueryParams: React.PropTypes.object,
    uploadRequestHeaders: React.PropTypes.object,
    contentDisposition: React.PropTypes.string,
    server: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      onProgress(percent, message) {
        console.log(`Upload progress: ${percent} % ${message}`);
      },
      onFinish(signResult) {
        console.log(`Upload finished: ${signResult.publicUrl}`);
      },
      onError(message) {
        console.log(`Upload error: ${message}`);
      },
      server: ''
    };
  },
  getInputProps() {
    const temporaryProps = Object.assign({}, this.props, { type: 'file', onChange: this.uploadFile });
    const inputProps = {};

    const invalidProps = Object.keys(S3Uploader.propTypes);

    for (const key in temporaryProps) {
      if (temporaryProps.hasOwnProperty(key) && invalidProps.indexOf(key) === -1) {
        inputProps[key] = temporaryProps[key];
      }
    }

    return inputProps;
  },
  uploadFile() {
    new S3Upload({ // eslint-disable-line
      fileElement: ReactDOM.findDOMNode(this),
      signingUrl: this.props.signingUrl,
      getSignedUrl: this.props.getSignedUrl,
      onProgress: this.props.onProgress,
      onFinishS3Put: this.props.onFinish,
      onError: this.props.onError,
      signingUrlHeaders: this.props.signingUrlHeaders,
      signingUrlQueryParams: this.props.signingUrlQueryParams,
      uploadRequestHeaders: this.props.uploadRequestHeaders,
      contentDisposition: this.props.contentDisposition,
      server: this.props.server
    });
  },
  clear() {
    clearInputFile(ReactDOM.findDOMNode(this));
  },

  render() {
    return React.DOM.input(this.getInputProps());
  }


});

// http://stackoverflow.com/a/24608023/194065
function clearInputFile(f) {
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
module.exports = S3Uploader;
