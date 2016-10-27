import compose from 'composable-middleware';
import { trim } from 'lodash';

/**
 * Takes the token cookie and adds the header
 * for it on the request
 * @returns {Function} - express middleware
 */
export default function addAuthHeaderFromCookie() {
  return compose()
        .use((req, res, next) => {
          if (req.cookies.token) {
            req.headers.authorization = `${trim(req.cookies.token, '"')}`;
          }
          return next();
        });
}
