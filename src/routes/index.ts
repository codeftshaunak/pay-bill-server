// src/routes/index.ts

import express from 'express';
import UserController from '../controllers/UserController';
import PaymentController from '../controllers/PaymentController';

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/create-payment-intent', PaymentController.payment)

export default router;
