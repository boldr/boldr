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
import S3Uploader from 'components/atm.s3Uploader';
import { uploadFiles, fetchMedia } from './state/media';
import FileView from './components/mol.FileView';

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
       <Toolbar>
        <ToolbarGroup firstChild>
          <DropDownMenu value={ this.state.value } onChange={ this.handleChange }>
            <MenuItem value={ 1 } primaryText="All Files" />
            <MenuItem value={ 2 } primaryText="All Photos" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton onClick={ ::this.handleOpen } label="Upload File" primary />
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
      <Dialog
        title="Upload a file"
        actions={ actions }
        modal={ false }
        open={ this.state.open }
        onRequestClose={ this.handleClose }
      >
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
        </Dialog>
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
