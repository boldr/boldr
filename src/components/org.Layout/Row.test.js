import React from 'react';
import { shallow, mount } from 'enzyme';
import Row from './Row';

describe('<Row />', () => {
  it('should have a class reflective of size props', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).to.have.className('grid__row');
  });
});
