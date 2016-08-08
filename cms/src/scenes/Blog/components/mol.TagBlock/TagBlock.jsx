import React from 'react';
import Tag from '../atm.Tag';

const TagBlock = (props) => {
  if (!props.tags) {
    return <div>No tags</div>;
  }
  return (
    <div>
    { props.tags.map(tag => <Tag key={ tag.id } name={ tag.name } id={ tag.id } />) }
    </div>
  );
};

TagBlock.propTypes = {
  tags: React.PropTypes.array.isRequired
};

export default TagBlock;
