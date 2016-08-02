import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames/bind';
import { Hero, Heading } from 'components/index';
import styles from './Home.css';

const cx = styles::classNames;

const Home = () => {
  return (
    <div>
    <Helmet title="Home" />

    <Hero />
    <div>
    <section className={ cx('root') }>
      <Heading size={ 1 }>Welcome to the Home. Stay tuned...</Heading>
    </section>
    </div>
  </div>
);
};
export default Home;