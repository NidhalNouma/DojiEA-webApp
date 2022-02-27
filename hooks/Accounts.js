import { useState, useEffect } from "react";
import {
  createAccount,
  deleteAccount,
  getAccountsByUserId,
} from "../model/Accounts";
import { getAccountsByPriceId } from "../Constants";

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

export function getNoStatus(accounts, status) {
  let r = 0;
  accounts?.forEach((v) => {
    if (v.isActive === status) r++;
  });

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

export function isAllowToAdd(plans, accounts) {
  console.log("User isAllowToAdd new account ...");
  const av = getAvailableToUseAccounts(plans);
  const nu = getNoStatus(accounts, true);

  if (nu >= av) return false;
  return true;
}
