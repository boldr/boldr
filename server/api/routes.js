import Boom from 'boom';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';
import mediaRouter from './media/media.router';
import tagRouter from './tag/tag.router';
import articleRouter from './article/article.router';
import settingRouter from './setting/setting.router';

export default (app, router, passport) => {
  // ### Server Routes
  app.use('/api/v1', router);
  userRouter(app, router, passport);
  authRouter(app, router, passport);
  articleRouter(app, router, passport);
  mediaRouter(app, router, passport);
  tagRouter(app, router, passport);
  settingRouter(app, router, passport);
  // Use Boom for 404 error handling.
  router.use((req, res, next) => {
    next(Boom.notFound('Looks like you might be lost...'));
  });

  // Wrap other errors with Boom.
  router.use((err, req, res, next) => {
    const { statusCode, payload } = Boom.wrap(err).output;
    res.status(statusCode).json(payload);
    next(err);
  });
};
