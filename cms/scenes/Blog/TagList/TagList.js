import React, { Component, PropTypes } from 'react';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { Loader, Grid, Col, Row } from '../../../components';
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
        <Grid fluid>
        <Row>
        {
          this.props.tags.isLoading ?
          <Loader /> :
          this.props.tags.posts.map(post =>
            <Col key={ post.id } xs={ 12 } md={ 4 }>
              <TagListCard { ...post } />
            </Col>)
        }
        </Row>
        </Grid>
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
