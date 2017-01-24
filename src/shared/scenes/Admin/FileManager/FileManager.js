/* @flow */
import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Button from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';
import { S3Uploader, Row, Col, Modal } from '../../../components/index';
import FileView from './components/FileView';

type Props = {
  onUploadFinish: () => void,
  attachments: Object,
  handleRemoveMedia: () => void,
  closeModal: () => void,
  openModal: () => void,
  ui: Object,
  selectFile: () => void,
};

const FileManager = (props: Props) => {
  const { openModal, closeModal, attachments, handleRemoveMedia, onUploadFinish, ui } = props;
  return (
    <div>
      <Toolbar>
        <ToolbarGroup firstChild>
          <Button onClick={ openModal } label="Upload File" raised primary />
          <IconMenu iconButtonElement={
              <Button icon><FontIcon>expand_more</FontIcon></Button>
            }
          >
          <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
     <Row>
       <Col xs={ 12 }>
          <FileView files={ attachments.files } removeMedia={ handleRemoveMedia } selectFile={ props.selectFile } />
       </Col>
     </Row>
     <Modal open={ ui.modal } onClose={ closeModal } title="Upload an image">
       <S3Uploader
         signingUrl="/s3/sign"
         server="/api/v1"
         accept="image/*"
         onProgress={ S3Uploader.onUploadProgress }
         onError={ S3Uploader.onUploadError }
         onFinish={ onUploadFinish }

         uploadRequestHeaders={ { 'x-amz-acl': 'public-read' } }
         contentDisposition="auto"
       />
     </Modal>
    </div>
  );
};

export default FileManager;
