import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer from './blog';
import {
FETCH_POSTS_REQUEST,
FETCH_POSTS_SUCCESS,
FETCH_POSTS_FAIL,
FETCH_POST_REQUEST,
FETCH_POST_SUCCESS,
FETCH_POST_FAIL } from './constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// request = request('http://localhost:8000/api/v1/articles');


describe('blogReducer', () => {
  const initialState = {
    isLoading: false,
    error: null,
    posts: [],
    selectedPost: {}
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
      posts: undefined
    });
  });

  it('should handle FETCH_POSTS_FAIL', () => {
    expect(
      reducer(undefined, { type: FETCH_POSTS_FAIL })
    ).toEqual({
      ...initialState,
      error: undefined
    });
  });
  it('should handle FETCH_POST_REQUEST', () => {
    expect(
      reducer(undefined, { type: FETCH_POST_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle FETCH_POST_SUCCESS', () => {
    expect(
      reducer(undefined, { type: FETCH_POST_SUCCESS })
    ).toEqual({
      ...initialState,
      isLoading: false,
      selectedPost: undefined
    });
  });

  it('should handle FETCH_POSTS_FAIL', () => {
    expect(
      reducer(undefined, { type: FETCH_POST_FAIL })
    ).toEqual({
      ...initialState,
      error: undefined
    });
  });
});
