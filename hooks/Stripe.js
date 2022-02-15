import axios from "axios";
import { getAccountsByPriceId } from "../Constants";

export const createSub = async (
  userId,
  customerId,
  paymentMethodId,
  priceId,
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
    });
    console.log(r);
    return r?.data?.subscriptions;
    // if (r?.data?.newUser?.res) setUser(r.data.newUser.res);
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
    console.log(r);
    return r?.data?.subscriptions;
  } catch (e) {
    console.error("cancel Subscription .", e);
  }
  return null;
};

export const checkCoupon = async (coupon, setCoupon, price, setPrice) => {
  if (coupon.load) return;
  if (coupon.value === "") {
    setCoupon({ ...coupon, err: "Invalid coupon" });
    return;
  }
  setCoupon({ ...coupon, err: "", load: true });
  console.log("Checking coupon ... ", coupon.value);
  try {
    const r = await axios.post("/check-coupon", {
      coupon: coupon.value,
    });

    if (r.data.err && r.data.err.raw) {
      setCoupon({ ...coupon, err: r.data.err.raw.message, load: false });
      setPrice({ ...price, new: -1 });
      return;
    } else if (r.data.res) {
      let np = -1;
      const off = r.data.res.percent_off;
      const aoff = r.data.res.amount_off;
      if (off) {
        np = price.old - (price.old * off) / 100;
      } else if (aoff && aoff > 0) {
        np = price.old - aoff;
        if (np < 0) np = 0;
      }
      setPrice({ ...price, new: np });
    }
  } catch (e) {
    console.error("Checcking coupon .", e);
  }
  setCoupon({ ...coupon, load: false, err: "" });
};

export const addPaymMethod = async function (paymentMethodId, customerId) {
  console.log("Adding Payment Method ...");
  try {
    const r = await axios.post("/api/stripe/addPaymentMethod", {
      customerId,
      paymentMethodId,
    });
    console.log(r);
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
    console.log(r);
  } catch (e) {
    console.error("Adding Payment Method Subscription .", e);
  }

  return r;
};

export function allowedAccounts(subscriptions) {
  let r = 0;
  subscriptions?.forEach((v) => {
    r += getAccountsByPriceId(v.plan?.id);
  });

  return r;
}

export function getNoStatus(accounts, status) {
  let r = 0;
  accounts?.forEach((v) => {
    if (v.isActive === status) r++;
  });

  return r;
}
