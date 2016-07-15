import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer, {
LOGIN_USER_REQUEST,
LOGIN_USER_SUCCESS,
LOGIN_USER_FAIL,
SIGNUP_USER_REQUEST,
SIGNUP_USER_SUCCESS,
SIGNUP_USER_FAIL,
LOGOUT_USER,
LOGOUT_USER_SUCCESS,
LOGOUT_USER_FAIL, manualLogin } from '../user';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// request = request('http://localhost:8000/api/v1/articles');


describe('Users reducer', () => {
  const initialState = {
    isLoading: false,
    authenticated: false,
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    role: '',
    token: undefined,
    hydrated: true
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle LOGIN_USER_REQUEST', () => {
    expect(
      reducer(undefined, { type: LOGIN_USER_REQUEST })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: true,
      authenticated: false,
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      role: '',
      token: undefined,
      hydrated: true
    }));
  });

  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      reducer(undefined, { type: LOGIN_USER_SUCCESS })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false,
      authenticated: true,
      token: undefined,
      role: '',
      hydrated: true
    }));
  });

  it('should handle LOGIN_USER_FAIL', () => {
    const message = 'Success';
    expect(
      reducer(undefined, { type: LOGIN_USER_FAIL, message })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false,
      authenticated: false
    }));
  });

  it('should handle SIGNUP_USER_REQUEST', () => {
    expect(
      reducer(undefined, { type: SIGNUP_USER_REQUEST })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: true
    }));
  });

  it('should handle SIGNUP_USER_SUCCESS', () => {
    expect(
      reducer(undefined, { type: SIGNUP_USER_SUCCESS })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false,
      authenticated: true
    }));
  });

  it('should handle SIGNUP_USER_FAIL', () => {
    const message = 'Oops! Something went wrong!';
    expect(
      reducer(undefined, { type: SIGNUP_USER_FAIL, message })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false,
      authenticated: false
    }));
  });

  it('should handle LOGOUT_USER', () => {
    expect(
      reducer(undefined, { type: LOGOUT_USER })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: true
    }));
  });

  it('should handle LOGOUT_USER_SUCCESS', () => {
    expect(
      reducer(undefined, { type: LOGOUT_USER_SUCCESS })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false,
      authenticated: false
    }));
  });

  it('should handle LOGOUT_USER_FAIL', () => {
    expect(
      reducer(undefined, { type: LOGOUT_USER_FAIL })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false,
      authenticated: true
    }));
  });
});
