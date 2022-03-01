import {
  setAccount,
  getAccount,
  disableOrEnableAccount,
} from "../../../model/Accounts";
import { isAllowToAdd } from "../../../hooks/Accounts";
import { getUser } from "../../../model/User";
import { version, message } from "../../../Constants";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let valid = false;
  let msg = "";

  let { accountNumber, accountServer, accountName, type, ID: id } = req.body;

  const ver = req.body.vesion;

  if (version && version > ver) msg = "New version available. " + version;
  if (message) msg = message;

  console.log(`${id} ${accountNumber} ${accountServer} ${accountName} ${type}`);

  const account = await getAccount(id);
  if (!account)
    return res.status(200).json({
      error: "Id is not exist, please try again with a valid ID!!",
      valid,
      msg,
    });

  const user = await getUser(account.uid);
  if (!user)
    return res.status(200).json({
      error:
        "User of the account is not exist, visit dojibot.com to check your accounts",
      valid,
      msg,
    });

  if (isAllowToAdd(user.plans, user.accounts, type, true) === false)
    return res.status(200).json({
      error:
        "User is not allowed to add a new " +
        type +
        " account, please check your membership!!",
      valid,
      msg,
    });

  if (!account.accountNumber)
    await setAccount(id, accountNumber, accountServer, accountName, type);
  else if (
    account.accountNumber !== accountNumber ||
    account.accountServer !== accountServer
  ) {
    return res.status(200).json({
      error: "Id is used in a different account, please try different ID!!",
      valid,
      msg,
    });
  } else if (!account.isActive) await disableOrEnableAccount(id, true);

  return res.status(200).json({ error: "", account, valid: true, msg });
}
