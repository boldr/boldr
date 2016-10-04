/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import { Heading, Hero, PrimaryHeader } from '../../components';
import Home from './Home';

test('<Home />, renders the <PrimaryHeader />', t => {
  const wrapper = shallow(<Home />);
  t.is(wrapper.find(PrimaryHeader).length, 1)
  });

test('<Home />, renders the <Heading />', t => {
  const wrapper = shallow(<Home />);
  t.is(wrapper.find(Heading).length, 1)
});

test('<Home />, renders the <Hero />', t => {
  const wrapper = shallow(<Home />);
   t.is(wrapper.find(Hero).length, 1)
});
