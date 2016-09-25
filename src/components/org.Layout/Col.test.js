import React from 'react';
import { shallow, mount } from 'enzyme';
import Col from './Col';

describe('<Col />', () => {
  it('should have a class reflective of size props', () => {
    const wrapper = shallow(<Col xs={ 12 } />);
    expect(wrapper).to.have.className('grid__col--xs-12');
  });
});
