// src/routes/index.ts

import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/signup', UserController.signup);

export default router;