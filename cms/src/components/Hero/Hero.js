import React, { Component } from 'react';
import classNames from 'classnames/bind';
import BoldrLogo from '../BoldrLogo';
import styles from './style.css';

const cx = styles::classNames;

const Hero = props => (
  <div className={ cx('hero') }>
    <div className="wrap">
    <BoldrLogo />
       <h1 className={ cx('heroTag') }>
         Bold<span style={ { color: 'rgb(229, 0, 80)' } }>r</span>
       </h1>
     </div>
  </div>
);

export default Hero;
