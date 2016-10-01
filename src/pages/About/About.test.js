/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Heading, PrimaryHeader } from '../../components';
import About from './About';

describe('<About />', () => {
  it('renders the <PrimaryHeader />', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(PrimaryHeader)).to.have.length(1);
  });
  it('renders the <Heading />', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(Heading)).to.have.length(1);
  });
});
