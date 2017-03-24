/* @flow */
import React from 'react';
import Icon from '../Icon';

type Props = {
  href: ?String,
  size: Number,
};

const Twitter = (props: Props) => {
  if (props.href) {
    return (
      <a href={ props.href }>
        <Icon kind="twitter" color="#1c3050" size={ props.size } />
      </a>
    );
  } else {
    return <Icon kind="twitter" color="#1c3050" size={ props.size } />;
  }
};

Twitter.defaultProps = {
  size: 24,
};
export default Twitter;
