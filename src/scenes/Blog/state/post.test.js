import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer from './post';
import {
FETCH_POSTS_REQUEST,
FETCH_POSTS_SUCCESS,
FETCH_POSTS_FAILURE,
LOAD_POST_REQUEST,
LOAD_POST_SUCCESS,
LOAD_POST_FAILURE } from './constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// request = request('http://localhost:8000/api/v1/articles');


describe('postReducer', () => {
  const initialState = {
    isLoading: false,
    error: null,
    pagination: {},
    data: [],
    selectedPost: {},
    current: {},
    isEditing: false
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle FETCH_POSTS_REQUEST', () => {
    expect(
      reducer(undefined, { type: FETCH_POSTS_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle FETCH_POSTS_SUCCESS', () => {
    expect(
      reducer(undefined, { type: FETCH_POSTS_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      data: undefined,
      pagination: undefined
    });
  });

  it('should handle FETCH_POSTS_FAILURE', () => {
    expect(
      reducer(undefined, { type: FETCH_POSTS_FAILURE })
    ).toEqual({
      ...initialState,
      error: undefined
    });
  });
  it('should handle LOAD_POST_REQUEST', () => {
    expect(
      reducer(undefined, { type: LOAD_POST_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle LOAD_POST_SUCCESS', () => {
    expect(
      reducer(undefined, { type: LOAD_POST_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      selectedPost: undefined
    });
  });

  it('should handle FETCH_POSTS_FAILURE', () => {
    expect(
      reducer(undefined, { type: LOAD_POST_FAILURE })
    ).toEqual({
      ...initialState,
      error: undefined
    });
  });
});
