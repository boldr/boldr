/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { Heading, Hero, PrimaryHeader } from '../../components';
import Home from './Home';

it('<Home />, renders the <PrimaryHeader />', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(PrimaryHeader).length).toBe(1)
  });

it('<Home />, renders the <Heading />', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(Heading).length).toBe(1)
});

it('<Home />, renders the <Hero />', () => {
  const wrapper = shallow(<Home />);
   expect(wrapper.find(Hero).length).toBe(1)
});
