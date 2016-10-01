import express from 'express';

import authRoutes from './auth/auth.routes';
import collectionRoutes from './collection/collection.routes';
import galleryRoutes from './gallery/gallery.routes';
import linkRoutes from './link/link.routes';
import mediaRoutes from './media/media.routes';
import navigationRoutes from './navigation/navigation.routes';
import pageRoutes from './page/page.routes';
import postRoutes from './post/post.routes';
import roleRoutes from './role/role.routes';
import s3Router from './s3/s3.routes';
import settingRoutes from './setting/setting.routes';
import tagRoutes from './tag/tag.routes';
import typeRoutes from './type/type.routes';
import userRoutes from './user/user.routes';

const router = express.Router();

router.get('/health-check', (req, res) =>
	res.send('OK, it works')
);

router.use('/auth', authRoutes);
router.use('/collections', collectionRoutes);
router.use('/galleries', galleryRoutes);
router.use('/links', linkRoutes);
router.use('/media', mediaRoutes);
router.use('/navigations', navigationRoutes);
router.use('/pages', pageRoutes);
router.use('/posts', postRoutes);
router.use('/roles', roleRoutes);
router.use('/s3', s3Router({
  headers: { 'Access-Control-Allow-Origin': '*' }, // optional
  ACL: 'public-read' // this is default
}));
router.use('/settings', settingRoutes);
router.use('/tags', tagRoutes);
router.use('/types', typeRoutes);
router.use('/users', userRoutes);

export default router;
