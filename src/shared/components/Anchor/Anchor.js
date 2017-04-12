/* @flow */
import React, { Component } from 'react';
import classnames from 'classnames';
import NavLink from 'react-router-dom/NavLink';

type Props = {
  href: string,
  className: string,
  title: string,
  children: any,
  onClick: () => void,
};

const Anchor = (props: Props) => {
  const { href, className, title, onClick } = props;
  return <NavLink to={ href } className="boldrui-link" onClick={ onClick } title={ title }>{title}</NavLink>;
};

export default Anchor;
