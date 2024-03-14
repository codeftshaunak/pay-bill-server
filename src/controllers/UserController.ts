
import express, { Request, Response } from 'express';
import stripe from 'stripe'; // Import the Stripe library

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY; // Retrieve your Stripe secret key from environment variables
const stripeClient = new stripe("pk_test_51OryqRKsSMFhuga1wGU0xYUfS6OYQeBJFnxgy7zecfvEB1SeiGAO2syLedWRGEHSyrKDXaLN17PcT2qMqWZTDbDr00fdtZ3B9S");


  

const UserController = {
  async signup(req: Request, res: Response) {
    const { amount, currency } = req.body;

    try {
        // Create a payment intent using the Stripe library
        const paymentIntent = await stripeClient.paymentIntents.create({
            amount,
            currency,
        });

        // Send the client secret back to the client
        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: 'Failed to create payment intent' });
    }
  },
};

export default UserController;
