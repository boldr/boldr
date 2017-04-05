import '../../styles/main.scss';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import classnames from 'classnames';
import { renderRoutes } from 'react-router-config';

import { StyleClasses } from '../../theme/theme';

import Notifications from '../../components/Notification';

const BASE_ELEMENT = StyleClasses.APP;


import routes from '../../routes';
// Use it when sub routes are added to any route it'll work
export const routeWithSubRoutes = route => (
  <Route
    key={ _.uniqueId() }
    exact={ route.exact || false }
    path={ route.path }
    render={ props => (
      // Pass the sub-routes down to keep nesting
      <route.component { ...props } routes={ route.routes } />
    ) }
  />
);
export default () => {
  return (
    <div>
      <Switch>
        {
          routes.map(route => routeWithSubRoutes(route))
        }
        {renderRoutes(routes)}
      </Switch>
      <Notifications />
    </div>
  );
};
