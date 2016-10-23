import React, { PropTypes } from 'react';
import { Image, Grid, Card } from 'semantic-ui-react';

import { IconButton } from 'components/Buttons';


const { Column, Row } = Grid;


const File = (props) => {
  function handleclick() {
    const mediaId = props.file.id;
    props.removeMedia(mediaId);
  }

  return (
    <Column key={ props.file.id }>
      <Card>
         <Card.Image
           overlay={ <Card.Header title={ props.file.filename } /> }
         >
          <Image src={ props.file.s3url } alt={ props.file.filename } />
        </Card.Image>
        <Card.Meta>
          <IconButton>edit</IconButton>
          <IconButton onClick={ handleclick }>delete</IconButton>
        </Card.Meta>
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
