import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Link } from 'react-router/es6';

import Paper from '../../../components/md/Papers';
import {
  DataTable, TableHeader, TableBody, TableRow, TableColumn, EditDialogColumn
} from '../../../components/md/DataTables';
import { inlineStyles } from '../../../theme';
import { fetchPostsIfNeeded, selectPost } from '../../Blog/state/post';
import ArticleListItem from '../components/mol.ArticleListItem';
import { Grid, Col, Row } from '../../../components';

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
    if (!this.props.posts.results.length) {
      return <h1>Perhaps you should create a new post?</h1>;
    }

    return (
      <Row>
       <Paper zDepth={ 1 } style={ { height: '90vh' } }>

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
        {
          this.props.posts.results.map((post, index) => (
           <ArticleListItem
             article={ post }
             key={ post.id }
             sortRank={ index }
             content={ post.content }
             title={ post.title }
             slug={ post.slug }
             handleArticleClick={ this.handleArticleClick }
           />
         ))
        }
         </TableBody>
        </DataTable>

        </Paper>
      </Row>
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
