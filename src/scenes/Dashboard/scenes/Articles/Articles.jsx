import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Link } from 'react-router/es6';
import classNames from 'classnames/bind';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { inlineStyles } from '../../../../core';

import { fetchPostsIfNeeded, selectPost } from '../../../Blog/state/post';
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
  fetch: ({ dispatch }) => dispatch(fetchPostsIfNeeded())
})
class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      artId: ''
    };
    this.handleArticleClick = this.handleArticleClick.bind(this);
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

    const newButton = (
      <Link to="/dashboard/articles/editor">
        <FloatingActionButton style={ inlineStyles.floatButton } disableTouchRipple primary>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    );
    return (
      <div className={ cx('dashboard__row') }>

       <Paper zDepth={ 1 } style={ { height: '90vh' } }>
       {newButton}
       <Table fixedHeader fixedFooter>
         <TableHeader adjustForCheckbox={ false } displaySelectAll={ false }>
           <TableRow selectable={ false }>
             <TableHeaderColumn colSpan="1" style={ inlineStyles.headerColumn }>
               ID
             </TableHeaderColumn>
             <TableHeaderColumn colSpan="4" style={ inlineStyles.headerColumn }>
               Title
             </TableHeaderColumn>
             <TableHeaderColumn colSpan="1" style={ inlineStyles.headerColumn }>
               Status
             </TableHeaderColumn>
             <TableHeaderColumn colSpan="2" style={ inlineStyles.headerColumn }>
               Date
             </TableHeaderColumn>
             <TableHeaderColumn colSpan="3" style={ inlineStyles.headerColumn }>
               Action
             </TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody displayRowCheckbox={ false }>
           {this.props.posts.data.map((post, index) => (
             <ArticleListItem
               article={ post }
               key={ post.id }
               sortRank={ index }
               content={ post.content }
               title={ post.title }
               slug={ post.slug }
               handleToggle={ this.handleArticleClick }
             />
           ))}
         </TableBody>
        </Table>

        </Paper>
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
