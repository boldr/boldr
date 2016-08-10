import React from 'react';

const Tag = (props) => {
  return (
    <div>
      { props.name }
    </div>
  );
};

Tag.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Tag;
