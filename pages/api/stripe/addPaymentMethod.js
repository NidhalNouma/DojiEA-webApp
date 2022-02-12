import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  // Set the default payment method on the customer
  const { paymentMethodId, customerId } = req.body;

  let r = { upm: null, udpm: null };
  try {
    r.upm = await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
  } catch (error) {
    console.log(error);
    return res.status("402").send({ error: error.message });
  }

  r.udpm = await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  });

  r.paymentMethods = await stripe.paymentMethods.list({
    customer: customerId,
    type: "card",
  });

  res.status(200).json(r);
}
