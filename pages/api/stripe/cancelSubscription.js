import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  const { subscriptionId, customerId } = req.body;
  // Delete the subscription
  const deletedSubscription = await stripe.subscriptions.del(subscriptionId);

  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
  });

  res.status(200).json({ deletedSubscription, subscriptions });
}
