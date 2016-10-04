/* eslint-env mocha */
import React from 'react';
import { mount } from 'enzyme';
import test from 'ava';
import PostImage from './PostImage';

test('<PostImage />, renders the post image without blowing up', t => {
  const wrapper = mount(<PostImage />);
  const innerWrapper = wrapper.find('.postimage')
  t.is(innerWrapper.is('.postimage'), true);
});
