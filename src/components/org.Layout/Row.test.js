import React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'ava';
import Row from './Row';

test('<Row />, should have a class reflective of size props', t => {
  const wrapper = mount(<Row />);
  const wrapperInner =  wrapper.find('.grid__row')
  t.is(wrapperInner.is('.grid__row'), true);
});
