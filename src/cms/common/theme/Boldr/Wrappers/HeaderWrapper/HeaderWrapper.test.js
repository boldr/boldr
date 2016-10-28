import React from 'react';
import { shallow } from 'enzyme';
import HeaderWrapper from './HeaderWrapper';

describe('<HeaderWrapper />', () => {
  it('It sets the correct className', () => {
    const wrapper = shallow(<HeaderWrapper />);
    expect(wrapper.find('.boldr__theme-header').length).toBe(1);
  });
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <HeaderWrapper>
        <div className="unique" />
      </HeaderWrapper>
    );
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
