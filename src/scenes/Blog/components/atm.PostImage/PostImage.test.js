/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PostImage from './PostImage';

describe('<PostImage />', () => {
  it('renders the post image without blowing up', () => {
    const wrapper = shallow(<PostImage />);
    expect(wrapper.find('.postimage')).to.have.length(1);
  });
});
