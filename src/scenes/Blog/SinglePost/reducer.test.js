import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE } from '../state/constants';
import reducer from './reducer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// request = request('http://localhost:8000/api/v1/articles');


describe('currentPost', () => {
  const initialState = {
    isEditing: false,
    isLoading: false,
    error: null,
    title: '',
    slug: '',
    id: '',
    featureImage: '',
    content: '',
    user: {},
    tags: []
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
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
      error: null,
      title: undefined,
      slug: undefined,
      id: undefined,
      featureImage: undefined,
      content: undefined,
      user: undefined,
      tags: undefined
    });
  });

  it('should handle LOAD_POST_FAILURE', () => {
    expect(
      reducer(undefined, { type: LOAD_POST_FAILURE })
    ).toEqual({
      ...initialState,
      error: undefined
    });
  });
});
