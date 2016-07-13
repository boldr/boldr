import { provideHooks } from 'redial';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadArticles, FETCH_ARTICLES_REQUEST } from 'state/modules/article';
import BlogPost from './components/org.BlogPost';
@provideHooks({
  fetch: ({ dispatch }) => dispatch(loadArticles())
})
class Blog extends Component {

  render() {
    return (
      <div>
        Blog
        {
          this.props.article.isLoading ? <h1>Loading ...</h1> :
            <h2>aasf</h2> }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.article,
    isLoading: state.article.isLoading
  };
};


export default connect(mapStateToProps)(Blog);
