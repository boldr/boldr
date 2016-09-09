import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from '../../../components';
import Toolbar from '../../../components/md/Toolbars';
import FontIcon from '../../../components/md/FontIcons';
import { RaisedButton, FlatButton, IconButton } from '../../../components/md/Buttons';
import Paper from '../../../components/md/Papers';
import S3Uploader from '../../../components/atm.s3Uploader';
import inlineStyles from '../../../core/inlineStyles';
import { API_BASE, S3_SIGNING_URL } from '../../../core/config';
import { uploadFiles, fetchMedia } from './state/media';
import FileView from './components/mol.FileView';

import styles from './style.css';

const cx = styles::classNames;

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
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
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

  render() {
    const actions = [
      <FlatButton
        key={ 1 }
        label="Close"
        primary
        onTouchTap={ this.handleClose }
      />
    ];
    return (
      <div style={ { paddingTop: '50px' } }>
       <Row>
       <Col xs={ 12 }>
       <Toolbar primary title="Upload a file">


          <S3Uploader
            style={ { paddingTop: '10px', paddingLeft: '5px', verticalAlign: 'middle' } }
            signingUrl={ `${S3_SIGNING_URL}` }
            accept="image/*"
            onProgress={ S3Uploader.onUploadProgress }
            onError={ S3Uploader.onUploadError }
            onFinish={ this.handleFinish }

            uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
            contentDisposition="auto"
            server={ `${API_BASE}` }
          />

      </Toolbar>

        <FileView files={ this.props.media.files } />
       </Col>
       </Row>
       </div>
    );
  }
}

Media.propTypes = {
  uploadFiles: React.PropTypes.func,
  media: React.PropTypes.object
};

const mapStateToProps = state => {
  return {
    media: state.media
  };
};

export default connect(mapStateToProps, { uploadFiles })(Media);
