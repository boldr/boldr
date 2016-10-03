import React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'ava';
import Heading from './Heading';

test('<Heading />, renders the heading component with props', t => {
  const wrapper = mount(<Heading size={ 1 } />);
  t.is(wrapper.props().size, 1);
});
