import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer, {
  DONE_LOADING,
  LOAD_SETTINGS } from '../boldr';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// request = request('http://localhost:8000/api/v1/articles');

describe('Boldr reducer', () => {
  const initialState = {
    isLoading: true,
    siteName: '',
    description: '',
    logo: '',
    siteUrl: '',
    favicon: '',
    analyticsId: '',
    allowRegistration: ''
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle DONE_LOADING', () => {
    expect(
      reducer(undefined, { type: DONE_LOADING })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: false
    }));
  });
});
