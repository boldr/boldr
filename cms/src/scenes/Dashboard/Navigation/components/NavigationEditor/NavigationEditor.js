import React, { PropTypes } from 'react';
import NavigationForm from '../NavigationForm';

const NavigationEditor = (props) => {
  return (
    <div>
      <NavigationForm initialValues={ props.initialValues } enableReinitialize onSubmit={ props.onFormSubmit } />
    </div>
  );
};

NavigationEditor.propTypes = {
  onFormSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    position: PropTypes.number,
    href: PropTypes.string,
    name: PropTypes.string
  })
};
export default NavigationEditor;
