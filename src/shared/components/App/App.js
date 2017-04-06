/* @flow */
import '../../styles/main.scss';
import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import uuid from 'uuid';
import classnames from 'classnames';
import { renderRoutes } from 'react-router-config';
import { StyleClasses } from 'boldr-ui';
import Notifications from '../../components/Notification';

const BASE_ELEMENT = StyleClasses.APP;

import routes from '../../routes';

type Props = {
  className: string,
};

export const routeWithSubRoutes = (route: Object) => (
  <Route
    key={ uuid.v4() }
    exact={ route.exact || false }
    path={ route.path }
    render={ props => <route.component
      { ...props } routes={ route.routes }
    /> }
  />
);

class App extends Component {
  static displayName = 'App';
  props: Props;
  render() {
    const { className } = this.props;

    const classes = classnames('boldr', BASE_ELEMENT, className);
    return (
      <div className={ classes }>
        <Switch>
          {routes.map(route => routeWithSubRoutes(route))}
          {renderRoutes(routes)}
        </Switch>
        <Notifications />
      </div>
    );
  }
}

export default App;
