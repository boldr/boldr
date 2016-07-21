import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import FacebookIcon from './FacebookIcon';
import GoogleIcon from './GoogleIcon';

const cx = styles::classNames;

const SocialLogin = () => {
  return (
    <div>
      <a href="/api/v1/auth/facebook"><FacebookIcon height={ 50 } width={ 50 } /></a>
      <a href="/api/v1/auth/google"><GoogleIcon height={ 50 } width={ 50 } /></a>
    </div>
  );
};

export default SocialLogin;
