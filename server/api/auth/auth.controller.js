import passport from 'passport';
import Boom from 'boom';
import moment from 'moment';
import cookie from 'react-cookie';
import { handleMail, generateVerifyCode } from '../../lib';
import { User, VerificationToken, Role } from '../../db/models';
import { signToken } from '../../auth/authService';

/**
 * @api {post} /auth/login          Login to a registered account.
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup Auth
 *
 * @apiParam {String}   Email       The email address registered to the account.
 * @apiParam {String}   Password    The password
 * @apiSuccess {String} Token       The jsonwebtoken
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI...."}
 */
export function login(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      Boom.badRequest(info);
    } else {
      req.login(user, (err) => {
        if (err) {
          Boom.unauthorized(err);
        } else {
          user
            .getRoles()
            .then((roles) => {
              const rolesArray = [];

              roles.map((dataValues) => {
                rolesArray.push(dataValues.name);
              });

              user.dataValues.roles = rolesArray;
              signToken(user.id).then(token => {
                cookie.save('boldr:jwt', token, { path: '/' });
                req.user = user;
                return res.status(200).json({ token });
              });
            })
            .catch((err) => {
              return Boom.badRequest(err);
            });
        }
      });
    }
  })(req, res, next);
}

/**
 * @api {post} /auth/logout           Remove the session information
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup Auth
 */
export function logout(req, res) {
  req.logout();
  res.redirect('/');
}

/**
 * @api {post} /auth/signup           Create a new account.
 * @apiVersion 1.0.0
 * @apiName signup
 * @apiGroup Auth
 */
export function signup(req, res) {
  // For security measurement we remove the roles from the req.body object
  delete req.body.roles;
  // Add missing user fields
  const provider = 'local';

  // Save user
  User.create({
    email: req.body.email,
    password: req.body.password,
    displayName: req.body.displayName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    location: req.body.location,
    bio: req.body.bio,
    picture: req.body.picture,
    gender: req.body.gender,
    website: req.body.website,
    provider
  }).then(async (user) => {
    // Generate the verification token.
    const verificationToken = await generateVerifyCode();
    // Send the verification email.
    const subj = '[Boldr] Confirmation mail';
    handleMail(user.email, subj, verificationToken);
    // sendVerifyEmail(user.email, verificationToken);
    // Store the verification token, userId and expiration date in the db.
    const verificationStorage = await VerificationToken.create({
      userId: user.id,
      token: verificationToken,
      expiresAt: moment().add(3, 'days')
    });
    // Save token.
    verificationStorage.save();
    // Find role
    Role.findOne({
      where: {
        name: 'user'
      }
    }).then((role) => {
          // Add role
      user.addRoles(role).then((role) => {
        user.dataValues.roles = ['user'];

        user.dataValues.password = null;
        user.dataValues.salt = null;

        user._previousDataValues.password = null;
        user._previousDataValues.salt = null;
        // Login
        req.login(user, (err) => {
          if (err) {
            return Boom.unauthorized(err);
          } else {
            return res.status(201).json(user);
          }
        });

        return null;
      })
      .catch((err) => {
        return Boom.badRequest(err);
      });
      return null;
    })
    .catch((err) => {
      return Boom.badRequest(err);
    });

    return null;
  }).catch((err) => {
    return Boom.badRequest(err);
  });
}
export function checkUser(req, res, next) {
  const userId = req.user.id;
  return User.find({
    where: {
      id: userId
    },
    attributes: [
      'id',
      'firstName',
      'lastName',
      'email',
      'displayName',
      'provider'
    ],
    include: [
      {
        model: Role
      }
    ]
  })
    .then(user => {
      if (!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

export function verifyEmail(req, res, next) {
  const { email, token } = req.body;

  User.find({
    where: { email },
    attributes: ['id'],
    include: [{
      model: VerificationToken
    }]

  }, (err, user) => {
    if (err) { return next(err); }

    if (!user) {
      return res.status(422).send({ error: { message: 'User doesnt exists', resend: false } });
    }

    if (user.auth.used) {
      return res.status(422).send({ error: { message: 'link already used', resend: false } });
    }

    if (new Date() > user.auth.expires) {
      return res.status(422).send({ error: { message: 'link already expired', resend: true } });
    }

    if (token !== user.auth.token) {
      return res.status(422).send({ error: { message: 'something has gone wrong, please sign up again', resend: false } });
    }
    //
    // User.findByIdAndUpdate(user.id, { role: 1, auth: { used: true } }, (err) => {
    //   if (err) { return next(err); }
    //
    //   const { email, firstname, lastname } = user;
    //
    //   res.json({ token: tokenForUser(user), email, firstname, lastname });
    // });
  });
}
export default {
  login,
  logout,
  signup,
  verifyEmail
};
