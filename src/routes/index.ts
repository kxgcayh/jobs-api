import { Router } from 'express';
import authRouter from './auth.route';
import jobRouter from './job.route';
const router = Router();

// Endpoint co check server status
router.get('/health-check', async (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.send(healthCheck);
  } catch (e: any) {
    healthCheck.message = e;
    res.status(503).send();
  }
});

// Import all job routes
router.use('/jobs', jobRouter);

//Import all auth routes
router.use('/auth', authRouter);

export default router;
