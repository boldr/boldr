/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { Heading, PrimaryHeader } from '../../components';
import About from './About';

it('<About />, renders the <PrimaryHeader />', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.find(PrimaryHeader).length).toBe(1);
});
