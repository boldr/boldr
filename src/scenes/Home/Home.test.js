/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Heading, Hero } from '../../components';
import Home from './Home';

describe('<Home />', () => {
  it('renders the <Heading />', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Heading)).to.have.length(1);
  });
  it('renders the <Hero />', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Hero)).to.have.length(1);
  });
});
