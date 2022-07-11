const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LJeSyKvMagMYeJNqsUsAuaNuGMkky2Gy5McHmnvIQzTJwvYMXA1pnnXqo1Uf5l3rZuAVZj5f1kwgZ5WkqdQ7iKI00p5tNWMLr"
);

// App config;
const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
//   if (req.method == "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });


// Middleware;
app.use(cors({ origin: true }));
app.use(express.json());

// Router
app.get("/", (req, res) => res.status(200).send("hello"));

app.get("/umma-abah", (req, res) =>
  res.status(200).send("sehat sehat semua abati amati")
);

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(`Request payment amount >>> ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-clone-95439/us-central1/api
