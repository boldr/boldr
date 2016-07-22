/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BoldrLogo from './BoldrLogo';

describe('<BoldrLogo />', () => {
  it('renders the logo svg component', () => {
    const wrapper = shallow(<BoldrLogo />);
    expect(wrapper.find('#boldrlogo')).to.have.length(1);
  });
});
