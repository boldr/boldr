import expressValidator from 'express-validator';
import GeneralError from '../errors/generalError';

export default function(err, req, res, next) {
  if (err instanceof expressValidator.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
    const error = new GeneralError(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if (!(err instanceof GeneralError)) {
    const apiError = new GeneralError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
}
