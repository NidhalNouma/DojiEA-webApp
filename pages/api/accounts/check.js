import { getAccount } from "../../../model/Accounts";
import { isAllowToAdd } from "../../../hooks/Accounts";
import { getUser } from "../../../model/User";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, ID: id, type } = req.body;
  const account = await getAccount(id);

  if (!account)
    return res.status(200).json({
      error: "Account was deleted, please try another ID!",
      valid: false,
    });

  const user = await getUser(account.uid);
  if (!user)
    return res.status(200).json({
      error:
        "User of the account is not exist, visit dojibot.com to check your accounts",
      valis: false,
    });

  if (isAllowToAdd(user.plans, user.accounts) === false)
    return res.status(200).json({
      error:
        "User is not allowed to add a new " +
        type +
        " account, please check your membership!!",
      valid: false,
    });

  return res.status(200).json({ error: "", valid: true });
}
