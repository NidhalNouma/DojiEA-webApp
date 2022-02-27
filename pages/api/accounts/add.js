import {
  setAccount,
  getAccount,
  disableOrEnableAccount,
} from "../../../model/Accounts";
import { isAllowToAdd } from "../../../hooks/Accounts";
import { getUser } from "../../../model/User";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, accountName, ID: id } = req.body;

  const account = await getAccount(id);
  if (!account)
    return res
      .status(200)
      .json({ error: "Id is not exist, please try again with a valid ID!!" });

  const user = await getUser(account.uid);
  console.log(user);
  if (!user)
    return res.status(200).json({
      error:
        "User of the account is not exist, visit dojibot.com to check your accounts",
    });

  if (isAllowToAdd(user.plans, user.accounts) === false)
    return res.status(200).json({
      error:
        "User is not allowed to add a new account, please check your membership!!",
    });

  if (!account.accountNumber)
    await setAccount(id, accountNumber, accountServer, accountName);
  else if (
    account.accountNumber !== accountNumber ||
    account.accountServer !== accountServer
  ) {
    return res.status(200).json({
      error: "Id is used in a different account, please try different ID!!",
    });
  } else if (!account.isActive) await disableOrEnableAccount(id, true);

  return res.status(200).json({ error: "", account });
}
