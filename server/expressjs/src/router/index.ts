import express from 'express';
import authRoute from './auth.router';
import pageRoute from './page.router';

const router = express.Router();

router.use('/api/auth', authRoute);
router.use(pageRoute);

export default router;