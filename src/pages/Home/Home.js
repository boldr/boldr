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
          <Heading size={ 1 }>Why shouldn't your CMS be a little, Boldr?</Heading>
        </Row>
      </Grid>
    </div>
  );
};

export default Home;
