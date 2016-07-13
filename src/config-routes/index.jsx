import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import About from 'scenes/About';
import Blog from 'scenes/Blog';
import Error404 from 'components/pg.Error404';
import CoreLayout from 'components/tpl.CoreLayout';
import Home from 'scenes/Home';
import Login from 'scenes/Auth/Login';
import Profile from 'scenes/Profile';
import Signup from 'scenes/Auth/Signup';
import DashboardRoutes from './dashboard.routes';

export default (store) => {
  return (
      <Route path="/" component={ CoreLayout }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="blog" component={ Blog } />
        <Route path="login" component={ Login } />
        <Route path="profile" component={ Profile } />
        <Route path="signup" component={ Signup } />

        { DashboardRoutes }

        <Route path="*" component={ Error404 } />
      </Route>
  );
};
