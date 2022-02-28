import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${method} Not Allowed`);

  let r = null;
  let subscriptions = null;
  let intents = null;
  const {
    paymentMethodId,
    customerId,
    priceId,
    coupon,
    name,
    type,
    price,
    accounts,
  } = req.body;

  try {
    r = await createSubscription(
      paymentMethodId,
      customerId,
      priceId,
      coupon,
      name,
      type,
      price,
      accounts
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
  priceId,
  coupon,
  name,
  type,
  price,
  accounts
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
    let subscription = null;
    let intent = null;
    if (type === "subscription") {
      subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        expand: ["latest_invoice.payment_intent", "pending_setup_intent"],
        coupon: coupon,
        metadata: { priceId, name, price, accounts },
        default_payment_method: paymentMethodId,
      });
    } else {
      intent = await stripe.paymentIntents.create({
        amount: price * 100,
        currency: "usd",
        customer: customerId,
        confirm: true,
        payment_method: paymentMethodId,
        metadata: { priceId, name, price, accounts },
      });
    }

    r = { subscription, intent };
  } catch (error) {
    // return res.status("402").send({ error: { message: error.message } });
    console.log(error);
    r = { error };
  }

  return r;
}
