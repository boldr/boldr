import React, { PropTypes } from 'react';
import { Divider, Header } from 'semantic-ui-react';
// import { Heading } from 'components/';
import PostImage from 'components/PostImage';

const PostContent = props => {
  function createMarkup() { return { __html: props.content }; }
  return (
    <article style={ { overflow: 'hidden' } }>
      { props.feature_image ?
        <PostImage imageSrc={ props.feature_image } /> :
        null
      }
      <div style={ { padding: '2em 1.5em' } }>
       <Header size="large">{ props.title } </Header>

        <Divider />
        <div className="content" style={ { lineHeight: '1.8em' } } dangerouslySetInnerHTML={ createMarkup() } />
      </div>
    </article>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any,
  feature_image: PropTypes.string
};

export default PostContent;
