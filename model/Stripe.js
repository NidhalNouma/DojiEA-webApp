import axios from "axios";

export async function getCustomer(user) {
  console.log("Get customer: ", user.email);
  try {
    const stripe = await axios.post("/api/stripe/getCustomer", {
      email: user.email,
      customerId: user.customerId,
    });

    return stripe;
  } catch (e) {
    console.error("Error getting customer ", e);
  }
  return null;
}

export async function createCustomer(user) {
  console.log("Create new customer: ", user.email);
  try {
    const req = await axios.post("/api/stripe/createCustomer", {
      email: user.email,
    });
    const customer = req.data.customer;

    return customer;
  } catch (e) {
    console.error("Error creating customer ", e);
  }

  return null;
}

export const createSubscription = async (
  userId,
  customerId,
  paymentMethodId,
  priceId,
  price,
  name,
  type,
  accounts,
  coupon = ""
) => {
  console.log("Create Subscription ...");
  try {
    const r = await axios.post("/api/stripe/createSubscription", {
      userId,
      customerId,
      paymentMethodId,
      priceId,
      coupon,
      price,
      name,
      accounts,
      type,
    });
    return {
      subscriptions: r?.data?.subscriptions,
      intents: r?.data?.intents,
      r: r?.data?.r,
      error: r?.error,
    };
  } catch (e) {
    console.error("Create Subscription .", e);
  }

  return null;
};

export const cancelSubscription = async (subscriptionId, customerId) => {
  console.log("cancel Subscription ...");

  try {
    const r = await axios.post("/api/stripe/cancelSubscription", {
      subscriptionId,
      customerId,
    });

    return r?.data?.subscriptions;
  } catch (e) {
    console.error("cancel Subscription .", e);
  }
  return null;
};

export const addPaymentMethod = async function (paymentMethodId, customerId) {
  console.log("Adding Payment Method ...");
  try {
    const r = await axios.post("/api/stripe/addPaymentMethod", {
      customerId,
      paymentMethodId,
    });
    // console.log(r);
    return r?.data?.paymentMethods;
  } catch (e) {
    console.error("Adding Payment Method Subscription .", e);
  }

  return null;
};

export const detachPaymentMethod = async (id, customerId) => {
  console.log("Retriving Payment Method ... ");
  let r = null;

  try {
    const req = await axios.post("/api/stripe/detachPaymentMethod", {
      id,
      customerId,
    });
    r = req?.data?.paymentMethods;
    // console.log(r);
  } catch (e) {
    console.error("Adding Payment Method Subscription .", e);
  }

  return r;
};

export const checkCoupon = async (coupon, price) => {
  console.log("Checking coupon ... ", coupon);
  try {
    const r = await axios.post("/api/stripe/check-coupon", {
      coupon: coupon.value,
    });

    if (r.data.res) {
      let np = -1;
      const off = r.data.res.percent_off;
      const aoff = r.data.res.amount_off;
      if (off) {
        np = price.old - (price.old * off) / 100;
      } else if (aoff && aoff > 0) {
        np = price.old - aoff;
        if (np < 0) np = 0;
      }

      return np;
    }
  } catch (e) {
    console.error("Checcking coupon .", e);
  }
  return null;
};
