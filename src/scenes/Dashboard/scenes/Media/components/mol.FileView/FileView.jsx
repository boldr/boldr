import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24
  }
};

const FileView = props => {
  return (
    <div style={ styles.root }>
   <GridList
     cellHeight={ 200 }
     style={ styles.gridList }
   >
     <Subheader>December</Subheader>
     { props.files.map((file) => (
       <GridTile
         key={ file.id }
         title={ file.filename }
         subtitle={ <span>by <b>{ file.ownerId }</b></span> }
         actionIcon={ <IconButton><StarBorder color="white" /></IconButton> }
       >
         <img src={ file.s3url } />
       </GridTile>
     )) }
   </GridList>
 </div>
  );
};

export default FileView;
