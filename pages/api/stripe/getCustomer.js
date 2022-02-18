import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${method} Not Allowed`);

  const customerId = req.body.customerId;

  if (customerId) {
    const cusP = stripe.customers.retrieve(customerId);
    const subscriptionsP = stripe.subscriptions.list({
      customer: customerId,
    });
    const intentsP = stripe.paymentIntents.list({
      customer: customerId,
    });
    const paymethP = stripe.paymentMethods.list({
      customer: customerId,
      type: "card",
    });
    const [customer, subscription, intent, paymentMethods] = await Promise.all([
      cusP,
      subscriptionsP,
      intentsP,
      paymethP,
    ]);

    return res
      .status(200)
      .json({ customer, intent, subscription, paymentMethods });
  }
}
