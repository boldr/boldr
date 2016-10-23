import React, { PropTypes } from 'react';
import { Image, Grid, Card } from 'semantic-ui-react';
import { CardMedia, CardTitle, CardActions, CardText } from 'components/md/Cards';
import { IconButton } from 'components/md/Buttons';


const { Column, Row } = Grid;


const File = (props) => {
  function handleclick() {
    const mediaId = props.file.id;
    props.removeMedia(mediaId);
  }

  return (
    <Column key={ props.file.id }>
      <Card>
         <CardMedia
           aspectRatio={ CardMedia.aspect.equal }
           overlay={ <CardTitle title={ props.file.filename } /> }
         >
          <Image src={ props.file.s3url } alt={ props.file.filename } />
        </CardMedia>
        <CardActions centered>
          <IconButton>edit</IconButton>
          <IconButton onClick={ handleclick }>delete</IconButton>
        </CardActions>
      </Card>
    </Column>
  );
};

File.propTypes = {
  removeMedia: PropTypes.func.isRequired,
  file: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    s3url: PropTypes.string.isRequired
  })
};

export default File;
