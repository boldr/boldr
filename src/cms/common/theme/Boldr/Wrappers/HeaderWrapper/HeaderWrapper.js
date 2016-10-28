/* @flow */
import React from 'react';
// $FlowIssue
import './style.scss';

const HeaderWrapper = (props: { children: ReactChildren }) => {
  return (
    <header className="boldr__theme-header">
      { props.children }
    </header>
  );
};

export default HeaderWrapper;
