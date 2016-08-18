import { Router } from 'express';
import s3router from './s3/s3router';
import userRoutes from './user/user.router';
import mediaRoutes from './media/media.router';
import tagRoutes from './tag/tag.router';
import roleRoutes from './role/role.router';
import postRoutes from './post/post.router';
import boldrRoutes from './boldr/boldr.router';
import menuRoutes from './menu/menu.router';
import categoryRoutes from './category/category.router';
import authRoutes from './auth';

import { isAuthenticated } from './auth/auth.service';

const router = Router();

/**
 * @apiDefine           Health Check
 * @apiDescription      Check service health
 * @api {get} /health-check
 */
router.get('/health-check', (req, res) =>
	res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/medias', mediaRoutes);
router.use('/tags', tagRoutes);
router.use('/menus', menuRoutes);
router.use('/posts', postRoutes);
router.use('/roles', roleRoutes);
router.use('/boldr', boldrRoutes);
router.use('/s3', s3router({
  headers: { 'Access-Control-Allow-Origin': '*' }, // optional
  ACL: 'public-read' // this is default
}));
router.use('/auth', authRoutes);


export default router;
