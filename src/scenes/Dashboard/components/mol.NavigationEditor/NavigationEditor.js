import React, { PropTypes } from 'react';
import NavigationForm from '../atm.NavigationForm';

const NavigationEditor = (props) => {

  return (
    <div>
      <NavigationForm name={ props.name } position={ props.position } href={ props.href } />
      Name: { props.name }
      Position: { props.position }
      Href: { props.href }
    </div>
  );
};

export default NavigationEditor;
