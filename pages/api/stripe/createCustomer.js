import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${method} Not Allowed`);

  const customer = await stripe.customers.create({
    email: req.body.email,
  });
  const intent = await stripe.setupIntents.create({
    customer: customer.id,
  });

  res.status(200).json({ customer, intent });
}
