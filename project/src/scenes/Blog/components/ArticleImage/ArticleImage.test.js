/* eslint-env mocha */
import React from 'react';
import { mount } from 'enzyme';
import ArticleImage from './ArticleImage';

it('<ArticleImage />, renders the post image without blowing up', () => {
  const wrapper = mount(<ArticleImage />);
  const innerWrapper = wrapper.find('.boldr-article__image-wrapper');
  expect(innerWrapper.is('.boldr-article__image-wrapper')).toBe(true);
});
