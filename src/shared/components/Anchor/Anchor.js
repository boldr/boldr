/* @flow */
import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

type Props = {
  href: string,
  className: string,
  title: string,
  children: any,
  onClick: () => void,
};

class Anchor extends Component {
  props: Props;
  render() {
    const { href, className, title, onClick } = this.props;
    return <NavLink to={ href } className={ className } onClick={ onClick } title={ title }>{title}</NavLink>;
  }
}

export default Anchor;
