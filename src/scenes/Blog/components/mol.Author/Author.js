import React from 'react';
import Avatar from '../../../../components/md/Avatars';
import { Heading } from '../../../../components';

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
      <Avatar src={ props.avatarUrl } />
      <Heading size={ 3 }> { props.displayName }</Heading>
    </div>
  );
};

Author.propTypes = {
  displayName: React.PropTypes.string.isRequired,
  avatarUrl: React.PropTypes.string
};

export default Author;
