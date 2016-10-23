import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Heading, PrimaryHeader } from '../../components';

const About = () => {
  return (
    <div>
      <Helmet title="About" />
        <PrimaryHeader />
        <Grid fluid>
        <Row>
          <Heading size={ 1 }>Welcome to the Home. Stay tuned...</Heading>
        </Row>
      </Grid>
    </div>
  );
};

export default About;
