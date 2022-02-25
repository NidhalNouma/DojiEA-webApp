import { getAccount, disableOrEnableAccount } from "../../../model/Accounts";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { ID: id } = req.body;

  const account = await getAccount(id);
  if (!account)
    return res.status(200).json({ error: "Account Id not exist!!" });

  if (account.isActive) await disableOrEnableAccount(id, false);

  return res.status(200).json({ error: "", account });
}
