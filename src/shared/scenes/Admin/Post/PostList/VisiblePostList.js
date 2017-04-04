import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { toggleTodo } from '../actions';
import { getPublishedPosts } from '../../../../state/modules/blog/posts/reducer';
import PostList from './PostList';

const mapStateToProps = (state, { params }) => ({
  posts: getPublishedPosts(state, params.filter || 'all'),
});

const VisiblePostListing = withRouter(connect(mapStateToProps)(PostList));

export default VisiblePostListing;
