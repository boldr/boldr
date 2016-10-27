import React from 'react';

const ContentWrapper = (props) => {
  return (
    <article>
      { props.children }
    </article>
  );
};

export default ContentWrapper;
