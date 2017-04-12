import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Anchor from './Anchor';

describe('<Anchor />', () => {
  const wrapper = shallow(<Anchor />);
  it('renders snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
