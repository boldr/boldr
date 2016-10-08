import React from 'react';
import Avatar from 'components/md/Avatars';
import { Heading } from 'components';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
};
const Author = (props) => {
  return (
    <div style={ styles.wrapper }>
      <Avatar src={ props.avatar_url } />
      <Heading size={ 3 }> { props.display_name }</Heading>
    </div>
  );
};

Author.propTypes = {
  display_name: React.PropTypes.string.isRequired,
  avatar_url: React.PropTypes.string
};

export default Author;
