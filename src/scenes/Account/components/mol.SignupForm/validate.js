const validate = values => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (!values.get('displayName')) {
    errors.displayName = 'Required';
  } else if (values.get('displayName').length > 30) {
    errors.displayName = 'Must be 30 characters or less';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('firstName')) {
    errors.firstName = 'Required';
  }
  return errors;
};

export default validate;
