import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer, {
  LOAD_MEMBERS_REQUEST,
  LOAD_MEMBERS_SUCCESS,
  LOAD_MEMBERS_FAILURE } from './members';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('members', () => {
  const initialState = {
    isLoading: false,
    members: [],
    error: null,
    selected: {}
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle LOAD_MEMBERS_REQUEST', () => {
    expect(
      reducer(undefined, { type: LOAD_MEMBERS_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle LOAD_MEMBERS_SUCCESS', () => {
    expect(
      reducer(undefined, { type: LOAD_MEMBERS_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      members: undefined
    });
  });

  it('should handle LOAD_MEMBERS_FAILURE', () => {
    expect(
      reducer(undefined, { type: LOAD_MEMBERS_FAILURE })
    ).toEqual({
      ...initialState,
      error: undefined
    });
  });
});
