import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'components/md/Papers';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'components/md/DataTables';
import { Row } from 'components';
import { getPostsArray } from 'state/dux/post';
import ArticleListItem from '../components/mol.ArticleListItem';

class ArticleList extends Component {
  static propTypes = {
    children: PropTypes.element,
    posts: PropTypes.object,
    dispatch: PropTypes.func,
    current: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.handleArticleClick = this.handleArticleClick.bind(this);
  }

  handleArticleClick(postId) {
    console.log('clicked ', postId);
  }

  render() {
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
          this.props.allPosts.map((post, index) => (
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    allPosts: getPostsArray(state)
  };
};
export default connect(mapStateToProps)(ArticleList);
