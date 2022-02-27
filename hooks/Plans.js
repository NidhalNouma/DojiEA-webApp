import { updateRenew, addPlan } from "../model/Plans";
import { getAccountsByPriceId, prices } from "../Constants";

export function getAvailablePlans(plans) {
  //   console.log(plans);
  if (!plans || plans.length === 0) return [];
  const r = plans.filter(
    (p) =>
      p &&
      verifyPriceId(p.metadata?.priceId) &&
      ((p.isActive && Date.now() < p.renew * 1000) || p.lifeTime === true)
  );

  return r;
}

export function getCanceledPlans(plans) {
  //   console.log(plans);
  if (!plans || plans.length === 0) return [];
  const r = plans.filter(
    (p) => p && !p.isActive && verifyPriceId(p.metadata?.priceId) // && Date.now() < p.renew * 1000)
  );

  return r;
}

export function getAvailableToUseAccounts(plans) {
  const r = 0;
  if (!plans || plans.length === 0) return r;
  plans.forEach((p) => {
    if (Date.now() < p.renew * 1000 || p.lifeTime) {
      r += getAccountsByPriceId(p.metadata.priceId);
      //   r += p.metadata?.accounts;
    }
  });

  return r;
}

export async function verifyPlans(user) {
  console.log("Verifying plans ...");
  let updated = false;
  const subscriptions = user?.stripe?.subscription?.data;
  const intents = user?.stripe?.intent?.data;
  const plans = user?.plans;

  if (subscriptions.length > 0) {
    const l = subscriptions.length;
    for (let i = 0; i < l; i++) {
      const s = subscriptions[i];
      const p = getPlanById(s.id, plans);

      // console.log(p, s);
      if (!p) {
        if (verifyPriceId(s.metadata?.priceId)) {
          const np = await addPlan(
            user.uid,
            s.id,
            false,
            s.current_period_end,
            s.metadata
          );

          updated = true;
        }
      } else if (s.current_period_end !== p.renew) {
        await updateRenew(user.uid, p.id, s.current_period_end);
        updated = true;
      }
    }
  }

  if (intents.length > 0) {
    const l = intents.length;
    for (let i = 0; i < l; i++) {
      const s = intents[i];
      const p = getPlanById(s.id, plans);

      // console.log(p, s);
      if (!p)
        if (s.metadata?.priceId === prices[3].id) {
          const np = await addPlan(user.uid, s.id, true, null, s.metadata);

          updated = true;
        }
    }
  }

  return updated;
}

function getPlanById(id, plans) {
  for (let i = 0; i < plans.length; i++) {
    if (plans[i].id === id) return plans[i];
  }
  return null;
}

function verifyPriceId(id) {
  if (!id) return false;
  let r = false;

  prices.forEach((v) => {
    if (v.id === id) r = true;
  });

  return r;
}
