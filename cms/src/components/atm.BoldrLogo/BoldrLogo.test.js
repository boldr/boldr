import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import BoldrLogo from './BoldrLogo';

test('<BoldrLogo /> renders the logo svg component', t => {
    const wrapper = shallow(<BoldrLogo />);
    t.is(wrapper.find('#boldrlogo').length, 1);
});
