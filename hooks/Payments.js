import { useState } from "react";
import {
  createSubscription,
  detachPaymentMethod,
  addPaymentMethod,
  cancelSubscription,
  checkCoupon,
} from "../model/Stripe";
import { addPlan, desactivePlan, getPlans } from "../model/Plans";

export function CreateSubscription(data, paymentMethod, user, setUser, done) {
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    if (!paymentMethod) {
      //   setOpen(open + 1);
      setError("No paymentMethod selected!");
      return;
    }

    const { subscriptions, intents, r, error } = await createSubscription(
      user.uid,
      user.customerId,
      paymentMethod.id,
      data.id,
      data.price,
      data.title,
      data.type,
      data.accounts
    );

    if (error) {
      setError(error.message);
      return;
    } else if (r.error) {
      setError(r.error.raw.message);
      return;
    } else {
      let nplan;
      if (r.intent)
        nplan = await addPlan(
          user.uid,
          r.intent.id,
          true,
          null,
          r.intent.metadata
        );
      else if (r.subscription)
        nplan = await addPlan(
          user.uid,
          r.subscription.id,
          false,
          r.subscription.current_period_end,
          r.subscription.metadata
        );

      const plans = [...user.plans, nplan];
      const stripe = {
        ...user.stripe,
        subscription: subscriptions,
        intent: intents,
      };

      const nu = {
        ...user,
        stripe,
        plans,
      };
      setUser(nu);
      done(false);
    }
  };

  return { error, submit };
}

export function CancelSubscription(user, setUser) {
  const submit = async (id, setOpen) => {
    let subscription = await cancelSubscription(id, user.customerId);

    if (subscription) {
      const endPlan = await desactivePlan(user.uid, id);
      const stripe = { ...user.stripe, subscription };
      const plans = await getPlans(user.uid);
      const nu = {
        ...user,
        stripe,
        plans,
      };
      setUser(nu);
      setOpen(false);
    }
  };

  return { submit };
}

export function AttachPaymentMethod(user, setUser) {
  const [error, setError] = useState("");

  const submit = async (stripe, elements, CardElement, close) => {
    if (elements == null) {
      return;
    }
    setError("");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      return;
    }

    const paymentMethods = await addPaymentMethod(
      paymentMethod.id,
      user.customerId
    );

    if (paymentMethods) {
      const nu = {
        ...user,
        stripe: { ...user.stripe, paymentMethods },
      };
      setUser(nu);
      close();
    } else
      setError("Your card was declined. please try again with another card.");
  };

  return { error, submit };
}

export function DetachPaymentMethod(user, setUser) {
  const submit = async (paymentMethod) => {
    let paymentMethods = await detachPaymentMethod(
      paymentMethod.id,
      user.customerId
    );

    if (paymentMethods) {
      const nu = {
        ...user,
        stripe: { ...user.stripe, paymentMethods },
      };
      setUser(nu);
    }
  };

  return { submit };
}

export function CheckCoupon() {
  const [coupon, setCoupon] = useState(null);
  const [nprice, setNPrice] = useState(null);

  const submit = async (price) => {
    if (!coupon) return;
    const c = await checkCoupon(coupon, price);
    if (c) {
      setNPrice(c);
    }
  };

  return { coupon, setCoupon, submit, nprice };
}
