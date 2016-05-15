/**
 * boldr/server/api/upload/upload.router
 * Router for uploading files via api.
 *
 * @exports {Object} uploadRouter
 */
import Router from 'koa-router';
import { upload, uploadFile } from './upload.controller';
const uploadRouter = new Router({
  prefix: '/api/v1/uploads'
});

uploadRouter
  .get('/test', async ctx => {
    ctx.body = 'Hello uploads';
  })
  .post('/', upload.single('image'), (ctx) => {
    return ctx.created();
  });
export default uploadRouter;