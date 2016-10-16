/* @flow */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { Header, Icon } from 'semantic-ui-react';
import PostListing from 'scenes/Blog/PostListing';
import { Grid, Row, Hero, PrimaryHeader, Footer } from '../../components';
import { fetchPagesIfNeeded } from '../../state/dux/page';

type Props = {
  loaded: Boolean,
  pages: Object,
  entities: Object,
  dispatch: Function
}

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPagesIfNeeded())
})
class Home extends Component {
  props: Props;
  render() {
    if (!this.props.loaded) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <div>
        <Helmet title={ this.props.pages.entities.home.name } />
          <PrimaryHeader />
          {
            this.props.pages.entities.home.layout.showHero ?
            <Hero /> :
            null
          }
          <Grid fluid>
          <Row style={ { padding: '25px' } }>
          <Header as="h1">
            <Icon name="newspaper" />
            <Header.Content>
              Recent posts
            </Header.Content>
          </Header>

          </Row>
          {
            this.props.pages.entities.home.layout.showPosts ?
            <PostListing /> :
            null
          }
        </Grid>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    loaded: state.pages.loaded
  };
};

export default connect(mapStateToProps, { fetchPagesIfNeeded })(Home);
