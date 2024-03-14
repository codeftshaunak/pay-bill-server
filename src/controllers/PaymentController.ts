// src/controllers/UserController.ts

import { Request, Response } from 'express';
const stripe = require('stripe');
const stripeClient = new stripe("sk_test_51OryqRKsSMFhuga12DCJtZa0BiOt1C210brdsQvm4fnq0qxoJQKcWVG8GMNICvxnl6Z3J9s7LdUUEs0ZL3Nmx1Wm009s7By2tU");



const PaymentController = {
    async payment(req: Request, res: Response) {
        const { amount, currency } = req.body;
        try {
            // Create a payment intent using the Stripe library
            const paymentIntent = await stripeClient.paymentIntents.create({
                amount,
                currency,
            });

            // Send the client secret back to the client along with other necessary data
            res.status(200).json({
                clientSecret: paymentIntent.client_secret,
                email: paymentIntent.customer,
                id: paymentIntent.id,
                // Include any other relevant data here
            });
        } catch (error) {
            console.error('Error creating payment intent:', error);
            res.status(500).json({ error: 'Failed to create payment intent' });
        }
    },
};

export default PaymentController;
