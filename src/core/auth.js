import React from 'react';
import { routeActions } from 'react-router-redux';

import AuthWrapper from '../components/hoc.Authenticated';

const UserIsAuthenticated = AuthWrapper({
  authSelector: state => state.auth,
  redirectAction: routeActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const UserIsAdmin = AuthWrapper({
  authSelector: state => state.auth,
  redirectAction: routeActions.replace,
  failureRedirectPath: '/',
  wrapperDisplayName: 'UserIsAdmin',
  predicate: auth => auth.role,
  allowRedirectBack: false
});

export { UserIsAdmin, UserIsAuthenticated };
