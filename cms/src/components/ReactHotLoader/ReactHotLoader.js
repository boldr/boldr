/* @flow */
import React from 'react';

const ReactHotLoader =
        process.env.NODE_ENV === 'development' ?
          require('react-hot-loader').AppContainer :
          ({ children } : { children?: ReactChildren}) => React.Children.only(children);

export default ReactHotLoader;
