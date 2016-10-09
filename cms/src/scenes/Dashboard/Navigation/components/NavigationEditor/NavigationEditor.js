export type Props = {
  onFormSubmit?: Function,
  initialValues?: {
    position?: number,
    href?: string,
    name?: string,
  },
};

import React, { PropTypes } from 'react';
import NavigationForm from '../NavigationForm';

const NavigationEditor = (props) => {
  return (
    <div>
      <NavigationForm initialValues={ props.initialValues } enableReinitialize onSubmit={ props.onFormSubmit } />
    </div>
  );
};

export default NavigationEditor;
