import { Schema, arrayOf } from 'normalizr';

export const article = new Schema('articles');
export const tag = new Schema('tags');
export const user = new Schema('users');

article.define({
  tags: arrayOf(tag)
});
