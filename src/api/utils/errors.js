export class BaseError extends Error {
  constructor(message, name = 'Error', httpStatus = 400) {
    super();
    this.message = message;
    this.name = name;
    this.httpStatus = httpStatus;
  }

  getHttpStatus() {
    return this.httpStatus;
  }
}

export class ValidationError extends BaseError {
  constructor() {
    super('Validation error!', 'ValidationError', 400);
  }
}

export class GeneralNotFoundError extends BaseError {
  constructor() {
    super('The server monkey might have misplaced the requested resource. Try again', 'GeneralNotFoundError', 404);
  }
}
export class UserNotFoundError extends BaseError {
  constructor() {
    super('Whomever you were looking for might not exist.', 'UserNotFoundError', 404);
  }
}
export class NotAuthenticatedError extends BaseError {
  constructor() {
    super('Not authenticated', 'NotAuthenticatedError', 400);
  }
}

export class UnknownIdentityError extends BaseError {
  constructor() {
    super('Unknown identity!', 'UnknownIdentityError', 404);
  }
}

export class InvalidPasswordError extends BaseError {
  constructor() {
    super('Wrong password!', 'InvalidPasswordError', 401);
  }
}

export class EmailConfirmedError extends BaseError {
  constructor() {
    super('Email already confirmed!', 'EmailConfirmedError', 400);
  }
}

export class EmailTakenError extends BaseError {
  constructor() {
    super('Email already taken by another user!', 'EmailTakenError', 400);
  }
}

export class InternalError extends BaseError {
  constructor() {
    super('Internal error! Please try again later.', 'InternalError', 500);
  }
}

export class PostNotFoundError extends BaseError {
  constructor() {
    super('Post not found!', 'PostNotFoundError', 404);
  }
}

export class TagNotFoundError extends BaseError {
  constructor() {
    super('Tag not found!', 'TagNotFoundError', 404);
  }
}
export class DuplicateSlugError extends BaseError {
  constructor() {
    super('Slugs must be unique!', 'DuplicateSlugError', 409);
  }
}
