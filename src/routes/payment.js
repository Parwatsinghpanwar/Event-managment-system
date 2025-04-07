const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: 'rzp_test_EjPCBYGTLrKWGI',
  key_secret: 'WyPVw07Mw1EfGFdk4iGflmjX'
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ order });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
