import React from 'react';
import './style.scss';

const HeaderWrapper = (props) => {
  return (
    <header className="boldr__theme-header">
      { props.children }
    </header>
  );
};

export default HeaderWrapper;
