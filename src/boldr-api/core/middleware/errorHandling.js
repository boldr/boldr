import RespondError from '../../lib/respond/respondError';

export default app => {
  app.use((err, req, res, next) => {
    if (!(err instanceof RespondError)) {
      const apiError = new RespondError(err.message, err.status, err.isPublic);
      return next(apiError);
    }
    if (err && err.name === 'ValidationError') {
      return next(new RespondError(`There was a problem validating your data ${err.message}`, 400, true));
    }
    if (!err.status && err.name && err.name.includes('Sequelize')) {
      return next(new RespondError(`There was a problem validating your data ${err.message}, ${err.errors}`, 422, true));
    }
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
}
