/* @flow */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import type { ReactChildren } from '../../types/react';

type Props = {
  store: Object,
  children: ReactChildren,
};
class AppRoot extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  props: Props;

  render() {
    const { store, children } = this.props;
    return (
      <Provider store={ store }>
        { React.Children.only(children) }
      </Provider>
    );
  }
}

export default AppRoot;
