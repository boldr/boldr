import React from 'react';

const RenderField = props => (
  <div>
    <label>{ props.placeholder }</label>
    <div>
      <input { ...props } />
      { props.touched && props.error && <span>{ props.error }</span> }
    </div>
  </div>
);

export default RenderField;
