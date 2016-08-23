import React from 'react';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

const Tag = (props) => {
  return <Chip style={ styles.chip }>{ props.name }</Chip>;
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Tag;
