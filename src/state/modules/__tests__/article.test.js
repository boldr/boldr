import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import request from 'supertest';
import reducer, {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL } from '../article';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// request = request('http://localhost:8000/api/v1/articles');

describe('Article reducer', () => {
  const initialState = {
    isLoading: false,
    error: undefined,
    articles: [],
    articleList: [
      {
        title: ''
      }
    ]
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle FETCH_ARTICLES_REQUEST', () => {
    expect(
      reducer(undefined, { type: FETCH_ARTICLES_REQUEST })
    ).toEqual(Object.assign({}, initialState, {
      isLoading: true
    }));
  });
});
