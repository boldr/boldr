import React from 'react';
import Link from 'react-router/lib/Link';
import Chip from '../../../../components/md/Chips';
import { Icon, Label } from 'stardust';

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
    <Label image>
        <Icon name="tag" />
          { props.name }
      </Label>
  </Link>);
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
};

export default Tag;
