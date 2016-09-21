import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { S3Uploader, Grid, Row, Col } from 'components';
import Toolbar from '../../../components/md/Toolbars';
import FontIcon from '../../../components/md/FontIcons';
import { RaisedButton, FlatButton, IconButton, FloatingButton } from '../../../components/md/Buttons';
import Paper from '../../../components/md/Papers';
import inlineStyles from '../../../theme/inlineStyles';
import FileView from '../components/mol.FileView';
import { API_BASE, S3_SIGNING_URL } from 'core/config';
import { uploadFiles, fetchMedia } from 'state/dux/media';


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
