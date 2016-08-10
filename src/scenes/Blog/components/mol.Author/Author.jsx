import React from 'react';

const Author = (props) => {
  return (
    <div>
      { props.user.displayName }
    </div>
  );
};

Author.propTypes = {
  displayName: React.PropTypes.string.isRequired
};

export default Author;
