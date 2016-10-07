// @flow
import React, { PropTypes } from 'react';

type Props = {
  size: any,
  color: String,
  align: String,
  children?: any,
  top: String,
  bottom: String,
  override: String,
  textDeco: String
};

const Heading = (props: Props) => {
  const tagName = `h${props.size}`;
  const className = `heading heading--${props.size}`;
  const style = {
    color: props.color,
    textAlign: props.align,
    paddingTop: props.top,
    paddingBottom: props.bottom,
    fontSize: props.override,
    textDecoration: props.textDeco
  };
  return React.createElement(tagName, { className, style }, props.children);
};

export default Heading;
