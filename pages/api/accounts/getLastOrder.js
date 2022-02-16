import { getAccount } from "../../../hooks/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, email } = req.body;

  const acc = await getAccount(null, accountServer, accountNumber, email);

  return res.status(200).json({ lastOrder: acc?.lastOrder });
}
