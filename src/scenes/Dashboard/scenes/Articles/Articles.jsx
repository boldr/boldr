import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Link } from 'react-router/es6';
import classNames from 'classnames/bind';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';


import { getPostsListing, selectPost } from '../../../Blog/state/post';
import ArticleListItem from './components/org.ArticleListItem';

import styles from './style.css';

const cx = styles::classNames;
const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={ grey400 } />
  </IconButton>
);

@provideHooks({
  fetch: ({ dispatch }) => dispatch(getPostsListing())
})
class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      artId: ''
    };
  }

  handleArticleClick(postId, artSlug) {
    this.props.dispatch(selectPost(postId));
    this.setState({
      visible: true,
      slug: artSlug
    });
  }
  render() {
    if (!this.props.posts.data.length) {
      return <h1>Perhaps you should create a new post?</h1>;
    }
    // FIXME: Better way to set the article slug state. Currently you have to click on the card...
    const rightIconMenu = (
      <IconMenu iconButtonElement={ iconButtonElement }>
        <MenuItem><Link to={ `/dashboard/articles/editor/${this.state.slug}` }>Edit</Link></MenuItem>
        <MenuItem>Unpublish</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );
    return (
      <div className={ cx('dashboard__row') }>
       <div className="grid__half">
       <Paper zDepth={ 1 } style={ { height: '90vh' } }>

        <List className={ cx('articleList') }>
          { this.props.posts.data.map(post =>
            <ListItem
              key={ post.id }
              leftAvatar={ <Avatar src={ post.featureImage } /> }
              rightIconButton={ rightIconMenu }
              primaryText={   <ArticleListItem article={ post } handleArticleClick={ ::this.handleArticleClick } /> }
              secondaryText={
                <ArticleListItem article={ post } handleArticleClick={ ::this.handleArticleClick } />
              }
            />)
          }
        </List>
        </Paper>
        </div>
        <div className={ cx('article__preview') }>
        <Paper zDepth={ 1 } style={ { height: '90vh' } }>
          {
            this.state.visible ? <span>{ this.props.current.title }</span> : null
          }
          </Paper>
        </div>
       </div>
    );
  }
}

Articles.propTypes = {
  children: PropTypes.node,
  posts: PropTypes.object,
  dispatch: PropTypes.func,
  current: PropTypes.object
};
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading,
    current: state.posts.current
  };
};
export default connect(mapStateToProps)(Articles);
