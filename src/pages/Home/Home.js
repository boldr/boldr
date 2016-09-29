import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col, Hero, Heading, PrimaryHeader } from 'components';

const Home = () => {
  return (
    <div>
      <Helmet title="Home" />
        <PrimaryHeader />
        <Hero />
        <Grid fluid>
        <Row>
          <Heading size={ 1 }>Welcome to the Home. Stay tuned...</Heading>
        </Row>
      </Grid>
    </div>
  );
};

export default Home;
