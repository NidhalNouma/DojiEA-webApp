import { getAccount } from "../../../model/Accounts";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, ID: id } = req.body;
  const account = await getAccount(id);

  if (!account)
    return res.status(200).json({
      error: "Account was deleted, please try another ID!",
      valid: false,
    });
  return res.status(200).json({ error: "", valid: true });
}
