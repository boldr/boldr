/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Hero from './Hero';

describe('<Hero />', () => {
  it('renders the hero', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.find('.hero')).to.have.length(1);
  });
});
