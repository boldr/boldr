import React from 'react';

const cross = (props) => {
  return (
    <svg { ...props } width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M11 6h2v12h-2z" />
        <path d="M18 11v2H6v-2z" />
      </g>
    </svg>
  );
};
export default cross;
