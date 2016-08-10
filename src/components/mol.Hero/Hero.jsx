import React, { Component } from 'react';
import classNames from 'classnames/bind';

const cx = styles::classNames;

import styles from './style.css';

const Hero = props => (
  <div className={ cx('hero') }>
    <div className="wrap">
       <h1 className={ cx('heroTag') }>
         Bold<span style={ { color: 'rgb(229, 0, 80)' } }>r</span>
       </h1>
       <h3> </h3>
     </div>
  </div>
);

export default Hero;
