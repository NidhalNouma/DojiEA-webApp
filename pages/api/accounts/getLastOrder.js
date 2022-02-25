import { getAccount } from "../../../model/Accounts";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, ID: id } = req.body;

  const acc = await getAccount(id);

  return res.status(200).json({
    lastOrder: acc?.lastOrder ? acc.lastOrder : "1900.01.01 00:00:00",
  });
}
