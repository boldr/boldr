import signToken from './signToken';

/**
 * Set token cookie directly for oAuth strategies
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {*} - forgetaboutit
 */
export default function setTokenCookie(req, res) {
  if (!req.user) {
    return res.json(404, { message: 'Something went wrong, please try again.' });
  }
  const token = signToken(req.user.id);
  res.cookie('token', token);
  res.redirect('/');
}
