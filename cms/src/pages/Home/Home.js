import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col, Hero, Heading, PrimaryHeader } from 'components';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { fetchPages } from 'state/dux/page';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchPages())
})
class Home extends Component {
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
          <Hero />
          <Grid fluid>
          <Row>
            <Heading size={ 1 }>Why shouldn't your CMS be a little, Boldr?</Heading>
          </Row>
        </Grid>
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

export default connect(mapStateToProps, { fetchPages })(Home);
