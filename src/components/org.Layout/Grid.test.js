import React from 'react';
import { shallow, mount } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  it('should have a class name', () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper).to.have.className('grid');
  });
  it('should accept a fluid property', () => {
    const wrapper = shallow(<Grid fluid />);
    expect(wrapper).to.have.className('grid--fluid');
  });
});
