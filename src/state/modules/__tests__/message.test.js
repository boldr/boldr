import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer, {
  DISMISS_MESSAGE,
  LOGIN_SUCCESS_USER,
  SIGNUP_SUCCESS_USER
 } from '../message';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// request = request('http://localhost:8000/api/v1/articles');

describe('Article reducer', () => {
  const initialState = {
    message: '',
    type: 'SUCCESS'
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle LOGIN_SUCCESS_USER', () => {
    expect(
      reducer(undefined, { type: LOGIN_SUCCESS_USER })
    ).toEqual(Object.assign({}, initialState, {
      message: undefined,
      type: 'SUCCESS'
    }));
  });
});
