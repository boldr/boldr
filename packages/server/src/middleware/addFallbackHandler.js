/* eslint-disable no-magic-numbers, max-params, no-unused-vars */
export default function addFallbackHandler(app) {
  // Handle 404 errors.
  // Note: the react application middleware hands 404 paths, but it is good to
  // have this backup for paths not handled by the universal middleware. For
  // example you may bind a /api path to express.
  app.use((req, res, next) => {
    // eslint-disable-line no-unused-vars,max-len
    res.status(404).send('Sorry, that resource was not found.');
  });

  // Handle all other errors (i.e. 500).
  // Note: You must provide specify all 4 parameters on this callback function
  // even if they aren't used, otherwise it won't be used.
  app.use((error, req, res, next) => {
    if (error) {
      /* eslint-disable no-console */
      console.log(error);
      console.log(error.stack);
    }

    res.status(500).send('Sorry, an unexpected error occurred.');
  });
}
