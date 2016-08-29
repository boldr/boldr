import React from 'react';
import Chip from '../../../../components/md/Chips';

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
  return <Chip style={ styles.chip } label={ props.name } />;
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Tag;
