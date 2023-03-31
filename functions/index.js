const functions = require("firebase-functions");
const cors = require('cors');
const stripe = require('stripe');('sk_test_51MpmLRKGdWrfNB1o9QSCIc9d9HuXgKy7NY9hz79gBBNYzuBHayg25UlA0xGrOXBzRvLVJwLrmQADAzRKaFugd63D00UmeHOoq5')
const express = require('express');
const { response } = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello'));

app.post('/payments/create', async (request, response) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    const total = request.query.total;

console.log('paykment' , total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    });

    response.status(201).send({
            clientSecret:paymentIntent.client_secret,
        });
});

// http://127.0.0.1:5001/clone-6d4b4/us-central1/api


exports.api = functions.https.onRequest(app);
