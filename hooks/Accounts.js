import { useState, useEffect } from "react";
import {
  createAccount,
  deleteAccount,
  getAccountsByUserId,
} from "../model/Accounts";
import { getAccountsByPriceId, accountsTypes, prices } from "../Constants";

export function AccountsHook(user, setUser, allowed) {
  const [accounts, setAccounts] = useState(user?.accounts ? user.accounts : []);
  const [error, setError] = useState("");

  async function addAccount() {
    if (error !== "") setError("");
    if (accounts.length >= allowed) {
      setError("Not enough accounts");
      return;
    }
    const account = await createAccount(user);
    const acc = [account, ...accounts];

    setAccounts(acc);
  }

  async function removeAccount(id) {
    const rv = await deleteAccount(id);

    const nacc = accounts.filter((a) => a.id !== id);
    setAccounts(nacc);
  }

  async function getAccounts() {
    const acc = await getAccountsByUserId(user.uid);

    setAccounts(acc);
  }

  useEffect(() => {
    setUser({ ...user, accounts: accounts });
  }, [accounts]);

  return { accounts, error, addAccount, removeAccount, getAccounts };
}

export function getNoStatus(accounts, status, type) {
  let r = 0;
  accounts?.forEach((v) => {
    if (v.isActive === status) {
      if (v.type === type || type === undefined) r++;
    }
  });

  return r;
}

export function getAccountsByType(accounts, type) {
  let r = 0;
  accounts?.forEach((v) => {
    if (v.type === type) r++;
  });

  return r;
}

export function getAvailableToUseAccounts(plans, type) {
  let r = 0;
  // if (!plans || plans.length === 0) return r;
  plans?.forEach((p) => {
    if (Date.now() < p.renew * 1000 || p.lifeTime) {
      r += getAccountsByPriceId(p.metadata.priceId, type);
      //   r += p.metadata?.accounts;
    }
  });
  if (r === 0 && type === accountsTypes.demo) r = prices.free.demoAccounts;

  return r;
}

export function isAllowToAdd(plans, accounts, type, add) {
  console.log("User isAllowToAdd new account ...");
  const av = getAvailableToUseAccounts(plans, type);
  const nu = getNoStatus(accounts, true, type);

  console.log("type ", type, " available ", av, " used ", nu);

  if (add) if (nu >= av) return false;
  if (!add) if (nu > av) return false;

  return true;
}
