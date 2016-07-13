/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './Home';

describe('<Home />', () => {
  it('renders the h1 tagline', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.tagline')).to.have.length(1);
  });
});
