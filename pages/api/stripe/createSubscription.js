import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${method} Not Allowed`);

  let subscription = null;
  let subscriptions = null;
  const { paymentMethodId, customerId, priceId, coupon } = req.body;

  try {
    subscription = await createSubscription(
      paymentMethodId,
      customerId,
      priceId,
      coupon
    );

    subscriptions = await stripe.subscriptions.list({
      customer: customerId,
    });
  } catch (error) {
    return res.status("402").json({ error: { message: error.message } });
  }

  res.status(200).json({ subscriptions, subscription });
}

async function createSubscription(
  paymentMethodId,
  customerId,
  priceId,
  coupon
) {
  let r = null;

  try {
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });

    let updateCustomerDefaultPaymentMethod = await stripe.customers.update(
      customerId,
      {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      }
    );

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent", "pending_setup_intent"],
      coupon: coupon,
    });

    console.log(subscription);

    r = { subscription };
  } catch (error) {
    // return res.status("402").send({ error: { message: error.message } });
    console.log(error);
    r = { error };
  }

  return r;
}
