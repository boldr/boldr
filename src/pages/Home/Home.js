import React from 'react';
import Helmet from 'react-helmet';

import { Grid, Row, Col, Hero, Heading, Header } from 'components';

const Home = () => {
  return (
    <div>
      <Helmet title="Home" />
        <Header theme="dark" />
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
