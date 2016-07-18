import React from 'react';
import classNames from 'classnames/bind';
import cxN from 'classnames';
import styles from './SocialLogin.css';
import Facebook from './Facebook';
import Google from './Google';

const cx = styles::classNames;

const SocialLogin = () => {
  return (
    <div>
      <a href="/api/v1/auth/facebook"><Facebook height={ 50 } width={ 50 } /></a>
      <a href="/api/v1/auth/google"><Google height={ 50 } width={ 50 } /></a>
    </div>
  );
};

export default SocialLogin;
