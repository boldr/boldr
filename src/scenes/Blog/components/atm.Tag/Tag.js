import React from 'react';
import Link from 'react-router/lib/Link';
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
  return (
  <Link to={ `/blog/tags/${props.id}` }>
    <Chip style={ styles.chip } label={ props.name } />
  </Link>);
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
};

export default Tag;
