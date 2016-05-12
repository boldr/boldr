import versionRouter from './version/version.router';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';
import articleRouter from './article/article.router';
import tagRouter from './tag/tag.router';
import uploadRouter from './upload/upload.router';

export default [
  versionRouter,
  articleRouter,
  userRouter,
  authRouter,
  tagRouter,
  uploadRouter
];
