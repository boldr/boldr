const commonErrors = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  409: 'Conflict Request',
  412: 'Precondition Fail',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error'
};

const newError = (status, msg) => {
  const err = new Error(`${commonErrors[status.toString()]}: ${msg}`);
  err.status = status;
  return err;
};

export const InvalidRequestDataError = newError(422, 'Invalid request data');

export default newError;
