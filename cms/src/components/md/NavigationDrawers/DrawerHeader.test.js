import React from 'react';
import { findDOMNode } from 'react-dom';
import {
  renderIntoDocument,
} from 'react-addons-test-utils';
import DrawerHeader from './DrawerHeader';

describe('DrawerHeader', () => {
  it('allows for a className to be passed it', () => {
    const props = {
      title: 'test',
      className: 'test',
      closeDrawer: jest.fn(),
      persistent: false,
      temporary: false,
    };

    const header = renderIntoDocument(<DrawerHeader {...props} />);
    const headerNode = findDOMNode(header);
    expect(headerNode.className).toContain(props.className);
  });

  it('renders a title when the title prop is defined.', () => {
    const props = {
      closeDrawer: jest.fn(),
      title: 'Hello, World!',
      persistent: false,
      temporary: false,
    };

    const header = renderIntoDocument(<DrawerHeader {...props} />);
    const headerNode = findDOMNode(header);
    expect(headerNode.textContent).toBe(props.title);
  });
});
