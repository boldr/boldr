/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('renders the post\'s sidebar without blowing up', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('.sidebar')).to.have.length(1);
  });
});
