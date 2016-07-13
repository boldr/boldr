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
// import DashboardRoutes from './dashboard.routes';
import DashboardLayout from 'scenes/Dashboard/components/tpl.DashboardLayout';
import Dashboard from 'scenes/Dashboard/Dashboard';
import Articles from 'scenes/Dashboard/Articles';
import ArticlesList from 'scenes/Dashboard/components/pg.ArticleList';
import ArticleEditor from 'scenes/Dashboard/components/pg.ArticleEditor';
import Collections from 'scenes/Dashboard/Collections';
import Users from 'scenes/Dashboard/Users';
import Media from 'scenes/Dashboard/Media';
import Pages from 'scenes/Dashboard/Pages';
import Settings from 'scenes/Dashboard/Settings';
import Setup from 'scenes/Dashboard/components/pg.Setup';
import RequireAuth from './RequireAuth';

export default (store) => {
  return (
      <Route path="/" component={ CoreLayout }>
        <IndexRoute component={ Home } />
        <Route path="about" component={ About } />
        <Route path="blog" component={ Blog } />
        <Route path="login" component={ Login } />
        <Route path="profile" component={ RequireAuth(Profile) } />
        <Route path="signup" component={ Signup } />
        <Route path="/dashboard" component={ DashboardLayout }>
          <IndexRoute component={ Dashboard } />
          <Route path="articles" component={ Articles }>
            <IndexRoute component={ ArticlesList } />
            <Route path="editor" component={ ArticleEditor } />
          </Route>
          <Route path="collections" component={ Collections } />
          <Route path="media" component={ Media } />
          <Route path="pages" component={ Pages } />
          <Route path="settings" component={ Settings } />
          <Route path="setup" component={ Setup } />
          <Route path="users" component={ Users } />
        </Route>
        <Route path="*" component={ Error404 } />
      </Route>
  );
};
