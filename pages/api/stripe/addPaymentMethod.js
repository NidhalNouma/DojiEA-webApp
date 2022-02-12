import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  // Set the default payment method on the customer
  const { paymentMethodId, customerId } = req.body;
  if (!paymentMethodId || !customerId) {
    res.send("Invalid input");
    return;
  }
  let r = { upm: null, udpm: null };
  try {
    upm = await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
  } catch (error) {
    return res.status("402").send({ error: { message: error.message } });
  }

  udpm = await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  });

  res.status(200).json({ r });
}
