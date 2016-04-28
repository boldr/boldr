import Router from 'koa-router';
import config, { paths } from '../../../../tools/config';
import { registerUser, loginUser } from './auth.controller';

const router = new Router();

router.prefix('/api/v1/auth');

router
  .get('/test', async ctx => {
    ctx.body = 'Auth Router';
  });

router
  .post('/register', registerUser);

router
  .post('/login', loginUser);

router
  .post('/logout', async ctx => {
    ctx.body = 'Hello Logout';
  });

export default router;