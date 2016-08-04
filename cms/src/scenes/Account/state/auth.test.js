import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer, { doLogin } from './auth';
import { LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT_USER } from './constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('authReducer', () => {
  const initialState = {
    loaded: false,
    isLoading: false,
    error: null,
    role: null,
    token: null,
    hydrated: true
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(
      reducer(undefined, { type: LOGIN_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true,
      isAuthenticated: false,
      loaded: false
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(undefined, { type: LOGIN_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      loaded: true,
      isAuthenticated: true,
      token: undefined,
      role: undefined,
      hydrated: true
    });
  });

  it('should handle LOGIN_FAIL', () => {
    expect(
      reducer(undefined, { type: LOGIN_FAIL })
    ).toEqual({
      ...initialState,
      isLoading: false,
      loaded: false,
      isAuthenticated: false,
      hydrated: true,
      error: undefined
    });
  });
});
