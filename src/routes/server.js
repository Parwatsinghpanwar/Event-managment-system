// server.js
import express from "express";
import Razorpay from "razorpay";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_EjPCBYGTLrKWGI',
  key_secret: 'WyPVw07Mw1EfGFdk4iGflmjX'
});

app.post("/api/payment/create-order", async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: "receipt#1"
    });

    res.json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating Razorpay order");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
