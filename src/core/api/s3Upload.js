import latinize from 'latinize';
import unorm from 'unorm';

S3Upload.prototype.server = '';
S3Upload.prototype.signingUrl = '/sign-s3';
S3Upload.prototype.fileElement = null;
S3Upload.prototype.files = null;

S3Upload.prototype.onFinishS3Put = function(signResult, file) {
  return console.log('base.onFinishS3Put()', signResult.publicUrl);
};

S3Upload.prototype.onProgress = function(percent, status, file) {
  return console.log('base.onProgress()', percent, status);
};

S3Upload.prototype.onError = function(status, file) {
  return console.log('base.onError()', status);
};

function S3Upload(options) {
  if (options === null) {
    options = {};
  }
  for (const option in options) {
    if (options.hasOwnProperty(option)) {
      this[option] = options[option];
    }
  }
  const files = this.fileElement ? this.fileElement.files : this.files || [];
  this.handleFileSelect(files);
}

S3Upload.prototype.handleFileSelect = function(files) {
  const result = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    this.onProgress(0, 'Waiting', file);
    result.push(this.uploadFile(file));
  }
  return result;
};

S3Upload.prototype.createCORSRequest = function(method, url) {
  let xhr = new XMLHttpRequest();

  if (xhr.withCredentials !== null) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== 'undefined') {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
};

S3Upload.prototype.executeOnSignedUrl = function(file, callback) {
  const normalizedFileName = unorm.nfc(file.name.replace(/[!\^`><{}\[\]()*#%'"~|&@:;$=+?\s\\\/\x00-\x1F\x7f]+/ig, '_'));
  const fileName = latinize(normalizedFileName);
  let queryString = '?objectName=' + fileName + '&contentType=' + encodeURIComponent(file.type);
  if (this.signingUrlQueryParams) {
    const signingUrlQueryParams = this.signingUrlQueryParams;
    Object.keys(signingUrlQueryParams).forEach(function(key) {
      const val = signingUrlQueryParams[key];
      queryString += '&' + key + '=' + val;
    });
  }
  const xhr = this.createCORSRequest('GET', this.server + this.signingUrl + queryString);
  if (this.signingUrlHeaders) {
    const signingUrlHeaders = this.signingUrlHeaders;
    Object.keys(signingUrlHeaders).forEach(function(key) {
      const val = signingUrlHeaders[key];
      xhr.setRequestHeader(key, val);
    });
  }
  xhr.overrideMimeType && xhr.overrideMimeType('text/plain; charset=x-user-defined');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let result;
      try {
        result = JSON.parse(xhr.responseText);
      } catch (error) {
        this.onError('Invalid response from server', file);
        return false;
      }
      return callback(result);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      return this.onError('Could not contact request signing server. Status = ' + xhr.status, file);
    }
  }.bind(this);
  return xhr.send();
};

S3Upload.prototype.uploadToS3 = function(file, signResult) {
  const xhr = this.createCORSRequest('PUT', signResult.signedUrl);
  if (!xhr) {
    this.onError('CORS not supported', file);
  } else {
    xhr.onload = function() {
      if (xhr.status === 200) {
        this.onProgress(100, 'Upload completed', file);
        return this.onFinishS3Put(signResult, file);
      } else {
        return this.onError('Upload error: ' + xhr.status, file);
      }
    }.bind(this);
    xhr.onerror = function() {
      return this.onError('XHR error', file);
    }.bind(this);
    xhr.upload.onprogress = function(e) {
      let percentLoaded;
      if (e.lengthComputable) {
        percentLoaded = Math.round((e.loaded / e.total) * 100);
        return this.onProgress(percentLoaded, percentLoaded === 100 ? 'Finalizing' : 'Uploading', file);
      }
    }.bind(this);
  }
  xhr.setRequestHeader('Content-Type', file.type);
  if (this.contentDisposition) {
    let disposition = this.contentDisposition;
    if (disposition === 'auto') {
      if (file.type.substr(0, 6) === 'image/') {
        disposition = 'inline';
      } else {
        disposition = 'attachment';
      }
    }
    const normalizedFileName = unorm.nfc(file.name.replace(/[!\^`><{}\[\]()*#%'"~|&@:;$=+?\s\\\/\x00-\x1F\x7f]+/ig, '_'));
    const fileName = latinize(normalizedFileName);
    xhr.setRequestHeader('Content-Disposition', disposition + '; filename=' + fileName);
  }
  if (this.uploadRequestHeaders) {
    const uploadRequestHeaders = this.uploadRequestHeaders;
    Object.keys(uploadRequestHeaders).forEach(function(key) {
      var val = uploadRequestHeaders[key];
      xhr.setRequestHeader(key, val);
    });
  } else {
    xhr.setRequestHeader('x-amz-acl', 'public-read');
  }
  this.httprequest = xhr;
  return xhr.send(file);
};

S3Upload.prototype.uploadFile = function(file) {
  var uploadToS3Callback = this.uploadToS3.bind(this, file);

  if (this.getSignedUrl) return this.getSignedUrl(file, uploadToS3Callback);
  return this.executeOnSignedUrl(file, uploadToS3Callback);
};

S3Upload.prototype.abortUpload = function() {
  this.httprequest && this.httprequest.abort();
};


export default S3Upload;
