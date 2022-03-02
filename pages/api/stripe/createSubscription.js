import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${method} Not Allowed`);

  let r = null;
  let subscriptions = null;
  let intents = null;
  const { paymentMethodId, customerId, coupon, type, metadata } = req.body;

  try {
    r = await createSubscription(
      paymentMethodId,
      customerId,
      metadata,
      type,
      coupon
    );

    subscriptions = await stripe.subscriptions.list({
      customer: customerId,
    });

    intents = await stripe.paymentIntents.list({
      customer: customerId,
    });
  } catch (error) {
    return res
      .status("402")
      .json({ error: { message: error.message }, subscriptions, r, intents });
  }

  res.status(200).json({ subscriptions, r, intents, error: null });
}

async function createSubscription(
  paymentMethodId,
  customerId,
  metadata,
  type,
  coupon
) {
  let r = null;

  try {
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });

    // let updateCustomerDefaultPaymentMethod = await stripe.customers.update(
    //   customerId,
    //   {
    //     invoice_settings: {
    //       default_payment_method: paymentMethodId,
    //     },
    //   }
    // );

    // Create the subscription
    let subscription = null;
    let intent = null;
    if (type === "subscription") {
      subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: metadata.priceId }],
        expand: ["latest_invoice.payment_intent", "pending_setup_intent"],
        coupon: coupon,
        metadata,
        default_payment_method: paymentMethodId,
      });
    } else {
      intent = await stripe.paymentIntents.create({
        amount: metadata.price * 100,
        currency: "usd",
        customer: customerId,
        confirm: true,
        payment_method: paymentMethodId,
        metadata,
      });
    }

    r = { subscription, intent };
  } catch (error) {
    console.log(error);
    r = { error };
  }

  return r;
}
