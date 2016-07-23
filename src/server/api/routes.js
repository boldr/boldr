import { Router } from 'express';
import s3router from '../lib/s3/s3router';
import userRoutes from './user/user.router';
import mediaRoutes from './media/media.router';
import tagRoutes from './tag/tag.router';
import articleRoutes from './article/article.router';
import settingRoutes from './setting/setting.router';
import categoryRoutes from './category/category.router';

const router = Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
	res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/medias', mediaRoutes);
router.use('/tags', tagRoutes);
router.use('/articles', articleRoutes);
router.use('/settings', settingRoutes);
router.use('/s3', s3router({
  headers: { 'Access-Control-Allow-Origin': '*' }, // optional
  ACL: 'public-read' // this is default
}));


export default router;