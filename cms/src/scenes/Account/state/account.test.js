import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer from './account';
import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  GET_MY_PROFILE_REQUEST,
  GET_MY_PROFILE_SUCCESS,
  GET_MY_PROFILE_FAIL
} from './constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('authReducer', () => {
  const initialState = {
    isLoading: false,
    error: null,
    public: {},
    hydrated: true,
    bio: '',
    birthday: '',
    displayName: '',
    email: '',
    firstName: '',
    gender: '',
    id: '',
    lastName: '',
    location: '',
    picture: '',
    role: '',
    website: ''
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle CREATE_ACCOUNT_REQUEST', () => {
    expect(
      reducer(undefined, { type: CREATE_ACCOUNT_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true,
      hydrated: true
    });
  });

  it('should handle CREATE_ACCOUNT_SUCCESS', () => {
    expect(
      reducer(undefined, { type: CREATE_ACCOUNT_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true
    });
  });
  it('should handle CREATE_ACCOUNT_FAIL', () => {
    expect(
      reducer(undefined, { type: CREATE_ACCOUNT_FAIL })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true,
      error: undefined
    });
  });
  it('should handle CREATE_ACCOUNT_FAIL', () => {
    expect(
      reducer(undefined, { type: CREATE_ACCOUNT_FAIL })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true,
      error: undefined
    });
  });
  it('should handle FORGOT_PASSWORD_REQUEST', () => {
    expect(
      reducer(undefined, { type: FORGOT_PASSWORD_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true,
      hydrated: true
    });
  });
  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    expect(
      reducer(undefined, { type: FORGOT_PASSWORD_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true
    });
  });
  it('should handle FORGOT_PASSWORD_FAIL', () => {
    expect(
      reducer(undefined, { type: FORGOT_PASSWORD_FAIL })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true,
      error: undefined
    });
  });
  it('should handle RESET_PASSWORD_REQUEST', () => {
    expect(
      reducer(undefined, { type: RESET_PASSWORD_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true,
      hydrated: true
    });
  });
  it('should handle RESET_PASSWORD_SUCCESS', () => {
    expect(
      reducer(undefined, { type: RESET_PASSWORD_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true
    });
  });
  it('should handle RESET_PASSWORD_FAIL', () => {
    expect(
      reducer(undefined, { type: RESET_PASSWORD_FAIL })
    ).toEqual({
      ...initialState,
      isLoading: false,
      hydrated: true,
      error: undefined
    });
  });
  it('should handle GET_MY_PROFILE_REQUEST', () => {
    expect(
      reducer(undefined, { type: GET_MY_PROFILE_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true,
      hydrated: true
    });
  });
});
