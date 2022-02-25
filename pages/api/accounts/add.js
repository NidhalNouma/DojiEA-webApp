import {
  setAccount,
  getAccount,
  disableOrEnableAccount,
} from "../../../model/Accounts";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, accountName, ID: id } = req.body;

  const account = await getAccount(id);
  if (!account)
    return res.status(200).json({ error: "Account Id not exist!!" });

  if (!account.accountNumber)
    await setAccount(id, accountNumber, accountServer, accountName);
  else if (
    account.accountNumber !== accountNumber ||
    account.accountServer !== accountServer
  ) {
    return res
      .status(200)
      .json({ error: "Id is used in a different account!!" });
  } else if (!account.isActive) await disableOrEnableAccount(id, true);

  return res.status(200).json({ error: "", account });
}
