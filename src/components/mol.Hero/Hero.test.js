import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import Hero from './Hero';

test('<Hero />, renders the hero', t => {
  const wrapper = shallow(<Hero />);
  t.is(wrapper.find('.hero').length, 1);
});
