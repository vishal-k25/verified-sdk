// Replace if using a different env file or config
const bodyParser = require("body-parser");
const express = require("express");
const { resolve } = require("path");
const session = require("express-session");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const env = require("dotenv").config({ path: "./.env" });
const app = express();
const port = process.env.PORT || 4242;

try {
  app.use(express.static(process.env.STATIC_DIR));
} catch (e) {
  console.log("Missing env file, be sure to copy .env.example to .env");
}

app.use(session({
  secret: "Set this to a random string that is kept secure",
  resave: false,
  saveUninitialized: true,
}))

// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

// To change
const calculateApplicationFeeAmount = (amount) => .1 * amount;

app.post('/create-payment-intent', async (req, res) => {
  
    const data = req.body;
    const amount = data.amount;

    await stripe.paymentIntents.create({
      amount: amount,
      currency: data.currency,
      application_fee_amount: calculateApplicationFeeAmount(amount),
      transfer_data: {
        destination: data.account,
      },
    }).then(function(paymentIntent) {
      try {
        return res.send({
          publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
          clientSecret: paymentIntent.client_secret
        });
      } catch (err) {
        return res.status(500).send({
          error: err.message
        });
      }
    }); 
});

app.get("/recent-accounts", async (_, res) => {
  stripe.accounts.list(
    {limit: 10},
    function(err, accounts) {
      if (err) {
        return res.status(500).send({
          error: err.message
        });
      }
      return res.send({accounts});
    }
  );
});

app.get("/express-dashboard-link", async (req, res) => {
  stripe.accounts.createLoginLink(
    req.query.account_id,
    {redirect_url: req.headers.referer},
    function(err, loginLink) {
      if (err) {
        return res.status(500).send({
          error: err.message
        });
      }
      return res.send({url: loginLink.url});
    }
  );
});

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  // Verify webhook signature and extract the event.
  // See https://stripe.com/docs/webhooks/signatures for more information.
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    handleSuccessfulPaymentIntent(paymentIntent);
  }

  res.json({received: true});

});

const handleSuccessfulPaymentIntent = (paymentIntent) => {
  // Request issue of Via cash tokens
  // todo : account_id should be wallet address of payer, we should have a way of passing it from the client
  requestIssue(paymentIntent.amount, paymentIntent.account_id, paymentIntent.currency);
  console.log('PaymentIntent: ' + JSON.stringify(paymentIntent));
}

app.listen(port, () => console.log(`Node server listening on port ${port}!`));

<script src="./issue.js"></script>;
<script src="./payout.js"></script>