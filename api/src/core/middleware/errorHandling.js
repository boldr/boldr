import RespondError from '../../lib/respond/respondError';

export default app => {
  app.use((err, req, res, next) => {
    if (!(err instanceof RespondError)) {
      const apiError = new RespondError(err.message, err.status, err.isPublic);
      return next(apiError);
    }
    return next(err);
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new RespondError('API not found', 404);
    return next(err);
  });


  app.use((err, req, res, next) =>		// eslint-disable-line no-unused-vars
    res.status(err.status).json({
      message: err.isPublic ? err.message : err.status,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
  );
};
