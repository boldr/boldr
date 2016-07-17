import React from 'react';
import Helmet from 'react-helmet';
import { Hero, Heading } from 'components/index';

const Home = () => {
  return (
    <div>
    <Helmet title="Home" />

    <Hero />
    <Heading size={ 1 }>Welcome to the Home. Stay tuned...</Heading>
  </div>
);
};
export default Home;
