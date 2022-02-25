import { useState, useEffect } from "react";
import {
  createAccount,
  deleteAccount,
  getAccountsByUserId,
} from "../model/Accounts";

export function AccountsHook(user, setUser, allowed) {
  const [accounts, setAccounts] = useState(user.accounts);
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
    setUser((u) => ({ accounts, ...u }));
  }, [accounts]);

  return { accounts, error, addAccount, removeAccount, getAccounts };
}
