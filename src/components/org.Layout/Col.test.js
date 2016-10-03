import React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'ava';
import Col from './Col';

test('<Col />, should have a class reflective of size props', t => {
  const wrapper = mount(<Col xs={ 12 } />);
  const wrapperClass = wrapper.find('.grid__col--xs-12')
  t.is(wrapperClass.is('.grid__col--xs-12'), true);
});
