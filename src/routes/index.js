import express from 'express';
import postRoutes from './postRoutes';
import dalleRoutes from './dalleRoutes';

const router = express.Router();

router.use(express.json({ limit: '50mb' }));
router.use(express.urlencoded({ extended: true }));

router.use('/post', postRoutes);
router.use('/dalle', dalleRoutes);

export default router;