import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import DashboardLayout from 'scenes/Dashboard/components/tpl.DashboardLayout';
import Dashboard from 'scenes/Dashboard/Dashboard';
import Articles from 'scenes/Dashboard/Articles';
import ArticlesList from 'scenes/Dashboard/components/pg.ArticleList';
import ArticleEditor from 'scenes/Dashboard/components/pg.ArticleEditor';
import Users from 'scenes/Dashboard/Users';
import Media from 'scenes/Dashboard/Media';
import Pages from 'scenes/Dashboard/Pages';
import Settings from 'scenes/Dashboard/Settings';
import Setup from 'scenes/Dashboard/components/pg.Setup';

export default (
  <Route path="/dashboard" component={ DashboardLayout }>
    <IndexRoute component={ Dashboard } />
    <Route path="articles" component={ Articles }>
      <IndexRoute component={ ArticlesList } />
      <Route path="editor" component={ ArticleEditor } />
    </Route>
    <Route path="media" component={ Media } />
    <Route path="pages" component={ Pages } />
    <Route path="settings" component={ Settings } />
    <Route path="setup" component={ Setup } />
    <Route path="users" component={ Users } />
  </Route>
);
