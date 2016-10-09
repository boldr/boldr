import { Schema, arrayOf } from 'normalizr';

const user = new Schema('users');
const tag = new Schema('tags');
const post = new Schema('posts');

post.define({
  tags: arrayOf(tag),
  author: user
});

export { post };
export { tag };
export { user };
