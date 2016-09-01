import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames/bind';
import { Flex, Box } from 'reflexbox';
import { Hero, Heading, Header } from '../../components/index';
import styles from './Home.css';

const cx = styles::classNames;

const Home = () => {
  return (
    <div>
      <Helmet title="Home" />
        <Header theme="dark" />
        <Hero />
      <Flex align="center" justify="space-between">
        <Heading size={ 1 }>Welcome to the Home. Stay tuned...</Heading>
      </Flex>
    </div>
  );
};

export default Home;
