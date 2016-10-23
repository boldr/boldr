/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Row } from 'components/index';
import { Image, Item, Header, Segment, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { changePostStatus, fetchPostsIfNeeded, getPosts, deletePost } from 'state/dux/post';
import PostListItem from './components/PostListItem';

export type Props = {
  children?: React$Element<*>,
  posts: Object,
  dispatch?: Function,
  deletePost: Function,
  current?: Object
};
@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class PostList extends Component {
  constructor(props: Props) {
    super(props);
    (this: any).handleArticleClick = this.handleArticleClick.bind(this);
    (this: any).handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  props: Props;
  // postId is a uuid, not an integer
  handleArticleClick(postId: string): void {

  }
  handleDeleteClick(postId: string): void {
    this.props.deletePost(postId);
  }
  render() {
    return (
      <div>
      <Menu attached="top">
          <Menu.Menu position="right">
            <div className="ui right aligned category search item">
              <Icon name="grid layout" />
            </div>
          </Menu.Menu>
        </Menu>
       <Segment>
       <Item.Group>
        {
          this.props.posts.map((post, index) => (
           <PostListItem
             article={ post }
             created_at={ post.created_at }
             key={ post.slug }
             sortRank={ index }
             content={ post.content }
             title={ post.title }
             slug={ post.slug }
             handleDeleteClick={ this.handleDeleteClick }
             handleArticleClick={ this.handleArticleClick }
           />
         ))
        }
        </Item.Group>
      </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    isLoading: state.posts.isLoading
  };
};
export default connect(mapStateToProps, { fetchPostsIfNeeded, deletePost })(PostList);
