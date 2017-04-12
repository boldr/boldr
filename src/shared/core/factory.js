import React from 'react';
import Anchor from '../components/Anchor';
import Page from '../pages/Page';

export const promises = {};

const modules = {};

// Polyfill require.ensure
if (typeof require.ensure !== 'function') {
  require.ensure = function(d, c) {
    // eslint-disable-line
    c(require);
  };
}

export default {
  code: () => {
    const key = 'code';
    if (modules[key]) return modules[key];
    if (!promises[key]) {
      promises[key] = import('../pages/Page').then(Page => {
        modules[key] = Page.default;
        return Page.default;
      });
    }
    return promises[key];
  },
  // tabs: () => {
  //   const key = 'tabs';
  //   if (modules[key]) return modules[key];
  //   if (!promises[key]) {
  //     promises[key] = new Promise(resolve => {
  //       require.ensure(
  //         [],
  //         require => {
  //           const TabsComponent = require('./components/tabs/TabsComponent').default;
  //           modules[key] = TabsComponent;
  //           resolve(TabsComponent);
  //         },
  //         'tabs',
  //       );
  //     });
  //   }
  //   return promises[key];
  // },
  5: () => Anchor,
  1: () => Page,
  default: () => () => <div />,
};
