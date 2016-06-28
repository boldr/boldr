import React from 'react';

const del = (props) => {
  return (
    <svg { ...props } width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path d="M7 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H7v10zM18 5h-3l-1-1h-4L9 5H6v2h12V5z" fill="currentColor" />
      </g>
    </svg>
  );
};
export default del;
