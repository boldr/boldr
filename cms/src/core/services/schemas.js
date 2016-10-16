import { Schema, arrayOf } from 'normalizr';

const post = new Schema('posts');
const account = new Schema('accounts');
const tag = new Schema('tags');
const attachment = new Schema('attachments');
const profile = new Schema('profiles');
const page = new Schema('pages');

// account.define({
//   profile
// });

post.define({
  tags: arrayOf(tag),
  author: account
});

export { post, tag, account, profile, attachment, page };
