import React, { Component, PropTypes } from 'react';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import { Loader } from '../../../components';
import TagListCard from './TagListCard';
import { requestPostTags } from './actions';

@provideHooks({
  fetch: ({ dispatch, params: { id } }) => dispatch(requestPostTags(id))
})
class TagList extends Component {
  static propTypes = {
    tags: PropTypes.object.isRequired
  }
  render() {
    return (
      <div>
        <Flex
          align="center"
          gutter={ 2 }
          p={ 2 }
          justify="space-between"
          wrap
        >
        {
          this.props.tags.isLoading ?
          <Loader /> :
          this.props.tags.posts.map(post =>
            <Box key={ post.id } sm={ 12 } md={ 4 } p={ 2 }>
              <TagListCard { ...post } />
            </Box>)
        }
        </Flex>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    isLoading: state.tags.isLoading,
    posts: state.tags.posts
  };
};

export default connect(mapStateToProps)(TagList);
