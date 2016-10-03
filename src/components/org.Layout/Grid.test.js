import React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'ava';
import Grid from './Grid';

test('<Grid />, should have a class name', t => {
    const wrapper = mount(<Grid />);
    const wrapperInner = wrapper.find('.grid')
    t.is(wrapperInner.is('.grid'), true);
});

test('<Grid />, should accept a fluid property', t => {
    const wrapper = mount(<Grid fluid />);
    const wrapperInner = wrapper.find('.grid--fluid')
    t.is(wrapperInner.is('.grid--fluid'), true);
  });
