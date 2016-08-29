import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Link } from 'react-router/es6';
import classNames from 'classnames/bind';

import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Paper from '../../../components/md/Papers';
import {
  DataTable, TableHeader, TableBody, TableRow, TableColumn, EditDialogColumn
} from '../../../components/md/DataTables';
import { inlineStyles } from '../../../core';
import { fetchPostsIfNeeded, selectPost } from '../../Blog/state/post';
import ArticleListItem from '../components/mol.ArticleListItem';

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
class ArticleList extends Component {
  static propTypes = {
    children: PropTypes.element,
    posts: PropTypes.object,
    dispatch: PropTypes.func,
    current: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      artId: ''
    };
    this.handleArticleClick = this.handleArticleClick.bind(this);
  }

  handleArticleClick(postId) {
    console.log('clicked ', postId);
  }

  render() {
    if (!this.props.posts.data.length) {
      return <h1>Perhaps you should create a new post?</h1>;
    }

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
       <DataTable className="complex-table">
       <TableHeader>
          <TableRow>
             <TableColumn>
               Title
             </TableColumn>
             <TableColumn>
               Status
             </TableColumn>
             <TableColumn>
               Date
             </TableColumn>
             <TableColumn>
               Action
             </TableColumn>
           </TableRow>
         </TableHeader>
         <TableBody>
         {this.props.posts.data.map((post, index) => (
           <ArticleListItem
             article={ post }
             key={ post.id }
             sortRank={ index }
             content={ post.content }
             title={ post.title }
             slug={ post.slug }
             handleArticleClick={ this.handleArticleClick }
           />
         ))}
         </TableBody>
        </DataTable>

        </Paper>
        </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    isLoading: state.posts.isLoading,
    current: state.posts.current
  };
};
export default connect(mapStateToProps)(ArticleList);
