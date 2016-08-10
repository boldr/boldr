import { Schema, arrayOf } from 'normalizr';

export const post = new Schema('posts');
export const arrayOfPosts = arrayOf(post);
