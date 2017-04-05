import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import { normalize, arrayOf, schema } from 'normalizr';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../../actionTypes';
import postsFixture from './__fixtures__/posts.fixture';
import { fetchPosts } from './actions';
import { post as postSchema, arrayOfPost } from './schema';

const mockStore = configureMockStore([thunk]);

describe('Fetching posts', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('creates USERS_SUCCESS when fetching users has been done', () => {
    moxios.stubRequest('/api/v1/posts?include=[author,tags,comments,comments.commenter,comments.replies]', {
      status: 200,
      response: { data: postsFixture },
    });

    const normalizedPosts = normalize(postsFixture, arrayOfPost);
    const expectedActions = [
      { type: FETCH_POSTS_REQUEST },
      {
        type: FETCH_POSTS_SUCCESS,
        payload: normalizedPosts,
      },
    ];
    const store = mockStore({
      all: {},
      ids: [],
      currentPost: {},
      isFetching: false,
    });

    store.dispatch(fetchPosts(axios)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  //
  // test('creates USERS_FAILURE when fail to fetch users', () => {
  //   moxios.stubRequest(API_URL, {
  //     status: 400,
  //     response: { err: errorMessage },
  //   });
  //
  //   const expectedActions = [
  //     { type: USERS_REQUESTING },
  //     {
  //       type: USERS_FAILURE,
  //       err: errorMessage,
  //     },
  //   ];
  //   const store = mockStore({ err: null });
  //
  //   store.dispatch(fetchUsers(axios)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
