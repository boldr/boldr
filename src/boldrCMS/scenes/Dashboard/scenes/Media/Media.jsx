import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import classNames from 'classnames/bind';

import S3Uploader from '../../../../components/atm.s3Uploader';
import inlineStyles from '../../../../core/inlineStyles';
import { API_BASE, S3_SIGNING_URL } from '../../../../core/config';
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
        label="Close"
        primary
        onTouchTap={ this.handleClose }
      />
    ];
    return (
       <div>
       <Paper>
       <Toolbar style={ inlineStyles.toolbar }>
        <ToolbarGroup firstChild>
          <DropDownMenu value={ this.state.value } onChange={ this.handleChange }>
            <MenuItem value={ 1 } primaryText="All Files" />
            <MenuItem value={ 2 } primaryText="All Photos" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Upload a file" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
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
          <IconMenu
            iconButtonElement={
              <IconButton touch>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>

        <FileView files={ this.props.media.files } />
       </Paper>
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
