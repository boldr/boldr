/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import { Heading, PrimaryHeader } from '../../components';
import About from './About';

test('<About />, renders the <PrimaryHeader />', t => {
  const wrapper = shallow(<About />);
  t.is(wrapper.find(PrimaryHeader).length, 1);
});
