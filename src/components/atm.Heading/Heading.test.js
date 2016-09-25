/* eslint-env mocha */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Heading from './Heading';

describe('<Heading />', () => {
  it('renders the heading component with props', () => {
    const wrapper = mount(<Heading size={ 1 } />);
    expect(wrapper.props().size).to.equal(1);
  });

});
